import dotenv from "dotenv"
import mongoose from "mongoose";
import mercadopago from "../lib/mercadopago.js";
import QRCode from 'qrcode';
import nodemailer from 'nodemailer'; 
import { user_mail, pass } from "../config.js";
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid'
import blogModel from "../models/blogModel.js";
import eventModel from "../models/eventModel.js";

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || 'kidjaskdhajsdbjadlfgkjmlkjbnsdlfgnsñlknamnczmjcf'

export const handleSuccessfulPayment = async ({quantity, mail}) => {
  await qrGeneratorController(quantity, mail);
};


export const buyEventTicketsController = async (req, res) => {
  const { nombreCompleto, dni, quantity, mail, total } = req.body;  //guardar el mail del rrpp tambien encriptandolo con un jwt
  try {
      const preference = {
            items: [
                {
                title: `Mendoza Suena`,
                quantity: 1,
                unit_price: 1,//total,
                currency_id: 'ARS',
                },
            ],
            payer: {
                name:nombreCompleto,
                surname: nombreCompleto,
                email: mail,
            },
            back_urls: {
                success: 'https://gomarket-1-backend.onrender.com/payment-success',
                failure: 'https://gomarket-1-backend.onrender.com/payment-failure',
                pending: 'https://gomarket-1-backend.onrender.com/payment-pending',
            },
            external_reference: "164382724",
            auto_return: 'approved',
            notification_url: 'https://gomarket-1-backend.onrender.com/webhook/mercadopago',  //esto descomentarlo 
            metadata: {
                    nombreCompleto,
                    dni,
                    quantity,
                    mail,
                    total
            },
        };
        const response = await mercadopago.preferences.create(preference);
        if(response.body && response.body.init_point){
                res.json({
                    id: response.body.id,
                    init_point: response.body.init_point,
                });
        }
    } catch (error) {
        console.error('Error al crear preferencia:', error);
        res.status(200).json({ message: 'Error creando la preferencia' });
    }
};



export const mercadoPagoWebhookController = async (req, res) => {
  console.log('📨 Webhook recibido');

  try {
    const paymentId = String(req.body?.data?.id || req.query?.['data.id']);
    const type = req.body?.type || req.query?.type;

    if (!paymentId || type !== 'payment') {
      console.error("❌ Webhook inválido - paymentId o type faltante");
      return res.sendStatus(400);
    }

    const payment = await mercadopago.payment.findById(paymentId);
    if (!payment || !payment.body) {
      console.error("❌ No se pudo obtener el pago con ID:", paymentId);
      return res.sendStatus(200);
    }

    const status = payment.body.status;
    const statusDetail = payment.body.status_detail;

    console.log(`📦 Pago ${paymentId} con estado: ${status} (${statusDetail})`);

    if (status === 'approved') {
      const { nombreCompleto, dni, quantity, mail, total } = payment.body.metadata;

      if (!quantity || !mail || !total) {
        console.error("❌ Metadata incompleta:", payment.body.metadata);
        return res.sendStatus(200);
      }

      console.log(`✅ Pago aprobado para ${mail}. Total: ${total}, Cantidad: ${quantity}`);

      await qrGeneratorController(nombreCompleto, dni, quantity, mail, total);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error('❌ Error en webhook:', error.message);
    return res.sendStatus(400);
  }
};

export const qrGeneratorController = async (nombreCompleto, dni, quantity, mail, total) => {
  console.log(mail)
  try {
    const qrTasks = [];

      for (let i = 0; i < quantity; i++) {
        const payload = {
          nombreCompleto, 
          dni,
          quantity: quantity,
          mail: mail,
          iat: Math.floor(Date.now() / 1000),
          jti: uuidv4()
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '10d' });
        const ticket = new eventModel({
          token: token
        })
        await ticket.save()
        const qrUrl = `https://gomarket.ar/validate/${token}`;

        // ⏱️ Agregamos la tarea (no await todavía)
        qrTasks.push(
          QRCode.toDataURL(qrUrl)
            .then(qrImage => {
              const qrBase64 = qrImage.split(',')[1];
              const qrBuffer = Buffer.from(qrBase64, 'base64');
              return sendQrEmail(mail, qrBuffer, quantity);
            })
        );
    }

  // ⚡ Esperá todas las tareas en paralelo
    await Promise.all(qrTasks);
      console.log("QRs generados y enviados.");
      return res.json({resp: 1})
    } catch (err) {
      console.error("Error generando QRs: ", err);
    }
};


const sendQrEmail = async (email, qrBuffer, quantity) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: user_mail,
      pass: pass
    }
  });
    await transporter.sendMail({
    from: '"GoTickets" <no-reply@gotickets.com>',
    to: email,
    subject: `Tu entrada para Mendoza Suena`,
    html: `
        <div style="background-color:black; padding:30px">
          <h3 style="font-size:26px; color:white;">Gracias por tu compra</h3>
          <p style="color:white; font-size:22px;">Ya tienes disponible tu entrada para: Mendoza Suena</p>
          <p style="color:white; font-size:22px;">Escaneá este QR en la entrada:</p>
          <div style="display:flex; justify-content=space-evenly;">
            <img src="https://res.cloudinary.com/drmcrdf4r/image/upload/v17237842/gomarket/mendoza_suena_pmrufi.jpg" alt="Mendoza Suena" style="width:200px;height:200px;"/>
            <img src="cid:qrcodeimg" alt="QR para Mendoza Suena" style="width:200px;height:200px;"/>
          </div>
        </div>
    `,
    attachments: [
        {
        filename: 'qrcode.png',
        content: qrBuffer,         
        cid: 'qrcodeimg'      
        }
    ]
    });
};

export const getInfoQrController = async (req, res) => {
    const { token } = req.query;

    const tokenValidation = await eventModel.findOne({token: token})

    if (!tokenValidation) {
      return res.status(400).json({ message: 'Ticket caducado o inactivo' });
    }

    if(tokenValidation.used){
      return res.status(400).json({ message: 'El Ticket ya fue usado' });
    }

    tokenValidation.used = true
    await tokenValidation.save()
    const decoded = jwt.verify(token, JWT_SECRET);

    return res.json(decoded)
  
}

export const paymentSuccessController = async (req, res) => {
  const paymentId = req.query.payment_id;

  try {
    const payment = await mercadopago.payment.findById(paymentId);

    if (payment.body.status === 'approved') {
      // ✅ Confirmar pedido, mostrar gracias, etc.
      res.send('Pago aprobado con éxito');
    } else {
      res.send('Pago no aprobado');
    }
  } catch (error) {
    console.error('Error al verificar pago:', error);
    res.status(500).send('Error interno');
  }
};
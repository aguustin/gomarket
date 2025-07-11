import dotenv from "dotenv"
import mongoose from "mongoose";
import mercadopago from "../lib/mercadopago.js";
import QRCode from 'qrcode';
import nodemailer from 'nodemailer'; 
import { user_mail, pass } from "../config.js";
import jwt from 'jsonwebtoken';

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || 'kidjaskdhajsdbjadlfgkjmlkjbnsdlfgnsñlknamnczmjcf'

export const handleSuccessfulPayment = async ({quantity, mail}) => {
  await qrGeneratorController(quantity, mail);
};


export const buyEventTicketsController = async (req, res) => {
  const { quantity, mail, estado, total} = req.body;  //guardar el mail del rrpp tambien encriptandolo con un jwt
  try {
      const preference = {
            items: [
                {
                title: `Ticket para Mendoza Suena`,
                quantity: 1,
                unit_price: total,
                currency_id: 'ARS',
                },
            ],
            payer: {
                email: 'maxigimenez79@gmail.com'/*mail*/,
            },
            back_urls: {
                success: 'https://d775-200-32-101-183.ngrok-free.app/payment-success',
                failure: 'https://d775-200-32-101-183.ngrok-free.app/payment-failure',
                pending: 'https://d775-200-32-101-183.ngrok-free.app/payment-pending',
            },
            auto_return: 'approved',
            notification_url: 'https://d775-200-32-101-183.ngrok-free.app/webhook/mercadopago',  //esto descomentarlo 
            metadata: {
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
        res.status(500).json({ message: 'Error creando la preferencia' });
    }
};

export const mercadoPagoWebhookController = async (req, res) => {
  try {
    const paymentId = req.body?.data?.id || req.query?.['data.id'];
    const type = req.body?.type || req.query?.type;

    if (!paymentId || type !== 'payment') {
      console.error("❌ Webhook inválido - paymentId o type faltante");
      return res.sendStatus(400);
    }

    const payment = await mercadopago.payment.findById(paymentId);
    const status = payment.body?.status;

    console.log(`📦 Pago ${paymentId} con estado: ${status}`);

    if (status === 'approved') {
      const { quantity, mail, total } = payment.body.metadata;

      if (!quantity || !mail || !total) {
        console.error("❌ Metadata incompleta:", payment.body.metadata);
        return res.sendStatus(500);
      }

      console.log(`✅ Pago aprobado para ${mail}. Total: ${total}, Cantidad: ${quantity}`);

      await qrGeneratorController(quantity, mail, total); // Aquí se suma o procesa
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error('❌ Error en webhook:', error.message);
    return res.sendStatus(400);
  }
};

export const qrGeneratorController = async (quantity, mail, total) => {

  try {
    
  const qrTasks = [];

    

      for (let i = 0; i < quantity; i++) {
        const payload = {
          quantity: quantity,
          mail: mail,
          iat: Math.floor(Date.now() / 1000),
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '10d' });
        const qrUrl = `http://localhost:3000/ticket/validate?token=${token}`;

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
    } catch (err) {
      console.error("Error generando QRs: ", err);
    }
};


const sendQrEmail = async (email, qrBuffer, quantity) => {
  console.log('email: ', email)
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
        <h3>Gracias por tu compra</h3>
        <p>Ya tienes disponible tu entrada para: Mendoza Suena</p>
        <p>Escaneá este QR en la entrada:</p>
        <img src="cid:qrcodeimg" alt="QR para Mendoza Suena style="width:200px;height:200px;"/>
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

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded) {
      return res.status(400).json({ message: 'Ticket caducado o inactivo' });
    }
    return res.json(1)

  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
}
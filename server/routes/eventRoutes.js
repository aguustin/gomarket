import { Router } from "express";
import { buyEventTicketsController, getInfoQrController, mercadoPagoWebhookController, paymentSuccessController } from "../controllers/eventController.js";

const router = Router()

router.post('/buy', buyEventTicketsController)

router.get('/ticket/validate', getInfoQrController);

router.post('/webhook/mercadopago', mercadoPagoWebhookController);

router.get('/payment-success', paymentSuccessController);

export default router

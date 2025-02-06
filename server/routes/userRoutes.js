import { Router } from "express";
import { loginController, signInController } from "../controllers/userController.js";

const router = Router()

router.post('/signIn', signInController)

router.get('/login', loginController)


export default router
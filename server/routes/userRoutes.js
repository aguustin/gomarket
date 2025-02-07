import { Router } from "express";
import { getUsersController, loginController, signInController } from "../controllers/userController.js";

const router = Router()

router.post('/signIn', signInController)

router.get('/login/:username/:password', loginController)

router.get('/getUsers', getUsersController)

export default router
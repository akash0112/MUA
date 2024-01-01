import { Router } from "express";
import { AuthController } from "../controllers";

const authRouter: Router = Router()

authRouter.post('/', AuthController.login)

export default authRouter
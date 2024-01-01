import { Router } from "express";
import authRouter from "./route.auth";

const indexRouter: Router = Router()

indexRouter.use('/loginUser', authRouter)

export default indexRouter
import { Schema, Model, model } from "mongoose";
import { IAuthLogin } from "../types";



const loginSchema: Schema<IAuthLogin> = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: String,
        required: true,
    }
})

const authModel: Model<IAuthLogin> = model<IAuthLogin>('Login', loginSchema)
export default authModel;
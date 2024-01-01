import { Schema, Model, model } from "mongoose";
import { IAuthSignup } from "../types";
import { UserRole } from "../types/enums";



const signupSchema: Schema<IAuthSignup> = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
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
    },
    confirm_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(UserRole), 
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

const signupModel: Model<IAuthSignup> = model<IAuthSignup>('Signup', signupSchema)
export default signupModel;
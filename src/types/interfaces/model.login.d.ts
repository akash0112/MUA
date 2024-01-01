import { Document } from "mongoose";

export interface IAuthLogin extends Document {
    username: string;
    email: string;
    password: string;
}



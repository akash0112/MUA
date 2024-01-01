import { UserRole } from "../enums/role";
import { IAuthLogin } from "./model.login";


export interface IAuthSignup extends IAuthLogin {
    confirm_password: string;
    first_name: string;
    last_name: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}
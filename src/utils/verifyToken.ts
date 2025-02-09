import { jwtDecode } from "jwt-decode";
import { TUserLoginData } from "../types/user.type";


export const verifytoken = (token: string) => {
    try {
        return jwtDecode<TUserLoginData>(token);
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};

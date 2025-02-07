import { jwtDecode } from "jwt-decode";

export const verifytoken = (token: string) => {
    return jwtDecode(token);
};
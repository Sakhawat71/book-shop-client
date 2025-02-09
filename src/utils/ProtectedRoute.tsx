import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut, useCurrentToken } from "../redux/features/auth/authSlice";
import { verifytoken } from "./verifyToken";
import { TUserLoginData } from "../types/user.type";

type TProtectedRoute = {
    children: ReactNode;
    role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {

    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    let user: TUserLoginData | null = null;

    if (token) {
        user = verifytoken(token);
    }

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Admin can access all routes
    if (user?.role === "admin") {
        return children;
    }

    if (role !== undefined && role !== user?.role) {
        dispatch(logOut());
        return <Navigate to="/login" replace={true} />;
    }

    
    // return children;
    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
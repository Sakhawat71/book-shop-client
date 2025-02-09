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
    let user;

    if (token) {
        user = verifytoken(token);
    }
    // console.log(user?.role);

    const dispatch = useAppDispatch();

    if (role !== undefined && role !== (user as TUserLoginData)?.role) {
        dispatch(logOut());
        return <Navigate to="/login" replace={true} />;
    }

    if (!token) {
        return <Navigate to='/login' replace={true} />
    }
    return children;
};

export default ProtectedRoute;
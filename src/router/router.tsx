import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MainLayout from "../components/layout/MainLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
    },
    {
        path: '/dashboard',
        element: <MainLayout />,
    },
    {
        path: '/products',
        element: <MainLayout />,
    },
    {
        path: '/about',
        element: <MainLayout />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },

]);


export default router;
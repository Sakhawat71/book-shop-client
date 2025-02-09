import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MainLayout from "../components/layout/MainLayout";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
        ]
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
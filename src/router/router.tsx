import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MainLayout from "../components/layout/MainLayout";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ProtectedRoute from "../utils/ProtectedRoute";
import ProductDetails from "../pages/Products/ProductDetails";
import HomePage from "../pages/home/HomePage";
import CheckoutPage from "../pages/Checkout/Checkout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/user/dashboard',
                element: (
                    <ProtectedRoute role="user" >
                        <UserDashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/admin/dashboard',
                element: (
                    <ProtectedRoute role="admin" >
                        <AdminDashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
            },
            {
                path: '/checkout/:id',
                element: (
                    <ProtectedRoute role="user" >
                        <CheckoutPage />
                    </ProtectedRoute>
                ),
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
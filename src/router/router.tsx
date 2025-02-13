import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MainLayout from "../components/layout/MainLayout";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs";
import UserDashboard from "../pages/Dashboard/User/UserDashboard";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ProtectedRoute from "../utils/ProtectedRoute";
import ProductDetails from "../pages/Products/ProductDetails";
import HomePage from "../pages/home/HomePage";
import CheckoutPage from "../pages/Checkout/Checkout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageOrders from "../pages/Dashboard/Admin/ManageOrders";
import AddProducts from "../pages/Dashboard/Admin/AddProducts";
import ManageProducts from "../pages/Dashboard/Admin/ManageProducts";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";


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
                children: [
                    {
                        index : true,
                        element: <div>user</div>
                    },
                    {
                        path: 'my-orders',
                        element: <div>user orders</div>
                    },
                ]
            },
            {
                path: '/admin/dashboard',
                element: (
                    <ProtectedRoute role="admin" >
                        <AdminDashboard />
                    </ProtectedRoute>
                ),
                children : [
                    {
                        index : true ,
                        element: <AdminProfile />
                    },
                    {
                        path : 'manage-users',
                        element: <ManageUsers />
                    },
                    {
                        path : 'manage-orders',
                        element: <ManageOrders />
                    },
                    {
                        path : 'add-product',
                        element: <AddProducts />
                    },
                    {
                        path : 'manage-products',
                        element: <ManageProducts />
                    },
                ]
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
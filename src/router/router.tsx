import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
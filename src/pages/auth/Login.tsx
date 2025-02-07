import { useState } from "react";
import CForm from "../../components/customForm/CForm";
import CInput from "../../components/customForm/CInput";
import { Link } from "react-router";
import { useAppDispatch } from "../../components/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();

    const handleLogin = async (data: any) => {
        setLoading(true);
        console.log("Login data:", data);
        setTimeout(() => setLoading(false), 2000);

        // const user = {
        //     email: "admin@admin.com",
        //     password: "Admin123"
        // }
        const res = await login(data).unwrap()
        console.log(res);

        const userData = verifytoken(res.data.accessToken) as TUser;
        dispatch(setUser({
            user: userData,
            token: res.data.accessToken
        }));


    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900">

            <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/GL413w2/98.jpg')] bg-cover bg-center blur-xs opacity-50"></div>

            {/* Login Form */}
            <div className="relative w-full max-w-md p-8 bg-gray-200 rounded-xl shadow-lg backdrop-blur-md bg-opacity-90">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>

                <CForm onSubmit={handleLogin}>
                    <CInput type="email" name="email" label="Email" placeholder="Enter your email" required />
                    <CInput type="password" name="password" label="Password" placeholder="Enter your password" required />

                    <button
                        type="submit"
                        className="w-full px-4 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </CForm>

                {/* Register Link */}
                <p className="mt-4 text-center text-gray-600">
                    New here?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Click here to register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

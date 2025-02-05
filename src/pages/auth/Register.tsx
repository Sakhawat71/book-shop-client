import { useState } from "react";
import CForm from "../../components/customForm/CForm";
import CInput from "../../components/customForm/CInput";
import { Link } from "react-router";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);

    const handleRegister = async (data: any) => {
        setLoading(true);
        console.log("Register data:", data);
        setTimeout(() => setLoading(false), 2000); // Simulating API request
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/GL413w2/98.jpg')] bg-cover bg-center blur-xs opacity-50"></div>

            {/* Register Form */}
            <div className="relative w-full max-w-md p-8 bg-gray-200 rounded-xl shadow-lg backdrop-blur-md bg-opacity-90">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h2>

                <CForm onSubmit={handleRegister}>
                    <CInput type="text" name="name" label="Name" placeholder="Enter your name" required />
                    <CInput type="email" name="email" label="Email" placeholder="Enter your email" required />
                    <CInput type="password" name="password" label="Password" placeholder="Enter your password" required />

                    <button
                        type="submit"
                        className="w-full px-4 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                </CForm>

                {/* Login Link */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Click here to login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;

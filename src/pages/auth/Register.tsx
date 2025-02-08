import CForm from "../../components/customForm/CForm";
import CInput from "../../components/customForm/CInput";
import { Link } from "react-router";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

const RegisterPage = () => {
    const [register] = useRegisterMutation();

    const handleRegister = async (data: any) => {

        const userInfo = {
            ...data,
            role: "user"
        }
        const toastId = toast.loading("Registering...");
        try {
            const response = await register(userInfo);

            if (response?.data) {
                toast.success(`${response.data.message}` || "Register success", { id: toastId });
                console.log('Register success:', response.data.message);
            }
            if (response?.error) {
                console.log('Register error:', response.error);
                toast.error(response.error.data.error || response.error.data.message, { id: toastId });
            }

        } catch (error) {
            console.error("Register error:", error);
        }

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
                    <CInput
                        type="text"
                        name="name"
                        label="Name"
                        placeholder="Enter your name"
                        required
                    />

                    <CInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        required
                    />

                    <CInput
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full px-4 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                    // disabled={loading}
                    >
                        Register
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

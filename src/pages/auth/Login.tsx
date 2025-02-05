import CForm from "../../components/customForm/CForm";
import CInput from "../../components/customForm/CInput";




const LoginPage = () => {
    
    // const defaultValues = { email: "", password: "" };

    const handleLogin = (data : any) => {
        
        console.log("Login data:", data);
    };



    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f0f2f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <div style={{ width: "100%", maxWidth: "400px" }}>
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "24px",
                        color: "#333",
                        fontSize: "28px",
                    }}
                >
                    Login
                </h2>

                <CForm
                    onSubmit={handleLogin}
                    // defaultValues={defaultValues}
                >
                    <CInput
                        type="email"
                        name="email"
                        label="Email"
                        required
                        placeholder="Enter your email"
                    />
                    <CInput
                        type="password"
                        name="password"
                        label="Password"
                        required
                        placeholder="Enter your password"
                    />
                </CForm>
            </div>
        </div>
    );
};

export default LoginPage;

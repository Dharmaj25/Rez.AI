import { SignUpProvider } from "@/pages/auth/signup/SignUpContext";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <SignUpProvider>
            <Outlet />
        </SignUpProvider>
    )
}

export default AuthLayout;
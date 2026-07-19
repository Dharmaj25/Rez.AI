import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import { initializeAuth, refreshAccessToken } from "@/services/authService";
import useAuthStore from "@/stores/authStore";
import { SignupContext } from "../signup/SignUpContext";

const GithubSuccess = () => {
    const setUser = useAuthStore((state) => state.setUser);
    const setAccessToken = useAuthStore((state) => state.setAccessToken);

    const { setEmail, setStep, nextStepMap } = useContext(SignupContext);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const authenticateUser = async () => {
            try {
                const refreshResponse = await refreshAccessToken();
                setAccessToken(refreshResponse.data.accessToken);

                const meResponse = await initializeAuth();
                setUser(meResponse.data.user);

                navigate("/dashboard", { replace: true });
            } catch (error) {
                const email = searchParams.get("email");

                if (!email) {
                    toast.error("Authentication session expired. Please sign in again.");
                    navigate("/login", { replace: true });
                    return;
                }

                setEmail(email);
                setStep(nextStepMap["PERSONAL_DETAILS"]);

                toast.info("Finish setting up your account", {
                    description:
                        "You're almost there. Complete the remaining steps to unlock all features.",
                });

                navigate("/signup", { replace: true });
            }
        };

        authenticateUser();
    }, []);

    return <>Signing you in...</>;
};

export default GithubSuccess;
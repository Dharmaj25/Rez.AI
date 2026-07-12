import { createContext, useState } from "react";

export const SignupContext = createContext({ email: "", setEmail: () => { }, step: "", setStep: () => { }, nextStepMap: {} });

const NEXT_STEP_MAP = {
    EMAIL: "email",
    OTP_VERIFICATION: "otp",
    PASSWORD_SETUP: "password",
    PERSONAL_DETAILS: "details",
};

export const SignUpProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState("email");

    return (
        <SignupContext.Provider value={{ email, setEmail, step, setStep, nextStepMap: NEXT_STEP_MAP }}>
            {children}
        </SignupContext.Provider>
    );
};

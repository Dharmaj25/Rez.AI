import { useContext, useEffect } from "react"
import { SignupContext } from "./SignUpContext";
import EmailStep from "./EmailStep";
import OtpStep from "./OtpStep";
import PasswordStep from "./PasswordStep";
import OnboardingFlow from "./DetailsStep";

const SignUpFlow = () => {
    const { step } = useContext(SignupContext);
    return (
        <>
            {step === "email" && <EmailStep />}
            {step === "otp" && <OtpStep />}
            {step === "password" && <PasswordStep />}
            {step === "details" && <OnboardingFlow />}
        </>
    )
}

export default SignUpFlow;
import { useEffect, useState } from "react";
import { FileUser, ArrowLeft, Info } from "lucide-react";
import OTPInput from "react-otp-input";
import { resendOtp, verifyOtp } from "@/services/authService";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const OtpStep = ({ setStep = () => { }, email, nextStepMap }) => {
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(0);
    const [isResendingOtp, setIsResendingOtp] = useState(false);
    const [verifyingEmail, setVerifyingEmail] = useState(false);
    const [validation, setValidation] = useState({
        isValid: true,
        error: ""
    });

    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timer]);
    
    const handleOtpChange = (value) => {
        setOtp(value);
        if (!validation.isValid) {
            setValidation({ isValid: true, error: "" });
        }
    };

    const getOtp = async () => {
        try {
            setIsResendingOtp(true);
            await resendOtp(email);
            setTimer(30);
            setValidation({ isValid: true, error: "" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to resend OTP");
        } finally {
            setIsResendingOtp(false);
        }
    };

    const verifyEmail = async () => {
        const cleanOtp = otp.toString().trim();

        if (!cleanOtp) {
            setValidation({
                isValid: false,
                error: "Please enter the verification code."
            });
            return;
        }

        if (cleanOtp.length < 6) {
            setValidation({
                isValid: false,
                error: "The code must be exactly 6 digits."
            });
            return;
        }

        try {
            setVerifyingEmail(true);
            const response = await verifyOtp(email, cleanOtp);
            const nextStep = response?.data?.user?.accountSetupStep || "OTP";
            setStep(nextStepMap[nextStep]);
        }
        catch (err) {
            const errorMessage = err?.response?.data?.message || "Some error occurred, please try again";
            toast.error("Verification Failed", {
                description: errorMessage
            });
        }
        finally {
            setVerifyingEmail(false);
        }
    };

    return (
        <>
            <div className="w-full max-w-md">
                {/* card */}
                <div className="bg-white animate-drop-custom">
                    {/* header */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
                            <FileUser className="text-white w-5 h-5" />
                        </div>

                        <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                            Verify your email
                        </h1>

                        <p className="mt-1 text-gray-500 text-sm leading-relaxed max-w-[320px]">
                            Enter the 6-digit verification code sent to your email.
                        </p>
                    </div>

                    {/* OTP input container */}
                    <div className="mt-7">
                        <OTPInput
                            value={otp}
                            onChange={handleOtpChange}
                            numInputs={6}
                            shouldAutoFocus
                            containerStyle="flex justify-center gap-2"
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className={`!w-10 !h-10 sm:!w-11 sm:!h-11 flex-none text-center text-sm border rounded-lg outline-none transition ${!validation.isValid
                                            ? "border-red-500 ring-1 ring-red-500"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        }`}
                                />
                            )}
                        />

                        {/* Validation Error Message */}
                        {!validation.isValid && validation.error && (
                            <div className="flex items-center justify-center mt-3">
                                <Info className="w-3. h-3 me-1 text-red-500 flex-none" />
                                <p className="text-xs text-red-500">
                                    {validation.error}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* helper */}
                    <p className="text-center text-xs text-gray-400 mt-4">
                        Didn’t receive the code?
                    </p>

                    {/* resend */}
                    <div className="text-center mt-1">
                        <button
                            disabled={timer > 0 || isResendingOtp}
                            onClick={getOtp}
                            className="text-xs font-medium text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                            {timer > 0
                                ? `Resend in ${timer}s`
                                : isResendingOtp
                                    ? "Sending..."
                                    : "Resend code"}
                        </button>
                    </div>

                    {/* verify */}
                    <button
                        onClick={verifyEmail}
                        disabled={verifyingEmail}
                        className={`w-full mt-6 h-9 text-white text-sm font-medium rounded-lg flex justify-center items-center transition ${verifyingEmail ?
                                "bg-blue-400 hover:bg-blue-400" :
                                "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {verifyingEmail ? <Spinner /> : "Verify & Continue"}
                    </button>

                    {/* back */}
                    <button
                        onClick={() => setStep(nextStepMap["EMAIL"])}
                        className="w-full mt-4 text-xs text-blue-600 hover:underline flex items-center justify-center gap-1"
                    >
                        <ArrowLeft size={14} /> Update email address
                    </button>

                </div>
            </div>
        </>
    );
};

export default OtpStep;
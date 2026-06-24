import { useState } from "react";
import { FileUser, ArrowLeft } from "lucide-react";
import OTPInput from "react-otp-input";

const OtpStep = ({ setStep }) => {
    const [otp, setOtp] = useState("");

    return (
        <>
            <div className="w-full max-w-md ">
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

                    {/* OTP input */}
                    <div className="mt-7">
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            shouldAutoFocus
                            containerStyle="flex justify-center gap-2"
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className="!w-10 !h-10 sm:!w-11 sm:!h-11 flex-none text-center text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                                />
                            )}
                        />
                    </div>

                    {/* helper */}
                    <p className="text-center text-xs text-gray-400 mt-4">
                        Didn’t receive the code?
                    </p>

                    {/* resend */}
                    <div className="text-center mt-1">
                        <button className="text-xs font-medium text-blue-600 hover:underline">
                            Resend code
                        </button>
                    </div>

                    {/* verify */}
                    <button
                        onClick={() => setStep("details")}
                        className="w-full mt-6 h-9 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                        Verify & Continue
                    </button>

                    {/* back */}
                    <button
                        onClick={() => setStep("email")}
                        className="w-full mt-4 text-xs text-blue-600 hover:underline"
                    >
                        <ArrowLeft className="inline align-top mr-1" size={14} />Change email address
                    </button>

                </div>
            </div>
        </>
    );
};

export default OtpStep;
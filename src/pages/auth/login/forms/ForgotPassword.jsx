import { ArrowLeft, FileUser, Info } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { sendPasswordResetLink } from "@/services/authService";
import { useState } from "react";
import { toast } from "sonner";

const ForgotPassword = ({ setCurrentScreen = () => { } }) => {
    const [email, setEmail] = useState({
        value: "",
        isValid: true,
        errorMessage: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [linkSent, setLinkSent] = useState(false);

    const handleChange = (value) => {
        setEmail(() => ({
            value,
            errorMessage: "",
            isValid: true
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email.value === "") {
            setEmail((prev) => ({
                ...prev,
                errorMessage: "Email is required to send password a reset link",
                isValid: false,
            }));
            return;
        }

        try {
            setIsSubmitting(true);
            const response = await sendPasswordResetLink(email.value);
            if (response?.status === 200) setLinkSent(true);
        }
        catch (error) {
            const errorMessage = error?.response?.data?.message || "Some error occured. Please try again"
            toast.error("Reset link not sent", {
                description: errorMessage
            });
        }
        finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="w-full max-w-md">
            <div className="bg-white animate-drop-custom">
                {!linkSent ? (<>

                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
                            <FileUser className="text-white w-5 h-5" />
                        </div>

                        <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                            Forgot your Password?
                        </h1>

                        <p className="mt-1 text-gray-400 text-sm leading-relaxed max-w-[320px]">
                            Enter your email so that we can send you password reset link
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(event) => handleSubmit(event)}>
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-xs font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                value={email.value}
                                onChange={(event) => handleChange(event.target.value)}
                                placeholder="Enter your email address"
                                className={`w-full h-9 px-3 text-sm rounded-lg outline-none transition border 
                                ${email.isValid ? "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" : "border-red-500 ring-1 ring-red-500"}
                                `}
                            />
                        </div>

                        {!email.isValid && (
                            <div className="flex items-center justify-start gap-1.5" style={{marginTop: "10px"}}>
                                <Info className="w-4 h-4 text-red-500 flex-none" />
                                <span className="text-xs text-red-500 font-medium">
                                    {email.errorMessage}
                                </span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full h-9 text-white text-sm font-medium flex justify-center items-center rounded-lg transition mt-6 ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {isSubmitting ? <Spinner /> : "Send Email"}
                        </button>
                    </form>

                </>) : (<>
                    <h1>Link Sent Successfully</h1>
                </>)}

                <button
                    type="button"
                    onClick={() => setCurrentScreen("Login")}
                    className="w-full mt-4 text-sm text-blue-600 hover:underline flex items-center justify-center gap-1.5"
                >
                    <ArrowLeft size={14} /> Back to Login
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;
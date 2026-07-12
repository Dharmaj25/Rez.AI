import { ArrowLeft, FileUser, Info, CheckCircle2, Mail } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { sendPasswordResetLink } from "@/services/authService";
import { useState } from "react";
import { toast } from "sonner";

const ForgotPassword = ({ setCurrentScreen = () => { } }) => {
    const [email, setEmail] = useState({ value: "", isValid: true, errorMessage: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [linkSent, setLinkSent] = useState(false);

    const handleChange = (value) => { setEmail({ value, errorMessage: "", isValid: true }) };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email.value === "") {
            setEmail((prev) => ({
                ...prev,
                errorMessage: "Email is required to send a password reset link.",
                isValid: false,
            }));
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await sendPasswordResetLink(email.value);

            if (response?.status === 200) {
                setLinkSent(true);
            }
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message ||
                "Some error occurred. Please try again.";

            toast.error("Reset link not sent", {
                description: errorMessage,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="bg-white animate-drop-custom">
                {!linkSent ? (
                    <>
                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
                                <FileUser className="text-white w-5 h-5" />
                            </div>

                            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                                Forgot your Password?
                            </h1>

                            <p className="mt-1 text-gray-400 text-sm leading-relaxed max-w-[320px]">
                                Enter your email address and we'll send you a secure link to
                                reset your password.
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="email"
                                    className="text-xs font-medium text-gray-700"
                                >
                                    Email
                                </label>

                                <input
                                    value={email.value}
                                    onChange={(event) => handleChange(event.target.value)}
                                    placeholder="Enter your email address"
                                    className={`w-full h-9 px-3 text-sm rounded-lg outline-none transition border
                  ${email.isValid
                                            ? "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            : "border-red-500 ring-1 ring-red-500"
                                        }`}
                                />
                            </div>

                            {!email.isValid && (
                                <div
                                    className="flex items-center gap-1.5"
                                    style={{ marginTop: "10px" }}
                                >
                                    <Info className="w-4 h-4 text-red-500 flex-none" />

                                    <span className="text-xs text-red-500 font-medium">
                                        {email.errorMessage}
                                    </span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full h-9 text-white text-sm font-medium flex justify-center items-center rounded-lg transition mt-6 ${isSubmitting
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {isSubmitting ? <Spinner /> : "Send Reset Link"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center text-center pt-4 animate-fade-in">
                        {/* Icon */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-2xl opacity-20"></div>

                            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-300/60">
                                <Mail className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Check your inbox
                        </h2>

                        <p className="mt-3 text-sm text-gray-500 leading-6 max-w-xs">
                            We've sent a secure password reset link to
                        </p>

                        {/* Email */}
                        <div className="mt-5 w-full rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                            <p className="text-sm font-semibold text-blue-700 break-all">
                                {email.value}
                            </p>
                        </div>

                        {/* Instructions */}
                        <div className="mt-7 rounded-2xl bg-gray-50 border border-gray-100 p-5 text-left w-full">
                            <p className="text-sm font-semibold text-gray-900 mb-3">
                                Next steps
                            </p>

                            <div className="space-y-3 text-sm text-gray-500">
                                <div className="flex gap-3">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                                    <p>Open the email we just sent.</p>
                                </div>

                                <div className="flex gap-3">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                                    <p>Click the password reset button.</p>
                                </div>

                                <div className="flex gap-3">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                                    <p>Create a new password and sign back in.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setLinkSent(false)}
                            className="mt-5 text-sm text-blue-500 hover:text-blue-600 hover:underline hover:cursor-pointer transition"
                        >
                            Didn't receive it? Use a different email address
                        </button>
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => setCurrentScreen("Login")}
                    className="w-full mt-2 text-sm text-blue-600 hover:underline flex items-center justify-center gap-1.5"
                >
                    <ArrowLeft size={14} />
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;
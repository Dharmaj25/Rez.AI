import { ArrowLeft, FileUser, Info, Lock } from "lucide-react";
import { useState } from "react";
import { setPassword } from "@/services/authService";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const PasswordStep = ({ setStep = () => { }, nextStepMap = {}, email }) => {
    const INITIAL_VALIDATION = {
        isValid: true,
        message: ""
    };

    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [validation, setValidation] = useState(INITIAL_VALIDATION);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (!validation.isValid) {
            setValidation(INITIAL_VALIDATION);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { password, confirmPassword } = formData;

        if (!password.trim() || !confirmPassword.trim()) {
            setValidation({
                isValid: false,
                message: "Both password and confirm password are required"
            });
            return;
        }

        if (password.length < 8) {
            setValidation({
                isValid: false,
                message: "Password must be at least 8 characters long"
            });
            return;
        }

        if (password !== confirmPassword) {
            setValidation({
                isValid: false,
                message: "Passwords do not match"
            });
            return;
        }

        try {
            setIsSubmitting(true);
            const response = await setPassword(email, password, confirmPassword);
            const nextStep = response?.data?.user?.accountSetupStep || "PASSWORD_SETUP";

            setStep(nextStepMap[nextStep] || nextStepMap["PASSWORD_SETUP"]);
        }
        catch (error) {
            const errorMessage = error?.response?.data?.message || "Some error occurred, please try again";
            toast.error("Password Setup Failed", {
                description: errorMessage
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="bg-white animate-drop-custom">

                <div className="flex flex-col items-center text-center mb-6">
                    <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
                        <FileUser className="text-white w-5 h-5" />
                    </div>

                    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                        Set your password
                    </h1>

                    <p className="mt-1 text-gray-500 text-sm leading-relaxed max-w-[320px]">
                        Choose a secure password to keep your account safe and protected.
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-1.5">
                        <label htmlFor="password" className="text-xs font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Min. 8 characters"
                            className={`w-full h-9 px-3 text-sm border rounded-lg outline-none transition ${!validation.isValid
                                ? "border-red-500 ring-1 ring-red-500"
                                : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="confirmPassword" className="text-xs font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Re-enter password"
                            className={`w-full h-9 px-3 text-sm border rounded-lg outline-none transition ${!validation.isValid
                                ? "border-red-500 ring-1 ring-red-500"
                                : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}
                        />
                    </div>

                    {!validation.isValid && (
                        <div className="flex items-center justify-start gap-1.5 mt-2">
                            <Info className="w-4 h-4 text-red-500 flex-none" />
                            <span className="text-xs text-red-500 font-medium">
                                {validation.message}
                            </span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full h-9 text-white text-sm font-medium flex justify-center items-center rounded-lg transition mt-6 ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {isSubmitting ? <Spinner /> : "Set Up Password"}
                    </button>
                </form>

                <button
                    type="button"
                    onClick={() => setStep(nextStepMap["EMAIL"])}
                    className="w-full mt-4 text-xs text-blue-600 hover:underline flex items-center justify-center gap-1.5"
                >
                    <ArrowLeft size={14} /> Update email address
                </button>
            </div>
        </div>
    );
};

export default PasswordStep;
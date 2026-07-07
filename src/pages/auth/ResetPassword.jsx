import { LockKeyhole, Eye, EyeOff } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { checkResetToken, resetPassword } from "@/services/authService";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const ResetPassword = () => {
    const [values, setValues] = useState({ password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [token, setToken] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(true);
    const [fetchingTokenStatus, setFetchingTokenStatus] = useState(true);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateErrors = () => {
        const validationErrors = {};

        if (!values.password) {
            validationErrors.password = "Password is required";
        }

        if (!values.confirmPassword) {
            validationErrors.confirmPassword =
                "Password confirmation is required";
        }

        if (
            values.password &&
            values.confirmPassword &&
            values.password !== values.confirmPassword
        ) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateErrors()) return;

        try {
            setIsSubmitting(true);
            await resetPassword(token, values.password, values.confirmPassword);
            navigate("/login?reset=true");
        }
        catch (error) {
            const errorMessage = error?.response?.data?.message || "Some error occured. Please try again";
            toast.error("Password reset failed", {
                description: errorMessage
            })
        }
        finally {
            setIsSubmitting(false);
        }
    };


    const fetchTokenStatus = async () => {
        try {
            const token = searchParams.get("token") || null;
            await checkResetToken(token);
            setToken(token);
        }
        catch (error) {
            console.log("Some error occured: ", error?.response?.data?.message);
            setIsTokenValid(false);
        }
        finally {
            setFetchingTokenStatus(false);
        }
    };

    useEffect(() => {
        fetchTokenStatus();
    }, []);

    return (
        fetchingTokenStatus ? <Spinner /> : (
            !isTokenValid ? <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
                <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">

                    <div className="flex flex-col items-center text-center">

                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                            <LockKeyhole className="h-8 w-8 text-red-600" />
                        </div>

                        <h1 className="text-2xl font-bold text-slate-900">
                            Reset Link Expired
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                            This password reset link is invalid or has expired.
                            For your security, reset links can only be used once and are
                            available for a limited time.
                        </p>

                        <button
                            onClick={() => navigate("/login")}
                            className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                        >
                            Back to Login
                        </button>

                        <p className="mt-4 text-xs text-slate-400">
                            Need a new password reset link? Log in and choose{" "}
                            <span className="font-medium text-slate-600">
                                "Forgot Password"
                            </span>
                        </p>
                    </div>
                </div>
            </div>
                : <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
                    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">

                        {/* Header */}
                        <div className="mb-8 flex flex-col items-center text-center">

                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-300/50">
                                <LockKeyhole className="h-8 w-8 text-white" />
                            </div>

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                                Create New Password
                            </h1>

                            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
                                Your new password must be different from your previous password.
                                Choose something secure that you'll remember.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                            noValidate
                        >
                            {/* Password */}

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    New Password
                                </label>

                                <div className="relative">

                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={values.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your new password"
                                        className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm outline-none transition
                ${errors.password
                                                ? "border-red-500 ring-2 ring-red-100"
                                                : "border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                            }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>

                                </div>

                                {errors.password && (
                                    <p className="mt-1.5 text-xs text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password */}

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={values.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Re-enter your password"
                                        className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm outline-none transition
                ${errors.confirmPassword
                                                ? "border-red-500 ring-2 ring-red-100"
                                                : "border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                            }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword((prev) => !prev)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>

                                </div>

                                {errors.confirmPassword && (
                                    <p className="mt-1.5 text-xs text-red-500">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold text-white transition-all
              ${isSubmitting
                                        ? "cursor-not-allowed bg-blue-400"
                                        : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
                                    }`}
                            >
                                {isSubmitting ? <Spinner /> : "Reset Password"}
                            </button>

                        </form>

                    </div>
                </div>
        )
    );
};

export default ResetPassword;
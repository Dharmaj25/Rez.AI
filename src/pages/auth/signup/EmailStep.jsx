import { FileUser, InfoIcon } from "lucide-react";
import GoogleLogo from "../../../assets/brands/google-logo.png";
import GithubLogo from "../../../assets/brands/github-logo.png";
import LinkedinLogo from "../../../assets/brands/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { getOtp } from "@/services/authService";

const socialButtons = [
  { image: GoogleLogo, title: "Google" },
  { image: GithubLogo, title: "Github" },
  { image: LinkedinLogo, title: "LinkedIn" },
];

const INITIAL_VALIDATION = {
  touched: false,
  error: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => {
  if (!email.trim()) {
    return "Email address is required";
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return "Email address is not valid";
  }

  return "";
};

const EmailStep = ({ setStep = () => { }, nextStepMap = {}, updateEmail = () => { } }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(INITIAL_VALIDATION);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const error = validateEmail(trimmedEmail);

    if (error) {
      setValidation({ touched: true, error });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await getOtp(trimmedEmail);

      const nextStep = response?.data?.user?.accountSetupStep || "EMAIL";

      if (nextStep === "COMPLETED") {
        toast.info("Onboarding completed", {
        description: "Your onboarding is complete, please login to access your account",
        });

        navigate("/login");
        return;
      }

      const step = nextStepMap[nextStep];

      if (step !== undefined) {
        updateEmail(email);
        setStep(step);
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md animate-drop-custom">
      <div className="bg-white">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
            <FileUser className="w-5 h-5 text-white" />
          </div>

          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            REZ.AI: Your AI workspace
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Sign up with your email
          </p>
        </div>

        {/* Social Divider */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-3 text-[12px] text-gray-400 tracking-wider">
            Sign up with
          </span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {socialButtons.map(({ image, title }) => (
            <button
              key={title}
              type="button"
              className="flex flex-col items-center gap-1 py-3 border border-gray-200 rounded-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <img
                src={image}
                alt={title}
                className="w-5 h-5"
              />
              <span className="text-[11px] text-gray-600">
                {title}
              </span>
            </button>
          ))}
        </div>

        {/* Email Divider */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-3 text-[12px] text-gray-400 tracking-wider">
            or continue with
          </span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setValidation(INITIAL_VALIDATION)}
              placeholder="Enter your email address"
              className={`w-full h-9 px-3 text-sm rounded-lg outline-none transition border ${validation.touched && validation.error
                ? "border-red-600"
                : "border-gray-300"
                } focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />

            {validation.touched && validation.error && (
              <div className="flex items-center">
                <InfoIcon className="w-3 h-3 me-1 text-red-500" />
                <p className="text-xs text-red-500">
                  {validation.error}
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-9 rounded-lg text-sm font-medium text-white transition flex justify-center items-center ${isSubmitting
              ? "bg-blue-400 hover:bg-blue-400"
              : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isSubmitting ? <Spinner /> : "Continue"}
          </button>

          <p className="text-[12px] text-gray-500 text-center leading-relaxed pt-2">
            By continuing, you agree to our{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </form>
      </div>

      <p className="text-sm text-gray-600 text-center mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default EmailStep;
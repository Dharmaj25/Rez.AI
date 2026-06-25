import { FileUser, InfoIcon } from "lucide-react";
import GoogleLogo from "../../../assets/brands/google-logo.png";
import GithubLogo from "../../../assets/brands/github-logo.png";
import LinkedinLogo from "../../../assets/brands/linkedin-logo.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";


const socialButtons = [
  { image: GoogleLogo, title: "Google" },
  { image: GithubLogo, title: "Github" },
  { image: LinkedinLogo, title: "LinkedIn" },
];

const EmailStep = ({ setStep = () => { } }) => {
  const defaultEmailValidation = {
    touched: false,
    isValid: false,
    message: ""
  }

  const [emailValidation, setEmailValidation] = useState(defaultEmailValidation);
  const [submittingEmail, setsubmittingEmail] = useState(false);

  const emailRef = useRef(null);


  const submitEmail = async (event) => {

    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = emailRef.current.value.trim();

    if (email.length == 0) {
      setEmailValidation(() => {
        return {
          touched: true,
          isValid: false,
          message: "Email address is required"
        }
      })

      return;
    }

    if (!emailRegex.test(email)) {
      setEmailValidation(() => {
        return {
          touched: true,
          isValid: false,
          message: "Email address is not valid"
        }
      });

      return;
    }
    setsubmittingEmail(true)
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/auth/send-otp`, { email });
      setStep("otp");
    } catch (error) {
      toast.warning("OTP Already Sent", {
        description: "Check your inbox or continue verification.",
        action: {
          label: "Enter OTP",
          onClick: () => setStep("otp"),
        },
      });
    }
    setsubmittingEmail(false)
  }


  return (
    <div className="w-full max-w-md animate-drop-custom ">
      <div className="bg-white ">
        {/* header */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
            <FileUser className="text-white w-5 h-5" />
          </div>

          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            REZ.AI: Your AI workspace
          </h1>

          <p className="mt-1 text-gray-400 text-sm">
            Sign up with your email
          </p>
        </div>

        {/* divider */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-3 text-[12px] text-gray-400 tracking-wider">
            Sign up with
          </span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* social login */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {socialButtons.map(({ image, title }) => (
            <button
              key={title}
              className="flex flex-col items-center gap-1 py-3 border border-gray-200 rounded-md 
              hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-md 
              transition-all duration-200"
            >
              <img src={image} className="w-5 h-5" />
              <span className="text-[11px] text-gray-600">
                {title}
              </span>
            </button>
          ))}
        </div>

        {/* divider */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-3 text-[12px] text-gray-400 tracking-wider">
            or continue with
          </span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* form */}
        <form
          className="space-y-4"
          onSubmit={submitEmail}
        >
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              ref={emailRef}
              placeholder="Enter your email address"
              className={`w-full h-9 px-3 text-sm border ${emailValidation.touched && !emailValidation.isValid ? "border-red-600" : "border-gray-300"} rounded-lg 
              focus:border-blue-500 focus:ring-1 focus:ring-blue-500 border-1
              outline-none transition`}
              onFocus={() => setEmailValidation(defaultEmailValidation)}
            />

            {(emailValidation.touched && !emailValidation.isValid) && (
              <div className="flex items-center">
                <InfoIcon className="w-3 h-3 me-1 font-bold text-red-500" />
                <p className="text-xs text-red-500">{emailValidation.message}</p>
              </div>
            )}

          </div>

          <button className={`w-full h-9 ${submittingEmail ? "bg-blue-400" : "bg-blue-600"} text-white text-sm font-medium rounded-lg ${submittingEmail ? "hover:bg-blue-400" : "hover:bg-blue-700"} transition flex justify-center items-center`} disabled={submittingEmail}>
            {submittingEmail ? <Spinner /> : "Continue"}
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

      {/* login link */}
      <p className="text-sm text-gray-600 text-center mt-6">
        Already have an account?{" "}
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
          <Link to={"/login"}>Sign in</Link>
        </span>
      </p>

    </div>
  );
};

export default EmailStep;
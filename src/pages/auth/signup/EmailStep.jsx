import { FileUser } from "lucide-react";
import GoogleLogo from "../../../assets/brands/google-logo.png";
import GithubLogo from "../../../assets/brands/github-logo.png";
import LinkedinLogo from "../../../assets/brands/linkedin-logo.png";
import { Link } from "react-router-dom";

const socialButtons = [
  { image: GoogleLogo, title: "Google" },
  { image: GithubLogo, title: "Github" },
  { image: LinkedinLogo, title: "LinkedIn" },
];

const EmailStep = ({ setStep = () => {} }) => {
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
          onSubmit={(e) => {
            e.preventDefault();
            setStep("otp");
          }}
        >
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full h-9 px-3 text-sm border border-gray-300 rounded-lg 
              focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
              outline-none transition"
            />
          </div>

          <button className="w-full h-9 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
            Continue
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
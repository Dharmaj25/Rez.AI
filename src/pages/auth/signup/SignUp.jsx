import { useState } from "react";
import EmailStep from "./EmailStep";
import OtpStep from "./OtpStep";
import DetailsStep from "./DetailsStep";
import { Rocket, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import PasswordStep from "./PasswordStep";

const SignUp = () => {
  const [step, setStep] = useState("email");
  const nextStepMap = {
    "EMAIL": "email",
    "OTP_VERIFICATION": "otp",
    "PASSWORD_SETUP": "password",
    "PERSONAL_DETAILS": "details"
  }


  return (
    <div className="min-h-screen flex">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden
bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-500">

        {/* soft glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between h-full px-16 py-14 text-white ">

          <div className="text-lg font-semibold tracking-wide">
            <Link to="/" className="cursor-pointer">REZ.AI</Link>
          </div>

          <div className="max-w-2xl">

            <h1 className="text-5xl font-bold leading-tight">
              Create your AI-powered resume <Rocket className="inline" size={45} />
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              Build professional resumes tailored to your role and optimized
              for modern applicant tracking systems.
            </p>

            {/* timeline */}
            <div className="mt-12 relative animate-slide-r-to-l">

              {/* continuous vertical line */}
              <div className="absolute left-[7px] top-3 h-[calc(100%-3.5rem)] w-px bg-white/30" />
              <div className="space-y-10">


                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-white mt-1" />
                  </div>
                  <div className="animate-slide-r-to-l-2">
                    <p className="font-semibold text-white">
                      Create your account
                    </p>
                    <p className="text-blue-200 text-sm mt-1">
                      Sign up with your email in seconds
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5 ">
                  <div className="relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-white mt-1" />
                  </div>
                  <div className="animate-slide-r-to-l-3">
                    <p className="font-semibold text-white">
                      Add your experience
                    </p>
                    <p className="text-blue-200 text-sm mt-1">
                      Enter your professional details
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-white mt-1" />
                  </div>
                  <div className="animate-slide-r-to-l-4">
                    <p className="font-semibold text-white">
                      Generate your resume
                    </p>
                    <p className="text-blue-200 text-sm mt-1">
                      Download and apply instantly
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="text-sm text-blue-200">
            <HandHeart className="inline align-bottom mr-1" size={22} /> Takes less than 2 minutes to get started
          </div>

        </div>
      </div>
      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center bg-white px-4 sm:px-6">
        {step === "email" && <EmailStep setStep={setStep} nextStepMap={nextStepMap} />}
        {step === "otp" && <OtpStep setStep={setStep} nextStepMap={nextStepMap} />}
        {step === "password" && <PasswordStep setStep={setTimeout} nextStepMap={nextStepMap} />}
        {step === "details" && <DetailsStep setStep={setStep} nextStepMap={nextStepMap} />}
      </div>
    </div>
  );
};

export default SignUp;
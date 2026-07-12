import { MessageSquareHeart, VenetianMask } from "lucide-react";
import { Link } from "react-router-dom";
import BasicLogin from "./forms/BasicLogin";
import { useState } from "react";
import ForgotPassword from "./forms/ForgotPassword";

const Login = () => {
  const [curentScreen, setCurrentScreen] = useState("Login");
  const ScreenMap = {
    "Login": <BasicLogin setCurrentScreen={setCurrentScreen} />,
    "ForgotPassword": <ForgotPassword setCurrentScreen={setCurrentScreen} />,
  }


  return (
    <div className="min-h-screen flex">

      <div className="hidden lg:flex w-1/2 relative overflow-hidden 
bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-600">

        {/* diagonal lines pattern */}
        <div className="absolute inset-0 opacity-[0.08]
    [background-image:linear-gradient(135deg,white_1px,transparent_1px)]
    [background-size:28px_28px]" />

        {/* glowing light blobs */}
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-300/20 rounded-full blur-3xl animate-float" />


        {/* content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-14 py-14 text-white">

          {/* logo */}
          <div className="text-lg font-semibold tracking-wide">
            <Link className="cursor-pointer" to="/">REZ.AI</Link>
          </div>

          {/* main content */}
          <div className="max-w-lg">

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Build. Improve. Get hired <MessageSquareHeart className="inline" size={50} />
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed">
              Continue crafting your professional resume with AI-powered
              suggestions and recruiter-friendly formatting.
            </p>

            {/* divider */}
            <div className="mt-8 w-20 h-px bg-white/40" />

            {/* enterprise bullet list */}
            <div className="mt-8 space-y-4 text-blue-100 text-sm">

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2" />
                <p className="text-[17px] animate-slide-r-to-l-1 ">AI-enhanced resume bullet points</p>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2" />
                <p className="text-[17px] animate-slide-r-to-l-2">ATS-compliant professional templates</p>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2" />
                <p className="text-[17px] animate-slide-r-to-l-3">Instant export in PDF format</p>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2" />
                <p className="text-[17px] animate-slide-r-to-l-4">Role-specific content optimization</p>
              </div>

            </div>

          </div>

          {/* footer */}
          <div className="text-sm text-blue-200">
            <VenetianMask className="inline mr-1 align-middle" size={22} /> Designed for modern job seekers
          </div>

        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white px-4 sm:px-6 animate-drop-custom" >
        {ScreenMap[curentScreen]}
      </div>

    </div>
  );
};

export default Login;
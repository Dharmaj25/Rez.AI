import { FileUser, MessageSquareHeart, VenetianMask } from "lucide-react";
import GoogleLogo from "../../assets/brands/google-logo.png";
import GithubLogo from "../../assets/brands/github-logo.png";
import LinkedinLogo from "../../assets/brands/linkedin-logo.png";
import { Link } from "react-router-dom";

const socialButtons = [
  { image: GoogleLogo, title: "Google" },
  { image: GithubLogo, title: "Github" },
  { image: LinkedinLogo, title: "LinkedIn" },
];

const Login = () => {
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
      {/* content column */}
      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center bg-white px-4 sm:px-6 animate-drop-custom">
        <div className="w-full max-w-md animate-drop-custom">

          {/* card container */}
          <div className="bg-white">

            {/* header */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
                <FileUser className="text-white w-5 h-5" />
              </div>

              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                Welcome back to REZ.AI
              </h1>

              <p className="mt-1 text-gray-400 text-md max-w-xs">
                Log in to your account
              </p>
            </div>

            {/* divider */}
            <div className="my-5 flex items-center">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="px-3 text-[12px] text-gray-400 tracking-wider">
                Continue with
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
                or continue with email
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
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-9 px-3 text-sm border border-gray-300 rounded-lg 
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            outline-none transition"
                />
              </div>

              <button className="w-full h-9 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                Log In
              </button>
            </form>

          </div>

          {/* signup link */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Don't have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              <Link to={"/signup"}>Create account</Link>
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
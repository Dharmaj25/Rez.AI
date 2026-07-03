import { ArrowRight, FileUser, Info, MessageSquareHeart, VenetianMask } from "lucide-react";
import GoogleLogo from "../../assets/brands/google-logo.png";
import GithubLogo from "../../assets/brands/github-logo.png";
import LinkedinLogo from "../../assets/brands/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { login } from "@/services/authService";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import { toast } from "sonner";

const socialButtons = [
  { image: GoogleLogo, title: "Google" },
  { image: GithubLogo, title: "Github" },
  { image: LinkedinLogo, title: "LinkedIn" },
];

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};
    if (!values.email) validationErrors.email = "Email is reuquired";
    if (!values.password) validationErrors.password = "Password is required";

    const hasErrors = Object.keys(validationErrors).length != 0;
    if (hasErrors) {
      setErrors(validationErrors);
      return false;
    }
    return true;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) return;

    try {
      setIsSubmitting(true);
      const response = await login(values.email, values.password);
      const userData = response?.data?.user || null;
      setUser(userData);
      navigate("/dashboard");
    }
    catch (error) {
      const errorMessage = error?.response?.data?.message || "Some error occured. Please try again";
      toast.error("Login Failed", {
        description: errorMessage
      })
    }
    finally {
      setIsSubmitting(false);
    }
  }


  const getInputClass = (fieldName) => {
    const baseClass = "w-full h-8 px-3 text-sm border rounded-md outline-none transition";
    return errors[fieldName]
      ? `${baseClass} border-red-500 ring-1 ring-red-500`
      : `${baseClass} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`;
  };


  const errorMessageClass = "text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1"

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
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">Email</label>
                <input
                  type="text"
                  value={values.email}
                  name="email"
                  onChange={(event) => handleInputChange(event)}
                  placeholder="Enter your email address"
                  className={getInputClass("email")}
                />
                {errors.email && (
                  <p className={errorMessageClass}>
                    <Info size={12} /> {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={values.password}
                  name="password"
                  onChange={(event) => handleInputChange(event)}
                  placeholder="Enter your password"
                  className={getInputClass("password")}
                />
                {errors.password && (
                  <p className={errorMessageClass}>
                    <Info size={12} /> {errors.password}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`group w-full h-9 cursor-pointer text-white text-sm font-medium rounded-lg transition flex items-center justify-center gap-1
                    ${isSubmitting ? "bg-blue-400 hover:bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
                    `}
              >
                {isSubmitting ? <Spinner /> :
                  <>
                    Log In
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </>
                }
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
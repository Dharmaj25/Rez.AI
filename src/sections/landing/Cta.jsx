import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Cta = () => {
  return (
    <section className="mt-24 w-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white py-24 shadow-xl ">
      <div className=" mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Build Your Resume and Portfolio with{" "}
          <span className="text-blue-100">AI Power</span>
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Rez.AI helps developers showcase their skills with stunning portfolios
          and tailored resumes — designed to impress top recruiters.
        </p>

        {/* Email Input Section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto bg-white/10 backdrop-blur-xl p-2 rounded-full border border-white/20">
          <div className="flex items-center gap-2 w-full">
            <Mail size={22} className="text-blue-100 ml-3" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-blue-100/60 text-lg w-full shadow-none"
            />
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-100 rounded-full px-6 py-5 font-semibold transition-all duration-300">
            Notify Me
          </Button>
        </div>

        <p className="text-blue-100/80 mt-5 text-sm">
          No spam. Only updates and exclusive offers from Rez.AI 🚀
        </p>
      </div>
    </section>
  );
};

export default Cta;

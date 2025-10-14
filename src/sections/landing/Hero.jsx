import { Button } from "@/components/ui/button";
import {ArrowRight,Brain,Check,ClipboardCheck,Code,FileUser,Rocket,Sparkles,Users,Zap} from "lucide-react";

export default function Hero() {
    return (
        <div className="relative text-center my-16 sm:my-24 px-4 sm:px-8 overflow-hidden animate-drop-custom">
            {/* Floating Icons */}
            <div className="hidden lg:block bg-yellow-100 w-fit p-3 rounded-full rotate-15 absolute animate-float" style={{ left: "8%", top: "30%" }}>
                <Zap size={30} className="text-yellow-300" />
            </div>

            <div className="hidden lg:block bg-blue-100/60 w-fit p-3 rounded-full absolute animate-float" style={{ right: "6%", top: "18%" }}>
                <Code size={34} className="text-blue-400" />
            </div>

            <div className="hidden lg:block bg-purple-100/60 w-fit p-3 rounded-full absolute animate-float" style={{ left: "10%", bottom: "12%" }}>
                <FileUser size={32} className="text-purple-400" />
            </div>

            <div className="hidden lg:block bg-pink-100/60 w-fit p-3 rounded-full absolute animate-float-slow" style={{ right: "18%", bottom: "20%" }}>
                <Sparkles size={32} className="text-pink-400" />
            </div>

            {/* Badge */}
            <div className="inline-block bg-blue-100/30 border-2 border-blue-400 rounded-full px-4 py-2 sm:px-6 mb-10 sm:mb-16 shadow-lg">
                <div className="flex items-center gap-2 justify-center">
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span className="uppercase text-blue-500 font-bold text-xs sm:text-sm tracking-wide">
                        AI-Powered Resume Builder
                    </span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
            </div>

            {/* Headings */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-2 sm:mb-4">
                Transform Any
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-blue-500 font-extrabold mb-2 sm:mb-4">
                Profile Into A
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold inline-flex items-start gap-2 justify-center">
                Perfect Resume
                <span className="bg-blue-500 p-2 lg:p-3 rounded-full hidden md:block">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-white font-extrabold" />
                </span>

            </h1>

            {/* Description */}
            <p className="my-8 sm:my-12 text-gray-700/80 text-lg sm:text-xl md:text-2xl font-semibold mx-auto leading-relaxed">
                Upload your existing CV, paste your LinkedIn profile, or connect any professional platform. <br />
                <span className="text-blue-500 font-bold">
                    Our AI crafts beautiful, ATS-friendly resumes in seconds.
                </span>
            </p>

            {/* CTA Button */}
            <Button className="bg-blue-500 text-white font-extrabold border-2 border-blue-500 py-4 sm:py-6 mb-10 text-sm sm:text-md rounded-lg px-6 sm:px-12 hover:bg-blue-600 shadow-xl flex items-center gap-2 mx-auto">
                <Rocket size={20} className="sm:w-6 sm:h-6" />
                Create My Resume
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 mt-10 sm:mt-16">
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 rounded-xl p-3 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-md">
                        <Users className="text-green-500 w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold mt-3">14K+</p>
                    <p className="uppercase text-gray-400 text-xs sm:text-sm font-semibold tracking-wide">
                        Resumes Created
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-amber-100 rounded-xl p-3 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-md">
                        <ClipboardCheck className="text-amber-500 w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold mt-3">250+</p>
                    <p className="uppercase text-gray-400 text-xs sm:text-sm font-semibold tracking-wide">
                        Templates Ready
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-sky-100 rounded-xl p-3 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-md">
                        <Rocket className="text-sky-500 w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold mt-3">98%</p>
                    <p className="uppercase text-gray-400 text-xs sm:text-sm font-semibold tracking-wide">
                        ATS Success Rate
                    </p>
                </div>
            </div>
        </div>
    );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Check, ClipboardCheck, Rocket, Users } from "lucide-react";

export default function Hero() {
    return (
        <div className="text-center animate-drop-custom my-24">
            {/* Badge */}
            <div className="inline-block bg-blue-100/30 border-2 border-blue-400 rounded-full px-6 py-2 mb-16 shadow-lg">
                <div className="flex items-center gap-2 justify-center">
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span className="uppercase text-blue-500 font-bold text-sm tracking-wide">
                        AI-Powered Resume Builder
                    </span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
            </div>

            {/* Headings */}
            <p className="text-8xl font-extrabold mb-4">Transform Any</p>
            <p className="text-8xl text-blue-500 font-extrabold mb-4">Profile Into A</p>
            <p className="text-8xl font-extrabold  inline-flex items-start gap-2">
                Perfect Resume
                <span className="bg-blue-500 p-2 rounded-full">
                    <Check className="w-7 h-7 text-white font-bold " />
                </span>
            </p>

            {/* Description */}
            <p className="my-16 text-gray-700/80 text-2xl font-bold max-w-l mx-auto leading-relaxed">
                Upload your existing CV, paste your LinkedIn profile, or connect any professional platform. <br />
                <span className="text-blue-500ss font-bold">
                    Our AI crafts beautiful, ATS-friendly resumes in seconds.
                </span>
            </p>

            <Button className="bg-blue-500 text-white font-extrabold border-2 border-blue-500 py-6 mb-10 text-md rounded-lg px-12  hover:bg-blue-600 hover:text-white shadow-xl [&_svg]:w-6 [&_svg]:h-6">
                <Rocket size={58} />
                Create My Resume<ArrowRight className="w-8 h-8" /> </Button>

            <div className="flex justify-center gap-20 mt-16">
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 rounded-xl p-3 w-14 h-14 flex items-center justify-center shadow-md">
                        <Users className="text-green-500 w-7 h-7" />
                    </div>
                    <p className="text-3xl font-bold mt-3">14K+</p>
                    <p className="uppercase text-gray-400 text-sm  font-semibold tracking-wide">
                        Resumes Created
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-amber-100 rounded-xl p-3 w-14 h-14 flex items-center justify-center shadow-md">
                        <ClipboardCheck className="text-amber-500 w-7 h-7" />
                    </div>
                    <p className="text-3xl font-bold mt-3">250+</p>
                    <p className="uppercase text-gray-400 font-semibold text-sm tracking-wide">
                        Templates Ready
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-sky-100 rounded-xl p-3 w-14 h-14 flex items-center justify-center shadow-md">
                        <Rocket className="text-sky-500 w-7 h-7" />
                    </div>
                    <p className="text-3xl font-bold mt-3">98%</p>
                    <p className="uppercase text-gray-400 font-semibold text-sm tracking-wide">
                        ATS Success Rate
                    </p>
                </div>
            </div>

        </div>

    );
}

import { Rocket, ArrowLeft } from "lucide-react";
const CareerSummary = ({ setStep = () => { } }) => {
    return (
        <form className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg mb-4">
                <p className="text-[11px] text-blue-700 leading-tight">
                    <strong>Pro-Tip:</strong> Mention your biggest achievement!
                    Our AI uses this to write your resume summary instantly.
                </p>
            </div>

            {/* Target Role */}
            <div className="space-y-1 mb-4">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Target Role
                </label>
                <input
                    type="text"
                    placeholder="e.g. Senior Frontend Engineer"
                    className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                />
            </div>

            {/* The Pitch */}
            <div className="space-y-1 mb-5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Professional Pitch
                </label>
                <textarea
                    rows={4}
                    placeholder="Describe your career goals and top skills in 1-2 sentences..."
                    className="w-full p-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
                />
            </div>

            <button
                type="button"
                onClick={() => console.log("Final Submit - Trigger PATCH API")}
                className="group w-full h-10 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
                Launch My Dashboard
                <Rocket size={16} />
            </button>

            <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full mt-3 text-[13px] text-blue-500 hover:text-blue-700 font-medium transition hover:underline cursor-pointer"
            >
                <ArrowLeft size={12} className="text-blue-500 inline mr-1" />
                Go Back to Experience
            </button>
        </form>
    );
}

export default CareerSummary;
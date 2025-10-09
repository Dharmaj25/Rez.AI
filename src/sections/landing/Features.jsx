import {Brain,Sparkles,Zap,Palette,BarChart3,ShieldCheck,FileDown} from "lucide-react";

const Features = () => {
    
    //Array to hold Features List
    const features = [
        {
            icon: <Brain size={35} className="text-blue-500" />,
            bg: "bg-blue-100",
            title: "Smart AI Analysis",
            hoverColor : "oklch(80.9% 0.105 251.813)",
            desc: "Get intelligent insights that highlight your strengths and optimize your resume for maximum impact.",
        },
        {
            icon: <Zap size={35} className="text-yellow-400" />,
            bg: "bg-yellow-100",
            title: "ATS Optimization",
            hoverColor : "oklch(87.9% 0.169 91.605)",
            desc: "Ensure your resume passes Applicant Tracking Systems and reaches recruiters without being filtered out.",
        },
        {
            icon: <Palette size={35} className="text-pink-500" />,
            bg: "bg-pink-100",
            title: "Modern Templates",
            hoverColor : "oklch(82.3% 0.12 346.018)",
            desc: "Choose from a variety of sleek, professional, and recruiter-approved templates designed to stand out.",
        },
        {
            icon: <BarChart3 size={35} className="text-green-500" />,
            bg: "bg-green-100",
            title: "Real-Time Feedback",
            hoverColor : "oklch(87.1% 0.15 154.449)",
            desc: "Receive instant tips on improving grammar, formatting, and structure while editing your resume.",
        },
        {
            icon: <ShieldCheck size={35} className="text-purple-500" />,
            bg: "bg-purple-100",
            title: "Data Privacy",
            hoverColor : "oklch(82.7% 0.119 306.383)",
            desc: "Your personal details are fully encrypted, ensuring your data remains safe and secure at all times.",
        },
        {
            icon: <FileDown size={35} className="text-red-500" />,
            bg: "bg-red-100",
            title: "One-Click Download",
            hoverColor : "oklch(80.8% 0.114 19.571)",
            desc: "Export your resume in PDF or Word format instantly — ready to share with recruiters worldwide.",
        },
    ];

    return (
        <div className="text-center my-20 bg-stone-100/70 py-14">
            {/* Headings */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-700 mb-2">
                Why Top Talent
            </h1>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-500 mb-4 flex items-center justify-center gap-3">
                Chooses Rez.AI
                <Sparkles
                    strokeWidth={2.5}
                    className="w-11 mx-1 h-11 text-blue-500 font-extrabold"
                />
            </h1>
            {/* Descriptions */}
            <p className="text-gray-500 text-xl mx-auto font-semibold">
                Built with advanced AI, Rez.AI transforms your experience into powerful
                resumes that get noticed.
            </p>
            <p className="text-blue-500 text-xl mx-auto font-semibold">
                Modern templates, smart suggestions, and recruiter-friendly designs —
                all in one place.
            </p>

            {/* Feature Cards */}
            <div className="mt-16 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative shadow-xl rounded-2xl p-6 flex flex-col items-center text-center bg-white 
                   transition duration-300 transform hover:-translate-y-3 h-[320px]" 
                            style={{
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)", 
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 25px ${feature.hoverColor || "red"}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                            }}
                        >
                            <div className={`${feature.bg} p-4 rounded-full mb-4`}>
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;

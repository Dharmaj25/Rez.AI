import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, RefreshCw, Sparkles, Wand2, Briefcase, TrendingUp, Target } from "lucide-react";
import { useContext } from "react";
import { IntroContext } from "./IntroContext";

const Welcome = () => {
    const { stage, setStage } = useContext(IntroContext);

    const guide = [
        { icon: Clock, text: "Takes less than 2 minutes" },
        { icon: Wand2, text: "Some answers are already filled" },
        { icon: RefreshCw, text: "Everything can be changed later" },
    ];

    const previewCards = [
        { icon: Briefcase, label: "Industry", value: "Software & Technology", delay: 0.3 },
        { icon: TrendingUp, label: "Experience", value: "3–6 years", delay: 0.45 },
        { icon: Target, label: "Target role", value: "Senior Frontend Engineer", delay: 0.6 },
    ];

    return (
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 bg-white">
            {/* Left: copy + CTA */}
            <div className="flex items-center justify-center px-8 py-16 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-md"
                >
                    <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                        <Sparkles size={22} className="text-white" />
                    </div>

                    <h1 className="mb-3 text-[30px] font-semibold leading-tight tracking-tight text-slate-900">
                        Let's build your resume.
                    </h1>

                    <p className="mb-10 text-[14.5px] leading-relaxed text-slate-500">
                        We'll personalize your resume-building experience so you only see
                        templates, sections and suggestions relevant to your career.
                    </p>

                    <div className="mb-10 space-y-3.5">
                        {guide.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3">
                                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                    <Icon size={15} className="text-blue-600" />
                                </div>
                                <span className="text-[13.5px] text-slate-600">{text}</span>
                            </div>
                        ))}
                    </div>

                    <Button
                        onClick={() => setStage("questions")}
                        className="h-12 w-full rounded-xl bg-blue-600 text-[14.5px] font-medium hover:bg-blue-700"
                    >
                        Let's Get Started
                    </Button>
                </motion.div>
            </div>

            {/* Right: visual panel */}
            <div className="relative hidden items-center justify-center overflow-hidden bg-slate-50 lg:flex">
                <div
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                    }}
                />

                <div className="relative w-full max-w-sm px-10">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mb-5 text-[11px] font-medium uppercase tracking-wider text-slate-400"
                    >
                        Personalized for you
                    </motion.p>

                    <div className="space-y-3">
                        {previewCards.map(({ icon: Icon, label, value, delay }) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay, ease: "easeOut" }}
                                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50"
                            >
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                    <Icon size={16} className="text-blue-600" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11.5px] text-slate-400">{label}</p>
                                    <p className="truncate text-[13.5px] font-medium text-slate-800">{value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.8, ease: "easeOut" }}
                        className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 p-4"
                    >
                        <Sparkles size={15} className="shrink-0 text-blue-100" />
                        <p className="text-[12.5px] leading-snug text-blue-50">
                            Answers like these shape which templates and sections we
                            recommend next.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
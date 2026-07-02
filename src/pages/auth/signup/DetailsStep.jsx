import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileUser, Check } from "lucide-react";

//Form Imports
import Identity from "./forms/Identity";
import Experience from "./forms/Experience";
import CareerSummary from "./forms/CareerSummary";


const StepCircle = ({ stepNum, currentStep, label }) => {
    const isActive = currentStep >= stepNum;
    const isCompleted = currentStep > stepNum;

    return (
        <div className="flex flex-col items-center relative z-10 w-20">
            <motion.div
                initial={false}
                animate={{
                    backgroundColor: isActive ? "#2563eb" : "#ffffff",
                    borderColor: isActive ? "#2563eb" : "#d1d5db",
                    color: isActive ? "#ffffff" : "#9ca3af",
                }}
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold shadow-sm"
            >
                {isCompleted ? <Check size={18} strokeWidth={3} /> : stepNum}
            </motion.div>
            <span className={`text-[11px] mt-2 font-semibold text-center tracking-wide uppercase ${isActive ? "text-blue-600" : "text-gray-400"
                }`}>
                {label}
            </span>
        </div>
    );
};

const OnboardingFlow = ({ setFormStep = () => { } , email}) => {
    const [step, setStep] = useState(1);
    const progressWidth = `${((step - 1) / 2) * 100}%`;

    return (
        <div className="w-full max-w-lg mx-auto bg-white">

            {/* 1. Header */}
            <div className="flex flex-col items-center text-center mb-4">
                {/* Icon Container */}
                <div className="bg-blue-600 p-2.5 rounded-xl mb-4 shadow-lg shadow-blue-200">
                    <FileUser className="text-white w-5 h-5" />
                </div>

                {/* Dynamic Heading based on Step */}
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Complete your profile
                </h1>

                {/* Description */}
                <p className="mt-1 text-gray-500 text-sm leading-relaxed max-w-[340px]">
                    Add your professional details to generate your first
                    <span className="text-blue-600 font-medium"> AI-powered resume</span>.
                </p>
            </div>

            <div className="relative mb-5">
                {/* Background Gray Line (Centered perfectly) */}
                <div className="absolute top-[18px] left-14 right-14 h-[2px] bg-gray-100 z-0" />

                {/* Animated Blue Line (Stops exactly at circles) */}
                <div className="absolute top-[18px] left-14 right-14 h-[2px] z-0">
                    <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: "0%" }}
                        animate={{ width: progressWidth }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>

                <div className="flex justify-between w-full relative z-10">
                    <StepCircle stepNum={1} currentStep={step} label="Personal Details" />
                    <StepCircle stepNum={2} currentStep={step} label="Professional Details" />
                    <StepCircle stepNum={3} currentStep={step} label="Career Summary" />
                </div>
            </div>

            {/* 3. FORM STEPS */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -15, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {step === 1 && <Identity setStep={setStep} setFormStep={setFormStep} email={email} />}
                    {step === 2 && <Experience setStep={setStep} />}
                    {step === 3 && <CareerSummary setStep={setStep} />}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default OnboardingFlow;
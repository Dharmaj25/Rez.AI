import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Plus,
    Trash2,
    GripVertical,
    SquarePen,
    Check,
    Briefcase,
    GraduationCap,
    Sparkles,
    Award,
} from "lucide-react";
import { motion } from "framer-motion";

const tabs = ["Fill the Form", "Design", "Export"];

const steps = [
    { num: 1, label: "Personal", icon: User },
    { num: 2, label: "Experience", icon: Briefcase },
    { num: 3, label: "Education", icon: GraduationCap },
    { num: 4, label: "Skills", icon: Sparkles },
    { num: 5, label: "Certificates", icon: Award },
];

const StepCircle = ({ step, currentStep, onClick }) => {
    const isCompleted = currentStep > step.num;
    const isActive = currentStep === step.num;
    const Icon = step.icon;

    return (
        <button
            onClick={onClick}
            className="group flex flex-col items-center gap-2 relative z-10"
        >
            <motion.div
                animate={{
                    backgroundColor: isCompleted ? "#2563eb" : isActive ? "#ffffff" : "#ffffff",
                    borderColor: isCompleted || isActive ? "#2563eb" : "#e2e8f0",
                }}
                className={`flex size-9 items-center justify-center rounded-full border-2 shadow-sm transition-shadow ${
                    isActive ? "ring-4 ring-blue-100" : ""
                } group-hover:border-blue-400`}
            >
                {isCompleted ? (
                    <Check size={16} strokeWidth={3} className="text-white" />
                ) : (
                    <Icon
                        size={15}
                        strokeWidth={2.25}
                        className={isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"}
                    />
                )}
            </motion.div>

            <span
                className={`text-[11px] font-medium tracking-wide transition-colors ${
                    isActive ? "text-blue-600" : isCompleted ? "text-slate-600" : "text-slate-400 group-hover:text-slate-600"
                }`}
            >
                {step.label}
            </span>
        </button>
    );
};

const CreateResume = () => {
    const [activeTab, setActiveTab] = useState("Fill the Form");
    const [step, setStep] = useState(1);
    const progressWidth = `${((step - 1) / (steps.length - 1)) * 100}%`;

    return (
        <div className="grid h-full grid-cols-2 overflow-hidden">
            {/* Left: form panel */}
            <div className="flex h-full flex-col overflow-hidden border-r border-slate-200">
                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-t border-l border-slate-200 bg-white px-6">
                    <div className="flex items-center gap-1">
                        <h4 className="text-[15px] font-semibold text-slate-900">My Resume</h4>
                        <SquarePen className="cursor-pointer text-slate-400 hover:text-slate-600" size={15} />
                    </div>

                    <div className="flex gap-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative py-4 text-[13.5px] font-medium transition-colors ${
                                    activeTab === tab ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
                                }`}
                            >
                                {tab}
                                <span
                                    className={`absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-blue-600 transition-opacity ${
                                        activeTab === tab ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stepper — pinned, not part of scroll area */}
                <div className="shrink-0 border-l border-b border-slate-200 bg-white px-8 pt-6 pb-5">
                    <div className="relative">
                        <div className="absolute top-[18px] left-[18px] right-[18px] h-[2px] bg-slate-100 z-0" />
                        <div className="absolute top-[18px] left-[18px] right-[18px] h-[2px] z-0 overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-600"
                                initial={{ width: "0%" }}
                                animate={{ width: progressWidth }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="flex justify-between relative z-10">
                            {steps.map((s) => (
                                <StepCircle key={s.num} step={s} currentStep={step} onClick={() => setStep(s.num)} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scrollable form content */}
                <div className="flex-1 overflow-y-auto border-l border-slate-200 px-6 py-6">
                    <div className="mx-auto max-w-xl space-y-8">
                        {step === 1 && (
                            <section>
                                <h5 className="mb-1 text-[13.5px] font-semibold text-slate-900">Personal Details</h5>
                                <p className="mb-4 text-[12.5px] text-slate-500">
                                    This shows up at the top of your resume.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 space-y-1.5">
                                        <Label className="text-[12.5px] text-slate-600">Full name</Label>
                                        <div className="relative">
                                            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <Input placeholder="Dharmaj Paniya" className="h-9 rounded-lg pl-9 text-[13px] focus-visible:ring-blue-500/30" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-[12.5px] text-slate-600">Email</Label>
                                        <div className="relative">
                                            <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <Input placeholder="you@email.com" className="h-9 rounded-lg pl-9 text-[13px] focus-visible:ring-blue-500/30" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-[12.5px] text-slate-600">Phone</Label>
                                        <div className="relative">
                                            <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <Input placeholder="+91 00000 00000" className="h-9 rounded-lg pl-9 text-[13px] focus-visible:ring-blue-500/30" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-[12.5px] text-slate-600">Location</Label>
                                        <div className="relative">
                                            <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <Input placeholder="City, Country" className="h-9 rounded-lg pl-9 text-[13px] focus-visible:ring-blue-500/30" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-[12.5px] text-slate-600">LinkedIn</Label>
                                        <div className="relative">
                                            <Linkedin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <Input placeholder="linkedin.com/in/..." className="h-9 rounded-lg pl-9 text-[13px] focus-visible:ring-blue-500/30" />
                                        </div>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100 my-8" />

                                <h5 className="mb-1 text-[13.5px] font-semibold text-slate-900">Professional Summary</h5>
                                <p className="mb-4 text-[12.5px] text-slate-500">
                                    2–3 sentences on who you are and what you do best.
                                </p>
                                <Textarea
                                    placeholder="Frontend engineer with 4 years of experience building..."
                                    className="min-h-24 resize-none rounded-lg text-[13px] focus-visible:ring-blue-500/30"
                                />
                            </section>
                        )}

                        {step === 2 && (
                            <section>
                                <div className="mb-4">
                                    <h5 className="text-[13.5px] font-semibold text-slate-900">Work Experience</h5>
                                    <p className="text-[12.5px] text-slate-500">Add roles in reverse chronological order.</p>
                                </div>

                                <div className="mb-3 rounded-xl border border-slate-200 p-4">
                                    <div className="mb-3 flex items-start justify-between">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <GripVertical size={15} />
                                            <span className="text-[12px] font-medium uppercase tracking-wide">Entry 1</span>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500">
                                            <Trash2 size={15} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Input placeholder="Job title" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                                        <Input placeholder="Company" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                                    </div>
                                </div>

                                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 py-2.5 text-[12.5px] font-medium text-slate-500 transition-colors hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600">
                                    <Plus size={14} />
                                    Add experience
                                </button>
                            </section>
                        )}

                        {step === 3 && (
                            <section>
                                <div className="mb-4">
                                    <h5 className="text-[13.5px] font-semibold text-slate-900">Education</h5>
                                    <p className="text-[12.5px] text-slate-500">Add your degrees, most recent first.</p>
                                </div>

                                <div className="mb-3 rounded-xl border border-slate-200 p-4">
                                    <div className="mb-3 flex items-start justify-between">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <GripVertical size={15} />
                                            <span className="text-[12px] font-medium uppercase tracking-wide">Entry 1</span>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500">
                                            <Trash2 size={15} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Input placeholder="Degree" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                                        <Input placeholder="Institution" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                                    </div>
                                </div>

                                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 py-2.5 text-[12.5px] font-medium text-slate-500 transition-colors hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600">
                                    <Plus size={14} />
                                    Add education
                                </button>
                            </section>
                        )}

                        {step === 4 && (
                            <section>
                                <div className="mb-4">
                                    <h5 className="text-[13.5px] font-semibold text-slate-900">Skills</h5>
                                    <p className="text-[12.5px] text-slate-500">Add skills relevant to your target role.</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {["React", "Node.js", "MongoDB"].map((skill) => (
                                        <span
                                            key={skill}
                                            className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[12.5px] font-medium text-blue-700"
                                        >
                                            {skill}
                                            <Trash2 size={12} className="cursor-pointer text-blue-400 hover:text-red-500" />
                                        </span>
                                    ))}
                                </div>

                                <Input placeholder="Type a skill and press Enter" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                            </section>
                        )}

                        {step === 5 && (
                            <section>
                                <div className="mb-4">
                                    <h5 className="text-[13.5px] font-semibold text-slate-900">Certificates</h5>
                                    <p className="text-[12.5px] text-slate-500">Optional — add anything that strengthens your profile.</p>
                                </div>

                                <div className="mb-3 rounded-xl border border-slate-200 p-4">
                                    <div className="mb-3 flex items-start justify-between">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <GripVertical size={15} />
                                            <span className="text-[12px] font-medium uppercase tracking-wide">Entry 1</span>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500">
                                            <Trash2 size={15} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Input placeholder="Certificate name" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                                        <Input placeholder="Issuing organization" className="h-9 rounded-lg text-[13px] focus-visible:ring-blue-500/30" />
                                    </div>
                                </div>

                                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 py-2.5 text-[12.5px] font-medium text-slate-500 transition-colors hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600">
                                    <Plus size={14} />
                                    Add certificate
                                </button>
                            </section>
                        )}
                    </div>
                </div>

                {/* Sticky footer navigation */}
                <div className="flex shrink-0 items-center justify-between border-t border-b border-l border-slate-200 bg-white px-6 py-3">
                    <Button
                        variant="outline"
                        disabled={step === 1}
                        onClick={() => setStep((s) => Math.max(1, s - 1))}
                        className="h-9 rounded-lg px-4 text-[13px]"
                    >
                        Back
                    </Button>

                    {step < steps.length ? (
                        <Button
                            onClick={() => setStep((s) => Math.min(steps.length, s + 1))}
                            className="h-9 rounded-lg bg-blue-600 px-5 text-[13px] hover:bg-blue-700"
                        >
                            Save &amp; Continue
                        </Button>
                    ) : (
                        <Button className="h-9 rounded-lg bg-blue-600 px-5 text-[13px] hover:bg-blue-700">
                            Finish &amp; Preview
                        </Button>
                    )}
                </div>
            </div>

            {/* Right: preview */}
            <div className="flex h-full items-center justify-center overflow-y-auto bg-slate-50 p-8 border-b border-r border-t border-slate-200">
                <div className="aspect-[8.5/11] w-full max-w-md rounded-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)]" />
            </div>
        </div>
    );
};

export default CreateResume;
import { Rocket } from "lucide-react";
import ResumeIllustration from "../../assets/illustrations/resume.png";
import AiIllustration from "../../assets/illustrations/ai.png";
import StyleIllustration from "../../assets/illustrations/style.png";
import ShineIllustration from "../../assets/illustrations/shine2.png";



const Process = () => {
    const steps = [
        {
            id: 1,
            title: (
                <>
                    Upload <span className="text-blue-500">Your Resume</span>
                </>
            ),
            description: (
                <>
                    Drag & drop or import in seconds — our{" "}
                    <span className="text-blue-500">AI engine</span> takes it from there.
                </>
            ),
            illustration: ResumeIllustration,
        },
        {
            id: 2,
            title: (
                <>
                    Smart <span className="text-blue-500">AI Enhancements</span>
                </>
            ),
            description: (
                <>
                    Instantly uncover strengths, fix weak points, and get{" "}
                    <span className="text-blue-500">job-winning insights</span>.
                </>
            ),
            illustration: AiIllustration,
        },
        {
            id: 3,
            title: (
                <>
                    Choose <span className="text-blue-500">Your Style</span>
                </>
            ),
            description: (
                <>
                    Pick from sleek, <span className="text-blue-500">ATS-optimized</span>{" "}
                    templates tailored for modern recruiters.
                </>
            ),
            illustration: StyleIllustration,
        },
        {
            id: 4,
            title: (
                <>
                    Download & <span className="text-blue-500">Shine</span>
                </>
            ),
            description: (
                <>
                    Export with one click — ready to{" "}
                    <span className="text-blue-500">share, apply, and impress</span>{" "}
                    anywhere.
                </>
            ),
            illustration: ShineIllustration,
        },
    ];

    return (
        <div
            className="text-center my-20 py-14 px-8"
            id="features"
        >
            {/* ======= Heading Section ======= */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-2">
                    Simple Steps to Land Your
                </h1>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-500 mb-4 flex items-center justify-center gap-3">
                    Dream Job
                    <Rocket
                        strokeWidth={2.5}
                        className="w-12 mx-1 h-12 text-blue-500 font-extrabold"
                    />
                </h1>

                {/* Description */}
                <div className="mb-20 mx-auto px-3">
                    <p className="text-lg text-gray-500 sm:text-xl font-semibold">
                        Building a job-winning resume is simple with{" "}
                        <span className="text-blue-500">Rez.AI</span> — a guided process
                        from upload to final draft.
                    </p>
                    <p className="text-lg  text-blue-500 font-semibold sm:text-xl">
                        Just four steps: upload, enhance, style, and shine.
                    </p>
                </div>
            </div>

            {/* ======= Desktop Version ======= */}
            <div className="hidden lg:flex justify-center">
                <div className="relative flex flex-col items-center">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-start">
                            {/* Left Content */}
                            <div className="w-80 md:block">
                                <div>
                                    {index % 2 === 0 ? (
                                        <div>
                                            <h3 className="font-bold text-2xl mb-2 text-left">
                                                {step.title}
                                            </h3>
                                            <p className="text-md text-muted-foreground font-semibold text-left">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <img
                                            src={step.illustration}
                                            alt="Illustration"
                                            height={800}
                                            width={800}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Circle + Line */}
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center font-semibold text-blue-500 bg-white shadow">
                                    {step.id}
                                </div>
                                {/* Vertical line */}
                                {index !== steps.length - 1 && (
                                    <div
                                        className="w-px bg-blue-500"
                                        style={{ height: "330px" }}
                                    ></div>
                                )}
                            </div>

                            {/* Right Content */}
                            <div className="w-80 pl-6 hidden md:block">
                                {index % 2 !== 0 ? (
                                    <div>
                                        <h3
                                            className="font-bold text-2xl mb-2"
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className="text-md text-muted-foreground font-semibold">
                                            {step.description}
                                        </p>
                                    </div>
                                ) : (
                                    <img
                                        src={step.illustration}
                                        className="ml-10"
                                        alt="Illustration"
                                        height={600}
                                        width={600}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ======= Mobile Version ======= */}
            <div className="lg:hidden flex flex-col items-center gap-10 px-6">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-xl text-center flex flex-col items-center w-full max-w-md"
                    >
                        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold mb-4">
                            {step.id}
                        </div>
                        <img
                            src={step.illustration}
                            alt={step.title}
                            className="w-48 h-48 object-contain mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;

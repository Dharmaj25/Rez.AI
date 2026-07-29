import { useContext, useState } from "react";
import { questions, getOnboardingValue } from "./questions";
import QuestionProgress from "./QuestionProgress";
import QuestionCard from "./QuestionCard";
import QuestionNavigation from "./QuestionNavigation";
import Welcome from "./Welcome";
import { IntroContext } from "./IntroContext";

const useCurrentUser = () => ({
    professionalDetails: { career_level: "employed", industry: "Software & Technology" },
    careerTarget: {},
});

const ResumeIntro = () => {
    const { stage, setStage } = useContext(IntroContext);
    const user = useCurrentUser();
    const [currentIndex, setCurrentIndex] = useState(0);

    const [answers, setAnswers] = useState(() => {
        const initial = {};
        questions.forEach((q) => {
            const prefilled = getOnboardingValue(user, q.onboardingField);
            if (prefilled) initial[q.id] = prefilled;
        });
        return initial;
    });

    const currentQuestion = questions[currentIndex];
    const currentValue = answers[currentQuestion?.id];

    const canContinue = currentQuestion?.validation?.required ? Boolean(currentValue) : true;

    const handleAnswerChange = (questionId, value) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    const handleContinue = () => {
        if (currentIndex === questions.length - 1) {
            //Change the FlowProvider.jsx stage to make it render ResumeTemplate component, when done with all the questions.
            return;
        }
        setCurrentIndex((i) => i + 1);
    };

    const handleBack = () => setCurrentIndex((i) => i - 1);

    if (stage === "welcome") {
        return <Welcome />
    }

    if (stage === "questions") {
        return <div className="flex h-full items-center justify-center bg-white px-6">
            <div className="w-full max-w-lg">
                <QuestionProgress current={currentIndex + 1} total={questions.length} />

                <QuestionCard
                    question={currentQuestion}
                    value={currentValue}
                    onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                />

                <QuestionNavigation
                    onBack={handleBack}
                    onContinue={handleContinue}
                    canContinue={canContinue}
                    isFirst={currentIndex === 0}
                    isLast={currentIndex === questions.length - 1}
                />
            </div>
        </div>
    }

};

export default ResumeIntro;
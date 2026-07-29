import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const QuestionNavigation = ({ onBack, onContinue, canContinue, isFirst, isLast }) => (
    <div className="mt-10 flex items-center justify-between">
        <button
            onClick={onBack}
            disabled={isFirst}
            className="flex items-center gap-1.5 text-[13.5px] font-medium text-slate-400 transition-colors hover:text-slate-700 disabled:opacity-0"
        >
            <ArrowLeft size={15} />
            Back
        </button>

        <Button
            onClick={onContinue}
            disabled={!canContinue}
            className="h-11 gap-2 rounded-xl bg-blue-600 px-6 text-[13.5px] font-medium hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400"
        >
            {isLast ? "Finish" : "Continue"}
            <ArrowRight size={15} />
        </Button>
    </div>
);

export default QuestionNavigation;
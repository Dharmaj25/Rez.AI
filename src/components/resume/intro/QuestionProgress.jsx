import { motion } from "framer-motion";

const QuestionProgress = ({ current, total }) => {
    const percent = (current / total) * 100;

    return (
        <div className="mb-10">
            <p className="mb-3 text-[12.5px] font-medium tracking-wide text-slate-400">
                Question {current} of {total}
            </p>

            <div className="h-1 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                    className="h-full rounded-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default QuestionProgress;
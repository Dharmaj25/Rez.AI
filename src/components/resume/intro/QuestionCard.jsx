import { motion, AnimatePresence } from "framer-motion";
import QuestionRenderer from "./QuestionRenderer";

const QuestionCard = ({ question, value, onChange }) => (
    <AnimatePresence mode="wait">
        <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            <h2 className="mb-2 text-[26px] font-semibold leading-snug tracking-tight text-slate-900">
                {question.title}
            </h2>

            {question.description && (
                <p className="mb-8 text-[14.5px] leading-relaxed text-slate-500">
                    {question.description}
                </p>
            )}

            {!question.description && <div className="mb-8" />}

            <QuestionRenderer question={question} value={value} onChange={onChange} />
        </motion.div>
    </AnimatePresence>
);

export default QuestionCard;
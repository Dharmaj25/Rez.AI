import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import Face1 from "../../assets/avatars/face9.jpg";
import Face2 from "../../assets/avatars/face19.jpg";
import Face3 from "../../assets/avatars/face23.jpg";
import { MessageCircleHeart } from "lucide-react";

const avatars = [Face1, Face2, Face3];

const Faqs = () => {
    const faqList = [
        {
            question: "How does Rez.AI build my resume?",
            answer:
                "Rez.AI uses advanced AI models trained on thousands of successful tech resumes to generate a professionally formatted and optimized version of your resume. It personalizes your content to highlight your strongest skills and achievements.",
        },
        {
            question: "Can I customize my portfolio design?",
            answer:
                "Absolutely. Rez.AI gives you multiple modern templates and design options. You can adjust colors, sections, and layout styles — all in a few clicks.",
        },
        {
            question: "Is my data safe with Rez.AI?",
            answer:
                "100%. We take data security seriously. All user data is encrypted and never shared with third parties. You control what information stays private or public on your portfolio.",
        },
        {
            question: "Do I need design or coding experience?",
            answer:
                "Not at all. Rez.AI handles everything for you — from layout to styling. You just input your details, choose a theme, and the AI does the rest.",
        },
        {
            question: "Can I download my resume as a PDF?",
            answer:
                "Yes! You can instantly export your AI-generated resume as a professional, print-ready PDF. Rez.AI ensures your resume formatting stays perfect across all devices and platforms.",
        },
        {
            question: "Does Rez.AI offer free and premium plans?",
            answer:
                "Yes. Rez.AI provides a free plan for basic resume creation and portfolio setup, while premium plans unlock advanced templates, analytics, and personalized AI insights.",
        },
    ];

    return (
        <section className="my-24 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                Frequently Asked
                <span className="text-blue-500"> Questions </span>
            </h2>

            <p className="text-gray-500 text-base sm:text-xl mx-auto font-semibold">
                Everything you need to know about creating your AI-powered resume and portfolio with Rez.AI.
            </p>

            <p className="text-blue-500 text-base sm:text-xl font-semibold">
                Simple answers. Clear guidance.
            </p>

            <div className="mt-12 max-w-6xl mx-auto text-left">
                <Accordion type="single" collapsible className="w-full border rounded-2xl">
                    {faqList.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`} // 👈 each one has a unique value
                            className="py-2 px-8 border-b last:border-b-0 hover:bg-blue-50/30"
                        >
                            <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors hover:no-underline focus:no-underline" >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="h-96 bg-slate-100/60 max-w-6xl mx-auto mt-14 rounded-lg">
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-1 w-full pt-12 pb-8 justify-center items-center">
                    {avatars.map((avatar, index) => (
                        <Avatar className={`h-${index == 1 ? "14" : "12"} w-${index == 1 ? "14" : "12"}`}>
                            <AvatarImage src={avatar} alt="avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    )
                    )}
                </div>
                <h1 className="text-3xl font-semibold">Still have questions?</h1>
                <p className="mt-6 text-gray-500 text-xl mx-auto ">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                <button className="bg-blue-500 hover:bg-blue-600 rounded-full py-3 px-6 text-md mt-8 text-white flex items-center gap-1 mx-auto">
                    <MessageCircleHeart strokeWidth={2} size={22} />
                    <span>Chat with us</span>
                </button>
            </div>
        </section>
    );
};

export default Faqs;
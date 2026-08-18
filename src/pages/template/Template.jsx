import { useState, useEffect } from "react";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getTemplates } from "@/services/templateService";

const styles = [
    { id: "all", label: "All Templates" },
    { id: "professional", label: "Professional" },
    { id: "modern", label: "Modern" },
    { id: "minimal", label: "Minimal" },
    { id: "creative", label: "Creative" },
    { id: "executive", label: "Executive" },
];

const TemplateListing = () => {
    const [activeStyle, setActiveStyle] = useState("all");
    const [allTemplates, setAllTemplates] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await getTemplates();

                const data = response?.data?.data || [];

                setAllTemplates(data);
                setTemplates(data);
            } catch (error) {
                console.log("Some error occurred", error);
            } finally {
                setFetching(false);
            }
        };

        fetch();
    }, []);

    const handleStyleChange = (style) => {
        setActiveStyle(style);

        const filteredTemplates =
            style === "all"
                ? allTemplates
                : allTemplates.filter((temp) => temp.style === style);

        setTemplates(filteredTemplates);
    };

    if (fetching) {
        return (
            <div className="flex-1 overflow-y-auto px-8 py-7">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="animate-pulse overflow-hidden rounded-xl border border-slate-100 bg-white"
                        >
                            <div className="aspect-[3/4] bg-slate-100/80" />

                            <div className="flex items-center justify-between px-3.5 py-3">
                                <div className="h-3.5 w-24 rounded bg-slate-100" />
                                <div className="h-3 w-12 rounded bg-slate-100" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col overflow-hidden bg-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
                className="flex shrink-0 items-start justify-between px-8 pt-8"
            >
                <div>
                    <h1 className="text-[22px] font-semibold tracking-tight text-slate-900">
                        Templates
                    </h1>

                    <p className="mt-1 text-[13.5px] text-slate-500">
                        Pick a starting point — you can switch templates anytime
                        without losing your data.
                    </p>
                </div>

                <div className="relative w-64">
                    <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        placeholder="Search templates..."
                        className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-[13px] text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                    />
                </div>
            </motion.div>

            {/* Filters */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeOut",
                }}
                className="mt-8 flex shrink-0 items-center border-b border-slate-200 px-8"
            >
                {styles.map((style) => {
                    const isActive = activeStyle === style.id;

                    return (
                        <button
                            key={style.id}
                            onClick={() => handleStyleChange(style.id)}
                            className={`relative px-4 pb-3 text-[13px] font-medium transition-colors duration-200 ${
                                isActive
                                    ? "text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                            }`}
                        >
                            {style.label}

                            {isActive && (
                                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-600" />
                            )}
                        </button>
                    );
                })}
            </motion.div>

            {/* Templates */}
            <div className="flex-1 overflow-y-auto px-8 py-7">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{
                                opacity: 0,
                                y: 16,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.07,
                                ease: "easeOut",
                            }}
                            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                                <div className="flex h-full w-full items-center justify-center overflow-hidden">
                                    {template?.thumbnail?.path ? (
                                        <img
                                            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${template.thumbnail.path}`}
                                            alt={template.name}
                                            className="h-full w-full scale-105 object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                                        />
                                    ) : (
                                        <div className="h-[92%] w-[85%] rounded-sm bg-white shadow-sm shadow-slate-200 ring-1 ring-slate-100" />
                                    )}
                                </div>

                                {/* Badges */}
                                <div className="absolute left-3 top-3 flex gap-1.5">
                                    {template.isPopular && (
                                        <span className="flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[10.5px] font-medium text-white">
                                            <Sparkles size={10} />
                                            Popular
                                        </span>
                                    )}

                                    {template.isNew && (
                                        <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10.5px] font-medium text-white">
                                            New
                                        </span>
                                    )}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 backdrop-blur-0 transition-all duration-200 group-hover:bg-slate-900/40 group-hover:opacity-100 group-hover:backdrop-blur-[1px]">
                                    <button className="group/btn flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[12.5px] font-medium text-white opacity-0 shadow-md transition-all duration-200 delay-[30ms] group-hover:opacity-100 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
                                        Use this template

                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-200 group-hover/btn:translate-x-1"
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className="flex items-center justify-between px-3.5 py-3">
                                <span className="text-[13px] font-medium text-slate-800">
                                    {template.name}
                                </span>

                                <span className="text-[11px] capitalize text-slate-400">
                                    {template.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {templates.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400 ring-8 ring-slate-50">
                            <Search size={22} />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold text-slate-800">
                            No templates found
                        </h3>

                        <p className="mt-1 max-w-xs text-[13px] text-slate-500">
                            We couldn't find any templates matching your
                            criteria. Try adjusting your search or category
                            filter.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateListing;
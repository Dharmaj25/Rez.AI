import { useState } from "react";
import { Search, Check, ChevronDown, FileUp, PenLine, Library, FileText, Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const choiceIcons = {
    start_from_scratch: PenLine,
    upload_my_resume: FileUp,
    use_existing: Library,
};

export const RadioCards = ({ options, value, onChange }) => (
    <div className="space-y-2.5">
        {options.map((opt) => {
            const isSelected = value === opt.value;
            return (
                <button
                    key={opt.value}
                    onClick={() => onChange(opt.value)}
                    className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${isSelected
                        ? "border-blue-500 bg-blue-50/60 shadow-[0_0_0_1px_rgba(59,130,246,0.3)]"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                >
                    <div>
                        <p className={`text-[14px] font-medium ${isSelected ? "text-blue-700" : "text-slate-800"}`}>
                            {opt.label}
                        </p>
                        {opt.description && (
                            <p className="mt-0.5 text-[12.5px] text-slate-500">{opt.description}</p>
                        )}
                    </div>

                    {isSelected && (
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-600">
                            <Check size={12} strokeWidth={3} className="text-white" />
                        </div>
                    )}
                </button>
            );
        })}
    </div>
);

export const ButtonGroup = ({ options, value, onChange }) => (
    <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
            const isSelected = value === opt.value;
            return (
                <button
                    key={opt.value}
                    onClick={() => onChange(opt.value)}
                    className={`rounded-lg border px-5 py-2.5 text-[13.5px] font-medium transition-all ${isSelected
                        ? "border-blue-500 bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                >
                    {opt.label}
                </button>
            );
        })}
    </div>
);

export const TextInputQuestion = ({ placeholder, value, onChange }) => (
    <Input
        autoFocus
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-xl border-slate-200 px-4 text-[15px] focus-visible:ring-blue-500/30"
    />
);

export const SearchSelect = ({ options, value, onChange }) => {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);

    const filtered = options.filter((opt) => opt.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="relative">
            <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    value={value || query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        onChange("");
                        setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    placeholder="Search or select an industry..."
                    className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-[15px] outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
            </div>

            {open && filtered.length > 0 && (
                <div className="absolute z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-200/60">
                    {filtered.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => {
                                onChange(opt);
                                setQuery(opt);
                                setOpen(false);
                            }}
                            className="flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[13.5px] text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                            {opt}
                            {value === opt && <Check size={14} className="text-blue-600" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export const Dropdown = ({ options, value, onChange }) => {
    const [open, setOpen] = useState(false);
    const selected = options.find((o) => o.value === value);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 px-4 text-[15px] text-slate-700 hover:border-slate-300"
            >
                <span className={selected ? "text-slate-800" : "text-slate-400"}>
                    {selected ? selected.label : "Select an option"}
                </span>
                <ChevronDown size={16} className="text-slate-400" />
            </button>

            {open && (
                <div className="absolute z-10 mt-2 w-full rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-200/60">
                    {options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                            className="w-full rounded-lg px-3.5 py-2.5 text-left text-[13.5px] text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export const NumInputQuestion = ({ placeholder, value, min, max, onChange }) => {
    console.log(min);
    console.log(max);
    return (
        <Input
            autoFocus
            type="number"
            min={min}
            max={max}
            value={value || ""}
            placeholder={placeholder}
            onChange={(e) => { onChange(e.target.value) }}
            className="h-12 rounded-xl border-slate-200 px-4 text-[15px] focus-visible:ring-blue-500/30"
        />
    )

}

export const ChoiceCards = ({ options, value, onChange }) => {
    const [fileName, setFileName] = useState(null);
    const [selectedResumeId, setSelectedResumeId] = useState(null);

    const mockLibrary = [
        { id: "r1", title: "Frontend Engineer Resume", updated: "Updated 2 days ago" },
        { id: "r2", title: "Product Designer Resume", updated: "Updated 3 weeks ago" },
    ];

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    return (
        <div className="space-y-2.5">
            {options.map((opt) => {
                const isSelected = value === opt.value;
                const Icon = choiceIcons[opt.value] || FileText;

                return (
                    <div key={opt.value}>
                        <button
                            onClick={() => onChange(opt.value)}
                            className={`flex w-full items-start gap-3.5 rounded-xl border px-5 py-4 text-left transition-all ${isSelected
                                ? "border-blue-500 bg-blue-50/60 shadow-[0_0_0_1px_rgba(59,130,246,0.3)]"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                }`}
                        >
                            <div
                                className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${isSelected ? "bg-blue-600" : "bg-slate-100"
                                    }`}
                            >
                                <Icon size={16} className={isSelected ? "text-white" : "text-slate-500"} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className={`text-[14px] font-medium ${isSelected ? "text-blue-700" : "text-slate-800"}`}>
                                    {opt.label}
                                </p>
                                <p className="mt-0.5 text-[12.5px] text-slate-500">{opt.description}</p>
                            </div>

                            <div
                                className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${isSelected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                                    }`}
                            >
                                {isSelected && <Check size={11} strokeWidth={3} className="text-white" />}
                            </div>
                        </button>

                        {/* Inline expansion — upload dropzone */}
                        {isSelected && opt.value === "upload_my_resume" && (
                            <div className="mt-2 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-5">
                                {!fileName ? (
                                    <label className="flex cursor-pointer flex-col items-center gap-2.5 py-3 text-center">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
                                            <Upload size={16} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-medium text-slate-700">
                                                Click to upload, or drag and drop
                                            </p>
                                            <p className="mt-0.5 text-[12px] text-slate-400">PDF or DOCX, up to 10MB</p>
                                        </div>
                                        <input
                                            type="file"
                                            accept=".pdf,.docx"
                                            className="hidden"
                                            onChange={handleFileSelect}
                                        />
                                    </label>
                                ) : (
                                    <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
                                        <div className="flex min-w-0 items-center gap-2.5">
                                            <FileText size={16} className="shrink-0 text-blue-600" />
                                            <span className="truncate text-[13px] font-medium text-slate-700">
                                                {fileName}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => setFileName(null)}
                                            className="shrink-0 text-slate-400 hover:text-red-500"
                                        >
                                            <X size={15} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Inline expansion — resume library picker */}
                        {isSelected && opt.value === "use_existing" && (
                            <div className="mt-2 space-y-2 rounded-xl border border-slate-200 bg-slate-50/60 p-3">
                                {mockLibrary.map((resume) => (
                                    <button
                                        key={resume.id}
                                        onClick={() => setSelectedResumeId(resume.id)}
                                        className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${selectedResumeId === resume.id
                                            ? "border-blue-500 bg-white"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <FileText size={15} className="text-slate-400" />
                                            <div>
                                                <p className="text-[13px] font-medium text-slate-800">{resume.title}</p>
                                                <p className="text-[11.5px] text-slate-400">{resume.updated}</p>
                                            </div>
                                        </div>
                                        {selectedResumeId === resume.id && (
                                            <div className="flex size-4.5 items-center justify-center rounded-full bg-blue-600">
                                                <Check size={10} strokeWidth={3} className="text-white" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
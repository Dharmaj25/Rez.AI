import ComboBox from "@/components/ui/combobox";
import TagInput from "@/components/ui/tagInput";
import { domainOptions } from "@/lib/helperData";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Experience = ({ setStep = () => { } }) => {
    return (
        <form>
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">Career Level</label>
                    <select className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" defaultValue="">
                        <option value="" disabled>Select career level</option>
                        <option value="Student / Fresher">Student / Fresher</option>
                        <option value="Junior (0-2 yrs)">Junior (0-2 yrs)</option>
                        <option value="Mid-Level (2-5 yrs)">Mid-Level (2-5 yrs)</option>
                        <option value="Senior (5-8 yrs)">Senior (5-8 yrs)</option>
                        <option value="Lead / Manager">Lead / Manager</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">Industry</label>
                    <ComboBox options={domainOptions} />
                </div>
            </div>

            <div className="space-y-1 mb-4">
                <label className="text-[10px] font-bold text-gray-500">Skills</label>
                <TagInput
                    suggestions={[
                        "React",
                        "Node.js",
                        "MongoDB",
                        "TypeScript",
                        "Next.js",
                        "Tailwind CSS",
                        "Redux",
                        "GraphQL",
                        "Docker"
                    ]}
                />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">Total Experience</label>
                    <input
                        type="number"
                        placeholder="2"
                        min={0}
                        className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">Current Role</label>
                    <input type="text" placeholder="e.g. Frontend Developer" className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                </div>
            </div>


            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">Highest Education</label>
                    <select className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" defaultValue="">
                        <option value="" disabled>Select Education</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD">PhD</option>
                        <option value="Self-Taught / Bootcamp">Self-Taught / Bootcamp</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">Graduation Year</label>
                    <input
                        type="number"
                        placeholder="e.g. 2024"
                        className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">Linkedin Profile</label>
                    <input type="text" placeholder="https://linkedin.com/user" className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">Portfolio / Github</label>
                    <input type="text" placeholder="https://linkedin.com/user" className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" />
                </div>
                <div></div>
            </div>



            <button
                type="button"
                onClick={() => setStep(3)}
                className="group w-full h-9 cursor-pointer bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-1"
            >
                Add your summary
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full mt-3 text-[13px] text-blue-500 hover:text-blue-700 font-medium transition hover:underline cursor-pointer"
            >
                <ArrowLeft size={12} className="text-blue-500 inline mr-1" />
                Go Back to Experience
            </button>
        </form>
    )
}

export default Experience;
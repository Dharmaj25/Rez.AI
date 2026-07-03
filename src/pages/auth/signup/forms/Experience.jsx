import ComboBox from "@/components/ui/combobox";
import TagInput from "@/components/ui/tagInput";
import { domainOptions } from "@/lib/helperData";
import { saveProfessionalDetails } from "@/services/userService";
import { ArrowRight, ArrowLeft, Info } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { toast } from "sonner";

const Experience = ({ setStep = () => { } }) => {
    const [values, setValues] = useState({
        career_level: "",
        skills: [],
        industry: "",
        total_experience: "",
        current_role: "",
        highest_education: "",
        graduation_year: "",
        linkedin_profile: "",
        portfolio: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleFieldChange = (name, value) => {
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const isValid = () => {
        const validationErrors = {};

        if (!values.career_level) validationErrors["career_level"] = "Career level is required";
        if (!values.industry) validationErrors["industry"] = "Industry is required";
        if (!values.skills || values.skills.length === 0) validationErrors["skills"] = "At least one skill is required";
        if (!values.total_experience) validationErrors["total_experience"] = "Total experience is required";
        if (!values.highest_education) validationErrors["highest_education"] = "Highest education is required";
        if (!values.graduation_year) validationErrors["graduation_year"] = "Graduation year is required";

        if (values.total_experience && Number(values.total_experience) < 0) {
            validationErrors["total_experience"] = "Total experience cannot be less than 0";
        }
        if (values.graduation_year && Number(values.graduation_year) < 0) {
            validationErrors["graduation_year"] = "Graduation year cannot be less than 0";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isFormValid = isValid();

        if (!isFormValid) { return };

        try {
            setIsSubmitting(true);
            const response = await saveProfessionalDetails(values);
            setStep(3);
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "Some error occured. Please try again"
            toast.error("Professional details not saved", {
                description: errorMessage
            })
        }
        finally {
            setIsSubmitting(false)
        }
    };

    const getInputClass = (fieldName) => {
        const baseClass = "w-full h-8 px-3 text-sm border rounded-md outline-none transition";
        return errors[fieldName]
            ? `${baseClass} border-red-500 ring-1 ring-red-500 bg-red-50/10`
            : `${baseClass} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`;
    };

    const errorMessageClass = "text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1"

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">
                        Career Level
                    </label>
                    <select
                        className={getInputClass("career_level")}
                        value={values.career_level}
                        name="career_level"
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>
                            Select career level
                        </option>
                        <option value="student">Student / Fresher</option>
                        <option value="junior">Junior (0-2 yrs)</option>
                        <option value="mid">Mid-Level (2-5 yrs)</option>
                        <option value="senior">Senior (5-8 yrs)</option>
                        <option value="lead">Lead / Manager</option>
                    </select>
                    {errors.career_level && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.career_level}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">
                        Industry
                    </label>
                    <ComboBox
                        options={domainOptions}
                        value={values.industry}
                        onChange={(value) => handleFieldChange("industry", value)}
                        className={getInputClass("industry")}
                    />
                    {errors.industry && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.industry}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-1 mb-4">
                <label className="text-[10px] font-bold text-gray-500">
                    Skills
                </label>
                <TagInput
                    suggestions={[
                        "React", "Node.js", "MongoDB", "TypeScript", "Next.js",
                        "Tailwind CSS", "Redux", "GraphQL", "Docker"
                    ]}
                    className={getInputClass("skills")}
                    value={values.skills}
                    onChange={(value) => handleFieldChange("skills", value)}
                />
                {errors.skills && (
                    <p className={errorMessageClass}>
                        <Info size={12} /> {errors.skills}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">
                        Total Experience
                    </label>
                    <input
                        type="number"
                        placeholder="2"
                        name="total_experience"
                        value={values.total_experience}
                        onChange={handleInputChange}
                        min={0}
                        className={getInputClass("total_experience")}
                    />
                    {errors.total_experience && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.total_experience}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">
                        Current Role
                    </label>
                    <input
                        type="text"
                        name="current_role"
                        value={values.current_role}
                        onChange={handleInputChange}
                        placeholder="e.g. Frontend Developer"
                        className={getInputClass("current_role")}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">
                        Highest Education
                    </label>
                    <select
                        className={getInputClass("highest_education")}
                        name="highest_education"
                        value={values.highest_education}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>
                            Select Education
                        </option>
                        <option value="high school">High School</option>
                        <option value="bachelor's degree">Bachelor's Degree</option>
                        <option value="master's degree">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="self-taught">Self-Taught / Bootcamp</option>
                    </select>
                    {errors.highest_education && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.highest_education}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">
                        Graduation Year
                    </label>
                    <input
                        type="number"
                        name="graduation_year"
                        value={values.graduation_year}
                        onChange={handleInputChange}
                        placeholder="e.g. 2024"
                        className={getInputClass("graduation_year")}
                    />
                    {errors.graduation_year && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.graduation_year}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">
                        Linkedin Profile
                    </label>
                    <input
                        type="text"
                        name="linkedin_profile"
                        value={values.linkedin_profile}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/user"
                        className={getInputClass("linkedin_profile")}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500">
                        Portfolio / Github
                    </label>
                    <input
                        type="text"
                        placeholder="https://github.com/user"
                        name="portfolio"
                        value={values.portfolio}
                        onChange={handleInputChange}
                        className={getInputClass("portfolio")}
                    />
                </div>
            </div>


            <button
                type="submit"
                className={`group w-full h-9 cursor-pointer text-white text-sm font-medium rounded-lg transition flex items-center justify-center gap-1
                    ${isSubmitting ? "bg-blue-400 hover:bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
                    `}
            >

                {isSubmitting ? <Spinner /> :
                    <>
                        Add your summary
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </>
                }
            </button>

            <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full mt-3 text-[13px] text-blue-500 hover:text-blue-700 font-medium transition hover:underline cursor-pointer"
            >
                <ArrowLeft
                    size={12}
                    className="text-blue-500 inline mr-1"
                />
                Go Back to Experience
            </button>
        </form>
    );
};

export default Experience;
import { saveCareerSummary } from "@/services/userService";
import { Rocket, ArrowLeft, Info } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import useAuthStore from "@/stores/authStore";


const CareerSummary = ({ setStep = () => { } }) => {
    const setUser = useAuthStore((state) => state.setUser);
    const [values, setValues] = useState({
        "target_role": "",
        "pitch": ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    const validateForm = () => {
        const validationErrors = {};
        if (!values.target_role) validationErrors["target_role"] = "Target role is required";
        if (!values.pitch) validationErrors["pitch"] = "Professional pitch is required";

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            setSubmitting(true);
            try {
                const response = await saveCareerSummary(values);
                const userData = response?.data?.user || null;
                setUser(userData);
                navigate("/dashboard");
            }
            catch (error) {
                const errorMessage = error?.response?.data?.message || "Some error occured. Please try again";
                toast.error("Career summary not saved", {
                    description: errorMessage
                });
            }
            finally {
                setSubmitting(false);
            }
        }
    }


    const getInputClass = (fieldName) => {
        const baseClass = "w-full h-8 px-3 text-sm border rounded-md outline-none transition";
        return errors[fieldName]
            ? `${baseClass} border-red-500 ring-1 ring-red-500`
            : `${baseClass} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`;
    };

    const errorMessageClass = "text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1"

    
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <form
                onSubmit={(event) => handleSubmit(event)}
            >
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg mb-4">
                    <p className="text-[11px] text-blue-700 leading-tight">
                        <strong>Pro-Tip:</strong> Mention your biggest achievement!
                        Our AI uses this to write your resume summary instantly.
                    </p>
                </div>

                {/* Target Role */}
                <div className="space-y-1 mb-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        Target Role
                    </label>
                    <input
                        name="target_role"
                        value={values.target_role}
                        onChange={(event) => handleInputChange(event)}
                        type="text"
                        placeholder="e.g. Senior Frontend Engineer"
                        className={getInputClass("target_role")}
                    />
                    {errors.target_role && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.industry}
                        </p>
                    )}
                </div>

                {/* The Pitch */}
                <div className="space-y-1 mb-5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        Professional Pitch
                    </label>
                    <textarea
                        rows={4}
                        name="pitch"
                        value={values.pitch}
                        onChange={(event) => handleInputChange(event)}
                        placeholder="Describe your career goals and top skills in 1-2 sentences..."
                        className={getInputClass("pitch")}
                    />
                    {errors.pitch && (
                        <p className={errorMessageClass}>
                            <Info size={12} /> {errors.industry}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="group w-full h-10 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2"
                >
                    Launch My Dashboard
                    <Rocket size={16} />
                </button>


            </form>
            <button
                type="button"
                onClick={setStep(2)}
                className="w-full mt-3 text-[13px] text-blue-500 hover:text-blue-700 font-medium transition hover:underline cursor-pointer"
            >
                <ArrowLeft size={12} className="text-blue-500 inline mr-1" />
                Go Back to Experience
            </button>
        </div>
    );
}

export default CareerSummary;

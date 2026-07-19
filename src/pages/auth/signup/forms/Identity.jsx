import { ArrowRight, ArrowLeft, Info } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { savePersonalDetails } from "@/services/userService";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import useAuthStore from "@/stores/authStore";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { SignupContext } from "../SignUpContext";

const Identity = ({ setStep = () => { } }) => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const { setStep: setFormStep, email, personalDetails, setPersonalDetails } = useContext(SignupContext);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (email) {
            setPersonalDetails((prev) => ({ ...prev, email }));
        }
    }, [email]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handlePhoneChange = (phone, { country }) => {
        const dialCodeWithPlus = `+${country?.dialCode}`;

        const cleanFullPhone = phone.replace(/[\s()-]/g, "");
        const nationalNumber = cleanFullPhone.startsWith(dialCodeWithPlus)
            ? cleanFullPhone.replace(dialCodeWithPlus, "")
            : cleanFullPhone;

        setPersonalDetails((prev) => ({
            ...prev,
            number: nationalNumber,
            country_code: dialCodeWithPlus,
        }));

        if (errors.number) {
            setErrors((prev) => ({ ...prev, number: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!personalDetails.first_name.trim()) newErrors.first_name = "First name is required";
        if (!personalDetails.last_name.trim()) newErrors.last_name = "Last name is required";
        if (!personalDetails.country.trim()) newErrors.country = "Country is required";
        if (!personalDetails.state.trim()) newErrors.state = "State is required";
        if (!personalDetails.city.trim()) newErrors.city = "City is required";

        if (!personalDetails.number || personalDetails.number.length < 4) {
            newErrors.number = "Please enter a valid phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        try {
            setIsSubmitting(true);
            const response = await savePersonalDetails(personalDetails);
            setAccessToken(response?.data?.accessToken || null);
            setStep(2);
        }
        catch (error) {
            const errorMessage = error?.response?.data?.message || "Some error occurred. Please try again";
            toast.error("Personal details not saved", {
                description: errorMessage
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };

    const getInputClass = (fieldName) => {
        const baseClass = "w-full h-8 px-3 text-sm border rounded-md outline-none transition";
        return errors[fieldName]
            ? `${baseClass} border-red-500 ring-1 ring-red-500`
            : `${baseClass} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`;
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label htmlFor="first_name" className="text-[10px] font-bold text-gray-500 uppercase">First Name</label>
                    <input
                        id="first_name"
                        name="first_name"
                        value={personalDetails.first_name}
                        onChange={handleInputChange}
                        className={getInputClass("first_name")}
                        placeholder="e.g. John"
                    />
                    {errors.first_name && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1"><Info size={12} /> {errors.first_name}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <label htmlFor="last_name" className="text-[10px] font-bold text-gray-500 uppercase">Last Name</label>
                    <input
                        id="last_name"
                        name="last_name"
                        value={personalDetails.last_name}
                        onChange={handleInputChange}
                        className={getInputClass("last_name")}
                        placeholder="e.g. Doe"
                    />
                    {errors.last_name && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1"><Info size={12} /> {errors.last_name}</p>
                    )}
                </div>
            </div>

            <div className="space-y-1 mb-4">
                <label htmlFor="country" className="text-[10px] font-bold text-gray-500 uppercase">Country</label>
                <input
                    id="country"
                    name="country"
                    value={personalDetails.country}
                    onChange={handleInputChange}
                    className={getInputClass("country")}
                    placeholder="e.g. India"
                />
                {errors.country && (
                    <p className="text-[11px] text-red-500 font-medium flex items-center gap-1"><Info size={12} /> {errors.country}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label htmlFor="state" className="text-[10px] font-bold text-gray-500 uppercase">State</label>
                    <input
                        id="state"
                        name="state"
                        value={personalDetails.state}
                        onChange={handleInputChange}
                        className={getInputClass("state")}
                        placeholder="e.g. Delhi"
                    />
                    {errors.state && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1"><Info size={12} /> {errors.state}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <label htmlFor="city" className="text-[10px] font-bold text-gray-500 uppercase">City</label>
                    <input
                        id="city"
                        name="city"
                        value={personalDetails.city}
                        onChange={handleInputChange}
                        className={getInputClass("city")}
                        placeholder="e.g. New Delhi"
                    />
                    {errors.city && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1"><Info size={12} /> {errors.city}</p>
                    )}
                </div>
            </div>

            <div className="space-y-1.5 mb-6">
                <label className="text-[10px] font-bold text-gray-500 uppercase">Phone Number</label>
                <PhoneInput
                    defaultCountry="in"
                    value={`${personalDetails.country_code}${personalDetails.number}`}
                    onChange={handlePhoneChange}
                    className="w-full"
                    inputClassName={`w-full px-3 py-2 border rounded-r-md text-sm h-8 focus:outline-none transition ${errors.number ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }`}
                    countrySelectorStyleProps={{
                        buttonClassName: `h-8 border rounded-l-md px-2 ${errors.number ? "border-red-500" : "border-gray-300"}`,
                    }}
                />
                {errors.number && (
                    <p className="text-[11px] text-red-500 font-medium flex items-center gap-1"><Info size={12} /> {errors.number}</p>
                )}
            </div>


            <button
                type="submit"
                className={`group w-full h-9 cursor-pointer text-white text-sm font-medium rounded-lg transition flex items-center justify-center gap-1
                    ${isSubmitting ? "bg-blue-400 hover:bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
                    `}
            >

                {isSubmitting ? <Spinner /> :
                    <>
                        Continue
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </>
                }
            </button>
            <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setFormStep("email")}
                className="w-full mt-3 text-[13px] text-blue-500 hover:text-blue-700 font-medium transition hover:underline cursor-pointer flex items-center justify-center gap-1 disabled:text-gray-400 disabled:no-underline disabled:cursor-not-allowed"
            >
                <ArrowLeft size={12} />
                Update Email Address
            </button>
        </form>
    );
};

export default Identity;
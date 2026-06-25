import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Identity = ({ setStep = () => { }, setFormStep = () => {} }) => {

    const [phone, setPhone] = useState("");
    return (
        <form>
            {/* First and Last Name */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">First Name</label>
                    <input className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="e.g. John" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">Last Name</label>
                    <input className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="e.g. Doe" />
                </div>
            </div>

            {/* Country */}
            <div className="space-y-1 mb-4">
                <label className="text-[10px] font-bold text-gray-500 uppercase">Country</label>
                <input className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="e.g. India" />
            </div>


            {/* State and City */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">State</label>
                    <input className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="e.g. Delhi" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">City</label>
                    <input className="w-full h-8 px-3 text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="e.g. New Delhi" />
                </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5 mb-4">
                <label className="text-[10px] font-bold text-gray-500 uppercase">Phone Number</label>
                <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={setPhone}
                    className="w-full"
                    inputClassName="w-full px-3 py-2 border rounded-md focus:outline-none"
                    countrySelectorStyleProps={{
                        buttonClassName: "border rounded-l-md px-2",
                    }}
                />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-1">
            </div>


            <button
                type="button"
                onClick={() => setStep(2)}
                className="group w-full h-9 cursor-pointer bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-1"
            >
                Continue to Careers
                <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                />
            </button>


           <button
                type="button"
                onClick={() => setFormStep("email")}
                className="w-full mt-3 text-[13px] text-blue-500 hover:text-blue-700 font-medium transition hover:underline cursor-pointer"
            >
                <ArrowLeft size={12} className="text-blue-500 inline mr-1" />
                Update Email Address
            </button>
        </form>
    )
}

export default Identity;
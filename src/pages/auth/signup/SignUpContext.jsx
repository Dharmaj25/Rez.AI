import { createContext, useState } from "react";

export const SignupContext = createContext({
    email: "", setEmail: () => { }, step: "", setStep: () => { }, nextStepMap: {},
    personalDetails: {}, setPersonalDetails: () => { },
    professionalDetails: {}, setProfessionalDetails: () => { },
    careerSummary: {}, setCareerSummary: () => { }
});

const NEXT_STEP_MAP = {
    EMAIL: "email",
    OTP_VERIFICATION: "otp",
    PASSWORD_SETUP: "password",
    PERSONAL_DETAILS: "details",
};

export const SignUpProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState("email");
    const [personalDetails, setPersonalDetails] = useState({
        email: email || "",
        first_name: "",
        last_name: "",
        country: "",
        state: "",
        city: "",
        number: "",
        country_code: "+91"
    });
    const [professionalDetails, setProfessionalDetails] = useState(
        {
            career_level: "",
            skills: [],
            industry: "",
            total_experience: "",
            current_role: "",
            highest_education: "",
            graduation_year: "",
            linkedin_profile: "",
            portfolio: "",
        }
    );
    const [careerSummary, setCareerSummary] = useState({"target_role": "","pitch": ""});

    return (
        <SignupContext.Provider value={{ email, setEmail, step, setStep, nextStepMap: NEXT_STEP_MAP, personalDetails, setPersonalDetails, professionalDetails, setProfessionalDetails, careerSummary, setCareerSummary }}>
            {children}
        </SignupContext.Provider>
    );
};
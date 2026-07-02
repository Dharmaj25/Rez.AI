import api from "@/lib/api";

const userEndpoint = "/api/v1/user"

export const savePersonalDetails = (personalDetails) => {
    return api.patch(`${userEndpoint}/onboarding/personal`, personalDetails);
}

export const saveProfessionalDetails = (professionalDetails) => {
    return api.patch(`${userEndpoint}/onboarding/professional`, professionalDetails);
}

export const saveCareerSummary = (careerSummary) => { 
    return api.patch(`${userEndpoint}/onboarding/career`, careerSummary);

}
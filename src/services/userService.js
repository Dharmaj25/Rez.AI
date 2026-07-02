import api from "@/lib/api";
const onboardingEndpoint = "/api/v1/user/onboarding";

export const savePersonalDetails = (personalDetails) => {
    return api.patch(`${onboardingEndpoint}/personal`, personalDetails);
}
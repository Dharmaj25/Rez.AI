import api from "@/lib/api";
const authEndpoint = "/api/v1/auth"

export const getOtp = (email) => {
    return api.post(`${authEndpoint}/send-otp`, { email });
}

export const initializeAuth = () => {
    return api.get(`${authEndpoint}/me`);
}

export const refreshAccessToken = () => {
    return api.get(`${authEndpoint}/refresh`);
}

export const resendOtp = (email) => {
    return api.post(`${authEndpoint}/resend-otp`, { email });
}

export const verifyOtp = (email, otp) => {
    return api.post(`${authEndpoint}/verify-otp`, { email, otp });
}

export const setPassword = (email, password, confirmPassword) => {
    return api.post(`${authEndpoint}/set-password`, { email, password, confirmPassword });
}

export const login = (email, password) => {
    return api.post(`${authEndpoint}/login`, {email, password});
}
import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    loading: true,
    acceesToken: null,

    setUser: (userData) => {
        set({
            user: userData,
            isAuthenticated: true,
        });
    },

    setAccessToken: (token) => {
        set({
            accessToken: token
        })
    },

    logout: () => {
        set({
            user: null,
            accessToken: null,
            isAuthenticated: false,
        });
    },

    setLoading: (status) => {
        set({
            loading: status,
        });
    }
}));

export default useAuthStore;
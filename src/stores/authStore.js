import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: "null",

    isAuthenticated: false,

    loading: true,

    setUser: (userData) => {
        set({
            user: userData,
            isAuthenticated: true,
        });
    },

    clearUser: () => {
        set({
            user: null,
            isAuthenticated: false,
        });
    },

    setLoading: (status) => {
        set({
            loading: status,
        });
    },
}));

export default useAuthStore;
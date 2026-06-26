import useAuthStore from '@/stores/authStore';
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URL,
    withCredentials: true
})

api.interceptors.request.use((config) => {
    const token = useAuthStore((state) => state.accessToken);
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
});

export default api;
import { Spinner } from "@/components/ui/spinner";
import useAuthStore from "@/stores/authStore";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {

    const isLoading = useAuthStore(
        state => state.loading
    );

    const isAuthenticated = useAuthStore(
        state => state.isAuthenticated
    );


    if (isLoading) {
        return <Spinner />;
    }


    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }


    return children;
};


export default GuestRoute;
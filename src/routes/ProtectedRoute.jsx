import { Spinner } from "@/components/ui/spinner";
import useAuthStore from "@/stores/authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const isAuthenticated = useAuthStore(
        state => state.isAuthenticated
    );

    const isLoading = useAuthStore(
        state => state.loading
    );


    if (isLoading) {
        return <Spinner />;
    }


    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }


    return children;
};

export default ProtectedRoute;
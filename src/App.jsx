import { useEffect } from "react";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import useAuthStore from "./stores/authStore";
import { initializeAuth, refreshAccessToken } from "./services/authService";


function App() {
  const setUser = useAuthStore(state => state.setUser);
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const logout = useAuthStore(state => state.logout);
  const setLoading = useAuthStore(state => state.setLoading);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await initializeAuth();
        setUser(response.data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          try {
            const response = await refreshAccessToken();
            setAccessToken(response.data.accessToken);

            const meResponse = await initializeAuth();
            setUser(meResponse.data.user);
          } catch (err) {
            logout();
          }
        } else {
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
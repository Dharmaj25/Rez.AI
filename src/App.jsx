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
        let response = await initializeAuth();
        if (response.status === 200) {
          setUser(response.data.user);
          setLoading(false);
          return;
        }

        response = await refreshAccessToken();
        if (response.status !== 200) {
          logout();
          setLoading(false);
          return;
        }

        setAccessToken(response.data.accessToken);

        response = await initializeAuth();
        if (response.status === 200) {
          setUser(response.data.user);
          setLoading(false);
          return;
        }
        logout();
        setLoading(false);
      }
      catch (err) {
        logout();
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
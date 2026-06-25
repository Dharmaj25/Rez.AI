import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";
import useAuthStore from "./stores/authStore";

function App() {

  const user = useAuthStore((state) => state.user);
  console.log("Current: ", user);

  return (
    <BrowserRouter>
      <Toaster position="bottom-right" expand={false} richColors closeButton />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

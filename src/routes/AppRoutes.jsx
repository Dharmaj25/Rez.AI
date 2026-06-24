import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import List from "../pages/private/List";
import NotFound from "../pages/public/NotFound";
import SignUp from "@/pages/auth/signup/SignUp";


function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<HomeLayout />} >
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth Routes */}
      <Route >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout />} >
          <Route path="/list" element={<List />} />
      </Route>


      {/* 404 : Not Found */}
      <Route path="*" element={<NotFound />}  />

    </Routes>
  );
}

export default AppRoutes;

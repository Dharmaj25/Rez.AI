import { Route, Routes } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import Dashboard from "../pages/private/Dashboard";
import NotFound from "../pages/public/NotFound";
import SignUp from "@/pages/auth/signup/SignUp";
import Login from "@/pages/auth/login/Login";

import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from "@/pages/auth/ResetPassword";

import { SignUpProvider } from "@/pages/auth/signup/SignUpContext";
import AuthLayout from "@/layouts/AuthLayout";
import GithubSuccess from "@/pages/auth/oauth/GithubSuccess";

function AppRoutes() {
  return (
    <Routes>
      {/* Guest Routes */}
      <Route element={<GuestRoute><HomeLayout /></GuestRoute>} ><Route path="/" element={<Home />} /></Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />
        <Route path="/reset-password" element={<GuestRoute><ResetPassword /></GuestRoute>} />
        <Route path="/github/success" element={<GuestRoute><GithubSuccess /></GuestRoute>} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>} >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 : Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

import { Route, Routes } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/private/Dashboard";
import NotFound from "../pages/public/NotFound";
import SignUp from "@/pages/auth/signup/SignUp";

import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Guest Routes */}
      <Route element={<GuestRoute><HomeLayout /></GuestRoute>} ><Route path="/" element={<Home />} /></Route>
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />

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

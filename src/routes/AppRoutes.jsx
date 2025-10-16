import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import SignUp from "../pages/auth/SignUp";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import List from "../pages/private/List";
import NotFound from "../pages/public/NotFound";


function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<HomeLayout />} >
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout />} >
          <Route path="/list" element={<List />} />
      </Route>


      {/* 404 : Not Found */}
      <Route path="*" element={<NotFound />}  />

      <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 | Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;

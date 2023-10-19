import React from "react";
import { Route } from "react-router-dom";
import NotFound from "./404";
import AboutHalwot from "./AboutHalwot";
import AdminDashboard from "./AdminDashboardLayout";
import AdminLogin from "./AdminLogin";
import DashboardHome from "./DashboardHome";
import RegisterForm from "./RegisterForm";
import Hero from "./Home";

const routes = (
  <>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<AboutHalwot />} />

    <Route path="/register" element={<RegisterForm />} />
    <Route path="/admin-login" element={<AdminLogin />} />

    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/dashboard" element={<DashboardHome />} />

    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;

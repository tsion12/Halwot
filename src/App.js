import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AdminDashboardLayout from "./Pages/AdminDashboardLayout";
import Hero from "./Pages/Home";
import RegisterForm from "./Pages/RegisterForm";
import AboutHalwot from "./Pages/AboutHalwot";
import NotFound from "./Pages/404";
import AdminLogin from "./Pages/AdminLogin";
import DashboardHome from "./Pages/DashboardHome";
import routes from "./Pages/routes";
import LandingLayout from "./components/Layout/Landing/LandingLayout";

const App = () => {
  //get tge route
  //prepare rooutes
  //compare and d

  const { pathname } = useLocation();
  const LandingLayoutArr = ["/", "/about"];
  const AdminLayout = ["/admin-dashboard", "/dashboard"];

  return (
    <>
      {LandingLayoutArr.includes(pathname) ? (
        <>
          <LandingLayout>
            <Routes>{routes}</Routes>
          </LandingLayout>
        </>
      ) : AdminLayout.includes(pathname) ? (
        <>
          <AdminDashboardLayout>
            <div className="mt-20 ml-80">
              {" "}
              <Routes>{routes}</Routes>
            </div>
          </AdminDashboardLayout>
        </>
      ) : (
        <>
          <Routes>{routes}</Routes>
        </>
      )}
    </>
  );
};

export default App;

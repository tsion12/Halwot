import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;

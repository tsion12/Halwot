import React, { useEffect, useState } from "react";

import Services from "./Services";
import About from "./About";
import Upcoming from "./Upcoming";
import Hero from "../components/Landing/Hero";

const Home = () => {
  return (
    <>
      {/* section two container */}
      <Hero />
      <About />
      <Services />
      <Upcoming />
    </>
  );
};

export default Home;

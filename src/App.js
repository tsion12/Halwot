import React from "react";
import Slider from "./Slider";
import ImageOne from "./assets/image1.jpg";
import ImageTwo from "./assets/image2.jpg";
import ImageThree from "./assets/image3.jpg";
import Hero from "./Pages/Hero";
import RegisterForm from "./Pages/RegisterForm";
import { Route, Routes } from "react-router-dom";
import AboutHalwot from "./Pages/AboutHalwot";
import NotFound from "./Pages/404";
const images = [{ ImageOne }, { ImageTwo }, { ImageThree }];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<RegisterForm />} />
      {/* <Route path="/about" element={<AboutHalwot />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

import React, { useState } from "react";
import SliderImage from "./SliderImage";

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className="relative">
      <SliderImage image={images[currentImage]} />

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-4 rounded-full"
        onClick={goToPrevious}>
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-4 rounded-full"
        onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;

import React, { useContext, useEffect, useState } from "react";

import Hero1 from "../../assets/sliderOne.jpeg";
import Hero2 from "../../assets/sliderTwo.jpeg";
import Hero3 from "../../assets/slider-four.jpeg";
import Hero4 from "../../assets/slider-five.jpeg";
import Hero5 from "../../assets/slider-six.jpeg";
import Hero6 from "../../assets/slider-7.jpeg";
import Hero7 from "../../assets/Slider-8.jpeg";
import { ScrollContext } from "../../context/ScrollContext";

const Hero = () => {
  const { setScrolled } = useContext(ScrollContext);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "theClass",
    arrows: false,
  };

  const images = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        id="default-carousel"
        class="relative w-full h-screen"
        data-carousel="slide">
        <div className="">
          <img
            src={images[currentImageIndex]}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>

        <button
          onClick={goToPreviousImage}
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-orange-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={goToNextImage}
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-orange-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center text-white">
        {" "}
        <h1 class="mb-4 text-3xl font-extrabold text-gray-300 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-100">
            Halwot
          </span>{" "}
          Emanuel Church
        </h1>
        <p class=" max-w-3xl text-lg font-normal text-gray-200 lg:text-lg dark:text-gray-400 text-center font-serif">
          ዳዊትም ልጁን ሰሎሞንን። ጠንክር፥ አይዞህ፥ አድርገውም፤ አምላኬ እግዚአብሔር አምላክ ከአንተ ጋር ነውና
          አትፍራ፥ አትደንግጥም፤ ለእግዚአብሔርም ቤት አገልግሎት የሚሆነው ሥራ ሁሉ እስኪፈጸም ድረስ እርሱ አይተውህም፥
          አይጥልህምም። <br />{" "}
          <span className="text-xs">መጽሐፈ ዜና መዋዕል ቀዳማዊ 28:20</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;

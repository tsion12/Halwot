import React, { useEffect, useState } from "react";
import Imageone from "../assets/image3.jpg";
import Services from "./Services";
import Logo from "../assets/halwot_logo.png";
import About from "./About";
import Upcoming from "./Upcoming";
import Footer from "./Footer";
const Hero = () => {
  const [isScrolled, setScrolled] = useState(false);

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
    <>
      <div className="relative">
        <img src={Imageone} alt="Your Image" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 ">
          {/* nav bar */}
          <nav
            class={` fixed w-full z-20 top-0 left-0   ${
              isScrolled
                ? "bg-gray-600 border-b  border-orange-400 "
                : "bg-transparent"
            }`}>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" class="flex items-center">
                <img src={Logo} class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Halwot
                </span>
              </a>
              <div class="flex md:order-2">
                <button
                  type="button"
                  class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Register
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                      aria-current="page">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Center */}
          <div className="mt-20 flex flex-col justify-center items-center text-white">
            {" "}
            <h1 className="text-4xl font-bold">Halowet</h1>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              <br />
              nisi assumenda veniam quod ut, qui accusantium nihil officia
              cupiditate autem, nemo, eum doloribus aliquid! Illum fugit <br />
              quibusdam aut ullam quas?
            </p>
          </div>
        </div>
      </div>
      {/* section two container */}
      <About />
      <Services />
      <Upcoming />
      <Footer/>
    </>
  );
};

export default Hero;

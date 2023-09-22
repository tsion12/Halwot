import React from "react";
import Logo from "../assets/halwot_logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTiktokLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-900 border border-t-orange-300 text-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:gap-32">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img src={Logo} class="h-8 mr-3" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Halwot
                </span>
              </a>
            </div>
            <div class="grid grid-cols-3 md:gap-3 sm:gap-6 sm:grid-cols-3 text-white">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white font-serif">
                  Connect with us
                </h2>
                <ul class="text-gray-300 font-serif">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Halwot Emmanuel United Church, Addis Ababa, Ethiopia
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      halwoteuc@gmail.com
                    </a>
                  </li>
                  <li>
                    <p>+251-97 342 2024</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2
                  class="mb-6 text-sm font-semibold text-white font-serif
                 dark:text-white">
                  Quick Links
                </h2>
                <ul class="text-gray-300 dark:text-gray-400 font-serif text-sm">
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" class="hover:underline">
                      Services
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-serif font-bold text-white">
                  Follow us
                </h2>
                <ul class="text-gray-300 dark:text-gray-400 ">
                  <li class="mb-4">
                    <a href="#" class="hover:underline font-serif ">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline font-serif">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Halwot
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BiLogoFacebook />
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <AiOutlineInstagram />
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <PiTiktokLogoThin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

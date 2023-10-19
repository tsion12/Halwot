import React from "react";

import ImageTwo from "../assets/mezge.jpg";
import ImageThree from "../assets/surafel.jpg";
import ImageFour from "../assets/tile.jpg";
const Services = () => {
  return (
    <div className="mt-8 flex flex-col space-x-2 items-center justify-center">
      <h3 className=" font-serif">What we do</h3>
      <h1 className="text-5xl font-serif"> Services</h1>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-6 mt-8">
        <div class="bg-[#FFF5EB] p-2 mx-6 rounded-2xl">
          <div class="flex flex-col  rounded-l-xl">
            <img
              src={ImageTwo}
              alt=""
              class="object-fit rounded-xl h-[600px]  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />

            <div class="p-6 md:p-12">
              <h2 class="font-serif text-xl font-bold text-center  md:text-left">
                Prayer
              </h2>

              <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center  md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, facilis quisquam. Amet veniam repellat corporis quos
                ullam incidunt quam, maiores, ipsa alias recusandae esse
                distinctio placeat nam nisi porro quasi?
              </p>

              {/* <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                  />

                  <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                    Subcribe
                  </button>
                </div> */}
            </div>
          </div>
        </div>
        <div class="bg-[#FFF5EB] p-2 mx-6 rounded-2xl">
          <div class="flex flex-col  rounded-l-xl">
            <img
              src={ImageThree}
              alt=""
              class="object-fit rounded-xl h-[600px]  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />

            <div class="p-6 md:p-12">
              <h2 class="font-serif text-xl font-bold text-center  md:text-left">
                Worship
              </h2>

              <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center  md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, facilis quisquam. Amet veniam repellat corporis quos
                ullam incidunt quam, maiores, ipsa alias recusandae esse
                distinctio placeat nam nisi porro quasi?
              </p>

              {/* <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                  />

                  <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                    Subcribe
                  </button>
                </div> */}
            </div>
          </div>
        </div>
        <div class="bg-[#FFF5EB] p-2 mx-6 rounded-2xl">
          <div class="flex flex-col  rounded-l-xl">
            <img
              src={ImageFour}
              alt=""
              class="object-fit rounded-xl h-[600px]  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />

            <div class="p-6 md:p-12">
              <h2 class="font-serif text-xl font-bold text-center  md:text-left">
                Teachings
              </h2>

              <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center  md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, facilis quisquam. Amet veniam repellat corporis quos
                ullam incidunt quam, maiores, ipsa alias recusandae esse
                distinctio placeat nam nisi porro quasi?
              </p>

              {/* <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                  />

                  <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                    Subcribe
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

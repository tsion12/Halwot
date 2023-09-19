import React from "react";
import Gubaye from "../assets/halwot_gubaye.jpeg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Upcoming = () => {
  return (
    <div className=" m-20">
      <div className="flex flex-col  items-center space-y-3 m-10">
        <div className="font-serif uppercase text-xs">Upcoming sermons</div>
        <div className="max-w-lg text-center uppercase font-serif font-bold text-3xl">
          Join and become part of something Great
        </div>
      </div>
      <div class="bg-[#FFF5EB] p-2 mx-6 rounded-lg">
        <div class="flex flex-col lg:flex-row rounded-l-xl">
          <img
            src={Gubaye}
            alt=""
            class=" rounded-xl w-[700px] h-80 md:h-[500px] md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />

          <div class="p-6 md:p-12">
            <div className="flex justify-between">
              <h2 class="font-serif text-xl font-medium text-center md:text-left">
                Upcoming Events
              </h2>
              <div className="flex flex-col font-serif font-bold">
                <p className="text-end">20</p>
                <p className="uppercase">July</p>
              </div>
            </div>

            <p class="max-w-xs my-4 text-3xl font-bold leading-1 uppercase font-serif text-center md:text-left">
              Watch and Listen to our Sermons
            </p>
            <p className="max-w-4xl my-4 text-xs leading-5 tracking-wide text-center  md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate blanditiis, expedita quia, perferendis veritatis
              aliquid illum, reiciendis magnam velit temporibus accusamus
              similique. Debitis placeat quaerat quia maxime quos. Magnam, quos!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-4 font-serif text-sm">
                <AiOutlineClockCircle />
                <p>Friday 23:39 LT</p>
              </div>
              <div className="flex items-center gap-4 font-serif text-sm">
                <GrLocation />
                <p>Meskel Flower</p>
              </div>
            </div>

            <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-orange-300 hover:bg-orange-400 hover:text-white duration-500">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

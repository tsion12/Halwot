import React from "react";
import { FaPeopleLine } from "react-icons/fa6";
const CardFour = () => {
  return (
    <div className="rounded-lg border border-stroke bg-orange-50 p-10 py-6 px-7.5 shadow-lg flex items-center justify-items-center space-x-6 ">
      <FaPeopleLine className="text-5xl" />

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-3xl font-bold text-black dark:text-white">68</h4>
          <span className="text-lg font-medium">HLGS</span>
        </div>
      </div>
    </div>
  );
};

export default CardFour;

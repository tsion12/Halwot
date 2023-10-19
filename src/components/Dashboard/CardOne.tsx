import { FaArrowsDownToPeople } from "react-icons/fa6";
import React from "react";
const CardOne = () => {
  return (
    <div className="rounded-lg border border-stroke bg-orange-50 p-10 py-6 px-7.5 shadow-lg flex items-center justify-items-center space-x-6 ">
      <FaArrowsDownToPeople className="text-5xl" />

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-3xl font-bold text-black dark:text-white">
            253,909
          </h4>
          <span className="text-lg font-medium">Total Members</span>
        </div>
      </div>
    </div>
  );
};

export default CardOne;

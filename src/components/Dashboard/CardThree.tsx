import React from "react";
import { TbCrossFilled } from "react-icons/tb";

const CardThree = () => {
  return (
    <div className="rounded-lg border border-stroke bg-orange-50 p-10 py-6 px-7.5 shadow-lg flex items-center justify-items-center space-x-6 ">
      <TbCrossFilled className="text-5xl" />

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-3xl font-bold text-black dark:text-white">
            2578
          </h4>
          <span className="text-lg font-medium">Saved</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;

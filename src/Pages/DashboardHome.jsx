import React from "react";
import CardOne from "../components/Dashboard/CardOne";
import CardTwo from "../components/Dashboard/CardTwo";
import CardThree from "../components/Dashboard/CardThree";
import ChartOne from "../components/Dashboard/ChartOne";
import CardFour from "../components/Dashboard/CardFour";

const DashboardHome = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 xl:grid-cols-3 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>

      <div className="mt-4 ">
        <ChartOne />
        {/* <MapOne /> */}
      </div>
      <div className="h-full mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 xl:grid-cols-3 2xl:gap-7.5">
        <CardFour />
      </div>
    </>
  );
};

export default DashboardHome;

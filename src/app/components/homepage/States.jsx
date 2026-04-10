import React from "react";

const StatesSection = () => {
  return (
    <div className="bg-linear-to-r from-[#6832e4] to-[#9f62f2]">
      <div className="container flex flex-col items-center py-12 mx-auto text-white">
        <h2 className="font-bold text-xl  md:text-2xl lg:text-3xl xl:text-4xl">
          Trusted by Millions, Built for You
        </h2>
        <div className="stats md:mt-2 lg:mt-4 flex flex-col md:flex-row   ">
          <div className="stat place-items-center border-none md:border-r md:border-b-0  md:border-dashed">
            <div className="stat-title text-[#e4d9fb]">Total Downloads</div>
            <div className="stat-value text-xl lg:text-3xl">29.6M</div>
            <div className="text-white stat-desc text-xs md:text-base">
              21% more than last month
            </div>
          </div>

          <div className="stat  place-items-center border-none md:border-r md:border-b-0  md:border-dashed">
            <div className="stat-title text-[#e4d9fb]">Total Reviews</div>
            <div className="stat-value text-xl lg:text-3xl ">906K</div>
            <div className="text-white stat-desc text-xs md:text-base ">
              46% more than last month
            </div>
          </div>

          <div className="stat  place-items-center">
            <div className="stat-title text-[#e4d9fb]">Active Apps</div>
            <div className="stat-value text-xl lg:text-3xl">132+</div>
            <div className="text-white stat-desc text-xs md:text-base">
              31 more will Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesSection;

import React from "react";

const SectionHedding = ({ title, subtitle }) => {
  return (
    <div>
      {" "}
      <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl  mb-2">
        {title}
      </h2>
      <p className="text-xs md:text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHedding;

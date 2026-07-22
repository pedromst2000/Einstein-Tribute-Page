import React from "react";
import Years from "./Years";
import Occupation from "./Occupation";

const YearsOccupation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[8px] xs:gap-[8px] sm:gap-[8px] md-sm:gap-[9px] sm-lg:gap-[10px] sm-md:gap-[10px] md-lg:gap-[11px] lg:gap-[12px] xl:gap-[13px] 2xl:gap-[14px] 3xl:gap-[14px] 4xl:gap-[18px] 4xl-5xl:gap-[22px] 5xl:gap-[26px]">
      <Years />
      <Occupation />
    </div>
  );
};

export default YearsOccupation;

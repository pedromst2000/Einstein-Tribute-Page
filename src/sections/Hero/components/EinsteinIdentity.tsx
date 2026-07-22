import React from "react";
import Display from "../../../components/Display";
import YearsOccupation from "./YearsOccupation/Index";
const EinsteinIdentity: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] xs:gap-[10px] sm:gap-[11px] md-sm:gap-[12px] sm-lg:gap-[13px] sm-md:gap-[14px] md-lg:gap-[15px] lg:gap-[16px] xl:gap-[17px] 2xl:gap-[18px] 3xl:gap-[18px] 4xl:gap-[22px] 4xl-5xl:gap-[26px] 5xl:gap-[30px]">
      <Display content="ALBERT EINSTEIN" variant="main" />
      <YearsOccupation />
    </div>
  );
};

export default EinsteinIdentity;

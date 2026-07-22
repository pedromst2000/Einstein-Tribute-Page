import React from "react";

const Years: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-[12px] xs:gap-[12px] sm:gap-[13px] md-sm:gap-[14px] sm-lg:gap-[15px] sm-md:gap-[15px] md-lg:gap-[16px] lg:gap-[16px] xl:gap-[17px] 2xl:gap-[18px] 3xl:gap-[18px] 4xl:gap-[26px] 4xl-5xl:gap-[30px] 5xl:gap-[36px]">
      {/* Birth year */}
      <p className="font-manrope-regular text-amber-500 text-[12px] xs:text-[12px] sm:text-[13px] md-sm:text-[14px] sm-lg:text-[15px] sm-md:text-[15px] md-lg:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[26px] 4xl-5xl:text-[30px] 5xl:text-[36px] leading-[20px] xs:leading-[20px] sm:leading-[22px] md-sm:leading-[24px] sm-lg:leading-[26px] sm-md:leading-[26px] md-lg:leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[28px] 3xl:leading-[28px] 4xl:leading-[42px] 4xl-5xl:leading-[48px] 5xl:leading-[56px] tracking-[5%]">
        1879
      </p>

      {/* Divider */}
      <div className="bg-amber-500/90 w-[24px] xs:w-[24px] sm:w-[32px] md-sm:w-[36px] sm-lg:w-[40px] sm-md:w-[44px] md-lg:w-[48px] lg:w-[48px] xl:w-[52px] 2xl:w-[56px] 3xl:w-[56px] 4xl:w-[84px] 4xl-5xl:w-[96px] 5xl:w-[108px] h-[1px] rounded-[16px]" />

      {/* Death year */}
      <p className="font-manrope-regular text-amber-500 text-[12px] xs:text-[12px] sm:text-[13px] md-sm:text-[14px] sm-lg:text-[15px] sm-md:text-[15px] md-lg:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[26px] 4xl-5xl:text-[30px] 5xl:text-[36px] leading-[20px] xs:leading-[20px] sm:leading-[22px] md-sm:leading-[24px] sm-lg:leading-[26px] sm-md:leading-[26px] md-lg:leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[28px] 3xl:leading-[28px] 4xl:leading-[42px] 4xl-5xl:leading-[48px] 5xl:leading-[56px] tracking-[5%]">
        1955
      </p>
    </div>
  );
};

export default Years;

import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div
        className="scroll-indicator-container xs:w-[20px] xs:h-[32px] sm:w-[20px] sm:h-[32px] md-sm:w-[20px] md-sm:h-[32px] sm-lg:w-[20px] sm-lg:h-[32px] sm-md:w-[20px] sm-md:h-[32px] md-lg:w-[20px] md-lg:h-[32px] lg:w-[20px] lg:h-[32px] xl:w-[20px] xl:h-[32px] 2xl:w-[20px] 2xl:h-[36px] 3xl:w-[20px] 3xl:h-[36px] 4xl:w-[26px] 4xl:h-[44px] 4xl-5xl:w-[36px] 4xl-5xl:h-[64px] 5xl:w-[36px] 5xl:h-[64px] border-2 border-violet-600 rounded-[60px] flex items-center justify-center"
        style={{
          boxShadow: "0 4px 7px 0 rgba(139, 92, 246, 0.6)",
        }}
      >
        <div className="xs:w-[6px] xs:h-[6px] sm:w-[6px] sm:h-[6px] md-sm:w-[6px] md-sm:h-[6px] sm-lg:w-[6px] sm-lg:h-[6px] sm-md:w-[6px] sm-md:h-[6px] md-lg:w-[6px] md-lg:h-[6px] lg:w-[6px] lg:h-[6px] xl:w-[6px] xl:h-[6px] 2xl:w-[6px] 2xl:h-[6px] 3xl:w-[6px] 3xl:h-[6px] 4xl:w-[7px] 4xl:h-[7px] 4xl-5xl:w-[12px] 4xl-5xl:h-[12px] 5xl:w-[12px] 5xl:h-[12px] bg-violet-400 rounded-full" />
      </div>
    </div>
  );
};

export default ScrollIndicator;

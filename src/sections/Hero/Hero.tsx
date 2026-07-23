import React from "react";
import Avatar from "./components/Avatar";
import EinsteinIdentity from "./components/EinsteinIdentity";
import Quote from "../../components/Quote";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[35px] xs:py-[35px] sm:py-[42px] md-sm:py-[46px] sm-lg:py-[50px] sm-md:py-[52px] md-lg:py-[54px] lg:py-[60px] xl:py-[68px] 2xl:py-[76px] 3xl:py-[76px] 4xl:py-[80px] 4xl-5xl:py-[90px] 5xl:py-[95px] gap-[20px] xs:gap-[20px] sm:gap-[24px] md-sm:gap-[28px] sm-lg:gap-[32px] sm-md:gap-[36px] md-lg:gap-[40px] lg:gap-[44px] xl:gap-[48px] 2xl:gap-[52px] 3xl:gap-[52px] 4xl:gap-[58px] 4xl-5xl:gap-[64px] 5xl:gap-[70px]">
      <Avatar />
      <EinsteinIdentity />
      <Quote
        content="Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
        variant="main"
      />
    </div>
  );
};

export default Hero;

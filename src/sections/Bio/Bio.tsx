import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Text from "../../components/Text";
import CardsLayout from "./components/CardsLayout/Index";

const Bio: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[35px] xs:py-[35px] sm:py-[42px] md-sm:py-[46px] sm-lg:py-[50px] sm-md:py-[52px] md-lg:py-[54px] lg:py-[60px] xl:py-[68px] 2xl:py-[76px] 3xl:py-[76px] 4xl:py-[80px] 4xl-5xl:py-[90px] 5xl:py-[95px] px-[16px] xs:px-[16px] sm:px-[24px] md-sm:px-[32px] sm-lg:px-[40px] sm-md:px-[48px] md-lg:px-[56px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px] 3xl:px-[120px] 4xl:px-[128px] 4xl-5xl:px-[136px] 5xl:px-[144px] gap-[20px] xs:gap-[20px] sm:gap-[24px] md-sm:gap-[28px] sm-lg:gap-[32px] sm-md:gap-[36px] md-lg:gap-[40px] lg:gap-[44px] xl:gap-[48px] 2xl:gap-[52px] 3xl:gap-[52px] 4xl:gap-[58px] 4xl-5xl:gap-[64px] 5xl:gap-[70px]">
      <SectionTitle
        whitePart="A Mind"
        coloredPart="Beyond Time"
        variant="main"
        colorItalic="text-amber-500"
      />
      <Text
        variant="body1"
        fontWeight="light"
        color="text-white"
        className="text-center w-[250px] xs:w-[259px] sm:text-center sm:w-[290px] md-sm:w-[340px] sm-lg:w-[400px] sm-md:w-[450px] md-lg:w-[500px] lg:w-[580px] xl:w-[700px] 2xl:w-[824px] 3xl:w-[824px] 4xl:w-[950px] 4xl-5xl:w-[1000px] 5xl:w-[1200px]"
      >
        Albert Einstein was more than a physicist — a visionary who challenged
        our understanding of reality. His journey from patent clerk to one of
        the most celebrated scientists of the 20th century reflects the power of
        curiosity and imagination.
      </Text>
      <CardsLayout />
    </div>
  );
};

export default Bio;

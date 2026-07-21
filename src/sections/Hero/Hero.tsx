import React from "react";
import Avatar from "./components/Avatar";
import Display from "../../components/Display";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 2xs:gap-3 xs:gap-4 py-4 2xs:py-6 xs:py-8">
      <Avatar />
      <Display content="ALBERT EINSTEIN" variant="main" />
    </div>
  );
};

export default Hero;

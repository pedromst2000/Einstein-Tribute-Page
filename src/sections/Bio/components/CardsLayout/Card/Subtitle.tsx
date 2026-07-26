import React from "react";

interface SubtitleProps {
  children: string;
}

/**
 * Subtitle Component
 * Displays card subtitle with Neue Montreal font and responsive sizing
 * Responsive font sizes:
 * - sm: 14px
 * - md: 15px
 * - lg: 16px
 * - xl: 18px
 * - 2xl/3xl: 20px
 */
const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <h3
      className="text-center font-bold text-white leading-tight px-1
        text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl"
      style={{
        fontFamily: "Neue Montreal",
        letterSpacing: "0%",
      }}
    >
      {children}
    </h3>
  );
};

export default Subtitle;

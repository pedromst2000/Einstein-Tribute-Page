import React from "react";
import type { CardProps } from "../../../../../types/card";
import IconCard from "./IconCard";
import Subtitle from "./Subtitle";
import Text from "../../../../../components/Text";

/**
 * Card Component
 * Displays a card with icon, subtitle, and body text
 * Responsive design with gradient border and background
 *
 * Sizes:
 * - sm: 220px × 175px
 * - md: 240px × 190px
 * - lg: 260px × 210px
 * - xl: 280px × 230px
 * - 2xl/3xl: 303px × 250px
 */
const Card: React.FC<CardProps> = ({ icon, subtitle, body }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden card-border-gradient
        w-60 h-52
        sm:w-60 sm:h-52
        md:w-65 md:h-60
        lg:w-72.5 lg:h-72.5
        xl:w-77.5 xl:h-80
        2xl:w-85 2xl:h-87.5
        3xl:w-85 3xl:h-87.5"
      style={{
        padding: "1.5px",
      }}
    >
      {/* Inner content container with background gradient and blur */}
      <div
        className="w-full h-full rounded-[14px] backdrop-blur-[3px] flex flex-col items-center justify-center gap-4 card-bg-gradient"
        style={{
          padding: "28px",
        }}
      >
        {/* Icon Circle */}
        <IconCard icon={icon} />

        {/* Subtitle */}
        <Subtitle>{subtitle}</Subtitle>

        {/* Body Text */}
        <Text
          variant="body1"
          color="text-white"
          className="text-center text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base"
          fontWeight="regular"
        >
          {body}
        </Text>
      </div>
    </div>
  );
};

export default Card;

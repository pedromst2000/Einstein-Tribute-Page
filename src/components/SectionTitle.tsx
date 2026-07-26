import React from "react";
import type { SectionTitleProps } from "../types/sectionTitle";
import { variantResponsiveStyles } from "../types/sectionTitle";

const SectionTitle: React.FC<SectionTitleProps> = ({
  whitePart,
  coloredPart,
  variant,
  color,
}) => {
  const responsiveClasses: string = variantResponsiveStyles[variant];

  return (
    <div className="flex flex-col items-center gap-3 md-sm:gap-4">
      {/* Main Title Container */}
      <div
        className={`font-neue-montreal-bold text-white text-center ${responsiveClasses}`}
      >
        {/* White Part */}
        <span className="font-neue-montreal-bold">{whitePart}</span>

        {/* Colored/Italic Part */}
        <span className={`${color} font-neue-montreal-bold-italic italic ml-2`}>
          {coloredPart}
        </span>
      </div>
      {/* Decorative Line with Gradient */}
      <div className="section-title-divider h-0.5 rounded-2xl" />
    </div>
  );
};

export default SectionTitle;

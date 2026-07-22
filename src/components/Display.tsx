import React from "react";
import type { DisplayProps } from "../types/display";
import { variantResponsiveStyles } from "../types/display";

const Display: React.FC<DisplayProps> = ({ content, variant }) => {
  const responsiveClasses: string = variantResponsiveStyles[variant];
  const gradientClass: string = `display-${variant}-gradient`;

  return (
    <div className="w-full max-w-full overflow-hidden">
      <h1
        className={`${gradientClass} ${responsiveClasses} font-clash-display-semibold text-center w-full block px-2 2xs:px-3 xs:px-4`}
      >
        {content}
      </h1>
    </div>
  );
};

export default Display;

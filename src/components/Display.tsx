import React from "react";
import type { DisplayProps } from "../types/display";
import { variantResponsiveStyles } from "../types/display";

const Display: React.FC<DisplayProps> = ({ content, variant }) => {
  const responsiveClasses: string = variantResponsiveStyles[variant];

  return (
    <div className="w-full max-w-full overflow-hidden">
      <h1
        className={`display-gradient ${responsiveClasses} font-clash-display-semibold text-center w-full block px-2 2xs:px-3 xs:px-4`}
      >
        {content}
      </h1>
    </div>
  );
};

export default Display;

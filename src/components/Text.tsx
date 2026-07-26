import React from "react";
import type { TextProps } from "../types/text";
import { variantStyles, fontWeightClasses } from "../types/text";

const Text: React.FC<TextProps> = ({
  children,
  variant = "body1",
  fontWeight = "regular",
  color = "text-white",
  className = "",
}) => {
  const textClasses: string = variantStyles[variant];
  const fontClass: string = fontWeightClasses[fontWeight];

  return (
    <p className={`${fontClass} ${color} ${textClasses} ${className}`}>
      {children}
    </p>
  );
};

export default Text;

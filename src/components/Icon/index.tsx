import React from "react";
import type { IconProps } from "../../types";

const Icon: React.FC<IconProps> = (props) => {
  // If type is 'lucide', render a Lucide icon with Lucide-specific props
  if (props.type === "lucide") {
    const IconComponent = props.icon;
    return (
      <IconComponent
        size={props.size}
        color={props.color}
        strokeWidth={props.strokeWidth}
      />
    );
  }

  // Otherwise, render a local SVG component with width and height props
  const IconComponent: React.ElementType<{
    width?: string | number;
    height?: string | number;
  }> = props.icon;
  return <IconComponent width={props.width} height={props.height} />;
};

export default Icon;

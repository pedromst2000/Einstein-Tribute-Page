import React from "react";
import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

type LucideIconProps = {
  type: "lucide";
  icon: LucideIcon;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

type SvgIconProps = {
  type: "svg";
  icon: React.FC<SVGProps<SVGSVGElement>>;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
};

type IconProps = LucideIconProps | SvgIconProps;

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
  const IconComponent = props.icon;
  return <IconComponent width={props.width} height={props.height} />;
};

export default Icon;

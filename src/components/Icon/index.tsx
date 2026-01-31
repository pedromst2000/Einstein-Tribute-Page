import React from "react";
import type { SVGProps } from "react";

type IconProps = {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
};

const Icon: React.FC<IconProps> = ({ icon, width, height }) => {
  const IconComponent = icon;

  return <IconComponent width={width} height={height} />;
};

export default Icon;

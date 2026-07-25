import React from "react";
import type { IconProps, LucideIconProps, SvgIconProps } from "../types/icon";
import SvgRenderer from "../utils/svgRenderer";

/**
 * Renders a Lucide icon with dynamic properties
 */
const renderLucideIcon = (props: LucideIconProps): React.ReactNode => {
  const LucideComponent = props.icon as React.FC<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;

  const icon = (
    <LucideComponent
      size={props.size}
      color={props.color}
      strokeWidth={props.strokeWidth}
    />
  );

  // Wrap with responsive classes if provided
  if (props.wrapperClassName) {
    return <div className={props.wrapperClassName}>{icon}</div>;
  }

  return icon;
};

/**
 * Renders a local SVG icon with dynamic styling
 */
const renderSvgIcon = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgRenderer
      path={props.path}
      width={props.width}
      height={props.height}
      color={props.color}
      opacity={props.opacity}
    />
  );
};

/**
 * Icon Component
 * Dynamically renders icons from either Lucide library or local SVG files
 *
 * Usage for Lucide:
 * @example  <Icon type="lucide-icon-svg" icon={Heart} size={24} color="red" strokeWidth={2} />
 *
 * Usage for SVG:
 * @example  <Icon type="svg" path="/assets/svg/icon.svg" width="24px" height="24px" color="blue" opacity={0.8} />
 */
const Icon: React.FC<IconProps> = (props) => {
  if (props.type === "lucide-icon-svg") {
    return <>{renderLucideIcon(props)}</>;
  }

  if (props.type === "svg") {
    return <>{renderSvgIcon(props)}</>;
  }

  return null;
};

export default Icon;

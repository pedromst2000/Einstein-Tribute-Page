import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

/**
 * Props for Lucide icon component
 */
export type LucideIconProps = {
  type: "lucide";
  icon: LucideIcon;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

/**
 * Props for custom SVG icon component
 */
export type SvgIconProps = {
  type: "svg";
  icon: React.FC<SVGProps<SVGSVGElement>>;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
};

/**
 * Union type for Icon component props
 */
export type IconProps = LucideIconProps | SvgIconProps;

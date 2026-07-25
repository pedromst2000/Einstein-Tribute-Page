import type { LucideIcon } from "lucide-react";

/**
 * Props for Lucide icon component
 * Renders dynamic icons from lucide-react library
 */
export type LucideIconProps = {
  type: "lucide-icon-svg";
  icon: LucideIcon;
  size?: number;
  color?: string;
  strokeWidth?: number;
  responsiveClassName?: string; // Custom Tailwind responsive classes for this icon
};

/**
 * Props for local SVG icon component
 * Renders SVG files from public/assets folder (e.g., Noun Project icons)
 */
export type SvgIconProps = {
  type: "svg";
  path: string; // Path to SVG file (e.g., '/assets/svg/icon.svg')
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  color?: string;
  opacity?: number;
};

/**
 * Union type for Icon component props
 * Supports both Lucide icons and local SVG files
 */
export type IconProps = LucideIconProps | SvgIconProps;

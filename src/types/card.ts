import type { LucideIcon } from "lucide-react";

/**
 * Props for Card component
 * Displays an icon card with title, subtitle, and description
 */
export type CardProps = {
  icon: LucideIcon;
  subtitle: string;
  body: string;
};

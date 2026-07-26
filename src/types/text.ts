/**
 * Text component - Body text for UI layouts
 * Simple, consistent sizing without complex responsive scaling
 * Font-family: Manrope Regular
 */
export type TextVariant = "h5" | "body1" | "body2" | "body3" | "label" | "cta";
export type FontWeight = "semibold" | "medium" | "regular" | "light";

/**
 * Props for the Text component
 * @param children: the text content to display
 * @param variant: h5, body1, body2, body3, label, or cta - defaults to body1
 * @param fontWeight: optional font weight (semibold, medium, regular, light) - defaults to regular
 * @param color: optional text color (e.g., "text-white", "text-gray-400", "text-violet-600")
 * @param className: optional additional CSS classes for extended styling
 */
export type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  fontWeight?: FontWeight;
  color?: string;
  className?: string;
};

/**
 * Font weight to Tailwind class mapping
 * Maps fontWeight prop values to their corresponding Tailwind utility classes
 */
export const fontWeightClasses: Record<FontWeight, string> = {
  light: "font-manrope-light",
  regular: "font-manrope-regular",
  medium: "font-manrope-medium",
  semibold: "font-manrope-semibold",
};

/**
 * Style configurations for each text variant with responsive breakpoints
 * Mobile-first approach: base styles apply to screens <= 1024px, lg: prefix for screens >= 1024px
 * Extra large screens (4xl+) have increased font sizes for better readability
 * @example h5: 16px/22px/3% (mobile) → 18px/26px/0% (2xl) → 24px/30px/0% (5xl)
 * @example body1: 14px/22px/2% (mobile) → 16px/26px/2% (2xl) → 22px/30px/2% (5xl)
 * @example body2: 13px/20px/2% (mobile) → 14px/20px/2% (2xl) → 20px/26px/2% (5xl)
 * @example body3: 12px/16px/1% (mobile/2xl) → 18px/22px/1% (5xl)
 * @example label: 11px/16px/2% (mobile) → 12px/16px/1% (2xl) → 15px/18px/1% (5xl)
 * @example cta: 16px/16px/4% (mobile) → 18px/16px/4% (2xl) → 24px/20px/4% (5xl)
 */
export const variantStyles: Record<TextVariant, string> = {
  // H5: 16px/22px/3% on mobile, 18px/26px/0% on desktop (lg), increases to 32px/38px on 5xl
  h5: "text-[16px] leading-[22px] tracking-[3%] lg:text-[18px] lg:leading-[26px] lg:tracking-[0%] 4xl:text-[24px] 4xl:leading-[30px] 4xl-5xl:text-[27px] 4xl-5xl:leading-[34px] 5xl:text-[32px] 5xl:leading-[38px]",

  // Body 1: 14px/22px/2% on mobile, 16px/26px/2% on desktop (lg), increases to 30px/36px on 5xl - default body text
  body1:
    "text-[14px] leading-[22px] tracking-[2%] lg:text-[16px] lg:leading-[26px] 4xl:text-[22px] 4xl:leading-[30px] 4xl-5xl:text-[25px] 4xl-5xl:leading-[32px] 5xl:text-[30px] 5xl:leading-[36px]",

  // Body 2: 13px/20px/2% on mobile, 14px/20px/2% on desktop (lg), increases to 28px/32px on 5xl
  body2:
    "text-[13px] leading-[20px] tracking-[2%] lg:text-[14px] 4xl:text-[19px] 4xl:leading-[26px] 4xl-5xl:text-[22px] 4xl-5xl:leading-[28px] 5xl:text-[28px] 5xl:leading-[32px]",

  // Body 3: 12px/16px/1% on mobile/desktop, increases to 26px/30px on 5xl
  body3:
    "text-[12px] leading-[16px] tracking-[1%] 4xl:text-[17px] 4xl:leading-[22px] 4xl-5xl:text-[20px] 4xl-5xl:leading-[25px] 5xl:text-[26px] 5xl:leading-[30px]",

  // Label: 11px/16px/2% on mobile, 12px/16px/1% on desktop (lg), increases to 19px/23px on 5xl
  label:
    "text-[11px] leading-[16px] tracking-[2%] lg:text-[12px] lg:tracking-[1%] 4xl:text-[15px] 4xl:leading-[19px] 4xl-5xl:text-[17px] 4xl-5xl:leading-[21px] 5xl:text-[19px] 5xl:leading-[23px]",

  // Call to Action: 16px/16px/4% on mobile, 18px/16px/4% on desktop (lg), increases to 32px/26px on 5xl
  cta: "text-[16px] leading-[16px] tracking-[4%] lg:text-[18px] 4xl:text-[24px] 4xl:leading-[21px] 4xl-5xl:text-[27px] 4xl-5xl:leading-[22px] 5xl:text-[32px] 5xl:leading-[26px]",
};

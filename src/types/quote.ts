/**
 * Quote component variants with predefined responsive styles
 */
export type QuoteVariant = "main" | "secondary";

/**
 * Props for the Quote component
 * content: the quote text, variant: main or secondary
 */
export type QuoteProps = {
  content: string;
  variant: QuoteVariant;
};

/**
 * Responsive style configurations for each variant
 * Values change based on screen breakpoints
 */
export const variantResponsiveStyles: Record<QuoteVariant, string> = {
  // Main variant: Balanced with Display and EinsteinIdentity elements
  // md-sm: 20px/30px, scales to 2xl: 28px/40px, then continues scaling for larger screens
  main: "text-[16px] xs:text-[16px] sm:text-[17px] md-sm:text-[20px] sm-lg:text-[21px] sm-md:text-[23px] md-lg:text-[24px] lg:text-[25px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[28px] 4xl:text-[36px] 4xl-5xl:text-[42px] 5xl:text-[50px] 2xs:leading-[24px] xs:leading-[24px] sm:leading-[25px] md-sm:leading-[30px] sm-lg:leading-[31px] sm-md:leading-[33px] md-lg:leading-[35px] lg:leading-[37px] xl:leading-[38px] 2xl:leading-[40px] 3xl:leading-[40px] 4xl:leading-[48px] 4xl-5xl:leading-[56px] 5xl:leading-[68px] tracking-[0%]",

  // Secondary variant: md-sm: 18px/26px, scales to 2xl: 24px/38px
  secondary:
    "text-[12px] xs:text-[14px] sm:text-[14px] md-sm:text-[18px] sm-lg:text-[19px] sm-md:text-[20px] md-lg:text-[21px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px] 3xl:text-[24px] 4xl:text-[32px] 4xl-5xl:text-[37px] 5xl:text-[44px] 2xs:leading-[18px] xs:leading-[18px] sm:leading-[21px] md-sm:leading-[26px] sm-lg:leading-[27px] sm-md:leading-[28px] md-lg:leading-[30px] lg:leading-[32px] xl:leading-[35px] 2xl:leading-[38px] 3xl:leading-[38px] 4xl:leading-[50px] 4xl-5xl:leading-[58px] 5xl:leading-[68px] tracking-[0%]",
};

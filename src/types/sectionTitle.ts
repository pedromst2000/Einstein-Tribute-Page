/**
 * Section Title component variants with predefined responsive styles
 */
export type SectionTitleVariant = "main" | "secondary";

/**
 * Props for the Section Title component
 * @param whitePart: the text to display in white (Neue Montreal Bold)
 * @param coloredPart: the text to display in italics (Neue Montreal Bold Italic)
 * @param variant: main or secondary (controls text size)
 * @param color: optional color for the colored part (e.g., "text-violet-600", "text-amber-500")
 */
export type SectionTitleProps = {
  whitePart: string;
  coloredPart: string;
  variant: SectionTitleVariant;
  color?: string;
};

/**
 * Responsive style configurations for each variant
 * Main: md-sm: 28px/34px, scales to 2xl/3xl: 38px/46px
 * Secondary: md-sm: 26px/30px, scales to 2xl/3xl: 44px/52px
 */
export const variantResponsiveStyles: Record<SectionTitleVariant, string> = {
  // Main variant: 28px/34px at md-sm, scales to 38px/46px at 2xl/3xl
  main: "text-[20px] xs:text-[21px] sm:text-[23px] md-sm:text-[28px] sm-lg:text-[29px] sm-md:text-[31px] md-lg:text-[32px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[38px] 4xl:text-[44px] 4xl-5xl:text-[50px] 5xl:text-[56px] 2xs:leading-[25px] xs:leading-[26px] sm:leading-[28px] md-sm:leading-[34px] sm-lg:leading-[35px] sm-md:leading-[37px] md-lg:leading-[39px] lg:leading-[41px] xl:leading-[43px] 2xl:leading-[46px] 3xl:leading-[46px] 4xl:leading-[53px] 4xl-5xl:leading-[60px] 5xl:leading-[68px] tracking-[0%] w-full",

  // Secondary variant: 26px/30px at md-sm, scales to 44px/52px at 2xl/3xl
  secondary:
    "text-[18px] xs:text-[23px] sm:text-[25px] md-sm:text-[26px] sm-lg:text-[28px] sm-md:text-[30px] md-lg:text-[33px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] 3xl:text-[44px] 4xl:text-[51px] 4xl-5xl:text-[58px] 5xl:text-[66px] 2xs:leading-[22px] xs:leading-[23px] sm:leading-[26px] md-sm:leading-[30px] sm-lg:leading-[33px] sm-md:leading-[36px] md-lg:leading-[39px] lg:leading-[42px] xl:leading-[46px] 2xl:leading-[52px] 3xl:leading-[52px] 4xl:leading-[61px] 4xl-5xl:leading-[69px] 5xl:leading-[79px] tracking-[0%]",
};

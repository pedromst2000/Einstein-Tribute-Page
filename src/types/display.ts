/**
 * Display component variants with predefined responsive styles
 */
export type DisplayVariant = "main" | "secondary" | "tertiary";

/**
 * Props for the Display component
 * Only content and gradient are dynamic - fontSize, leading, and tracking are responsive per variant
 */
export type DisplayProps = {
  content: string;
  variant: DisplayVariant;
};

/**
 * Responsive style configurations for each variant
 * Values change based on screen breakpoints
 */
export const variantResponsiveStyles: Record<DisplayVariant, string> = {
  // Main variant: 25px (sub-320px) → 120px (4K) scaled proportional to avatar with smooth transitions
  main: "text-[30px] xs:text-[29px] sm:text-[35px] md-sm:text-[38px] sm-lg:text-[42px] sm-md:text-[46px] md-lg:text-[47px] lg:text-[50px] xl:text-[54px] 2xl:text-[60px] 3xl:text-[60px] 4xl:text-[86px] 4xl-5xl:text-[101px] 5xl:text-[120px] 2xs:leading-[38px] xs:leading-[46px] sm:leading-[46px] md-sm:leading-[49px] sm-lg:leading-[55px] sm-md:leading-[60px] md-lg:leading-[61px] lg:leading-[65px] xl:leading-[70px] 2xl:leading-[78px] 3xl:leading-[78px] 4xl:leading-[112px] 4xl-5xl:leading-[131px] 5xl:leading-[156px] 2xs:-tracking-[1.6%] xs:-tracking-[1.5%] sm:-tracking-[1.3%] md-sm:-tracking-[1.2%] sm-lg:-tracking-[1.1%] sm-md:-tracking-[1%] md-lg:-tracking-[0.9%] lg:-tracking-[0.8%] xl:-tracking-[0.7%] 2xl:-tracking-[0.6%] 3xl:-tracking-[0.6%] 4xl:-tracking-[0.3%] 4xl-5xl:-tracking-[0.1%] 5xl:tracking-[0%]",

  // Secondary variant: 11px (sub-320px) → 36px (4K) scaled proportional to avatar with smooth transitions
  secondary:
    "text-[14px] xs:text-[14px] sm:text-[14px] md-sm:text-[14px] sm-lg:text-[15px] sm-md:text-[15px] md-lg:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[26px] 4xl-5xl:text-[30px] 5xl:text-[36px] 2xs:leading-[16px] xs:leading-[20px] sm:leading-[20px] md-sm:leading-[20px] sm-lg:leading-[20px] sm-md:leading-[21px] md-lg:leading-[21px] lg:leading-[23px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[27px] 4xl:leading-[39px] 4xl-5xl:leading-[45px] 5xl:leading-[54px] 2xs:tracking-[1.4%] xs:tracking-[1.3%] sm:tracking-[1.2%] md-sm:tracking-[1.2%] sm-lg:tracking-[1.1%] sm-md:tracking-[0.9%] md-lg:tracking-[0.8%] lg:tracking-[0.8%] xl:tracking-[0.7%] 2xl:tracking-[0.5%] 3xl:tracking-[0.5%] 4xl:tracking-[0.3%] 4xl-5xl:tracking-[0.1%] 5xl:tracking-[0%]",

  // Tertiary variant: 55px (sub-320px) → 240px (4K) scaled proportional to avatar with smooth transitions
  tertiary:
    "text-[70px] xs:text-[70px] sm:text-[70px] md-sm:text-[77px] sm-lg:text-[85px] sm-md:text-[92px] md-lg:text-[94px] lg:text-[101px] xl:text-[109px] 2xl:text-[120px] 3xl:text-[120px] 4xl:text-[173px] 4xl-5xl:text-[202px] 5xl:text-[240px] 2xs:leading-[64px] xs:leading-[81px] sm:leading-[81px] md-sm:leading-[89px] sm-lg:leading-[99px] sm-md:leading-[107px] md-lg:leading-[109px] lg:leading-[117px] xl:leading-[126px] 2xl:leading-[139px] 3xl:leading-[139px] 4xl:leading-[201px] 4xl-5xl:leading-[234px] 5xl:leading-[278px] 2xs:-tracking-[1.4%] xs:-tracking-[1.3%] sm:-tracking-[1.2%] md-sm:-tracking-[1%] sm-lg:-tracking-[0.95%] sm-md:-tracking-[0.9%] md-lg:-tracking-[0.8%] lg:-tracking-[0.7%] xl:-tracking-[0.6%] 2xl:-tracking-[0.5%] 3xl:-tracking-[0.5%] 4xl:-tracking-[0.3%] 4xl-5xl:-tracking-[0.1%] 5xl:tracking-[0%]",
};

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Typewriter from "typewriter-effect";
import type { QuoteProps } from "../types/quote";
import { variantResponsiveStyles } from "../types/quote";

interface TypewriterInstance {
  typeString(str: string): TypewriterInstance;
  start(): void;
}

const Quote: React.FC<QuoteProps> = ({ content, variant }) => {
  const responsiveClasses: string = variantResponsiveStyles[variant];
  const contentWithQuotes: string = `" ${content} "`;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP fade-in animation for the quote container entrance
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${responsiveClasses} font-cormorant-garamond-light-italic text-white text-center w-[140px] xs:w-[200px] sm:w-[220px] md-sm:w-[261px] sm-lg:w-[280px] sm-md:w-[310px] md-lg:w-[340px] lg:w-[420px] xl:w-[450px] 2xl:w-[526px] 3xl:w-[526px] 4xl:w-[760px] 4xl-5xl:w-[930px] 5xl:w-[1100px]`}
    >
      <Typewriter
        onInit={(typewriter: TypewriterInstance) => {
          typewriter.typeString(contentWithQuotes).start();
        }}
        options={{
          delay: 75,
          cursor: "|",
          autoStart: true,
        }}
      />
    </div>
  );
};

export default Quote;

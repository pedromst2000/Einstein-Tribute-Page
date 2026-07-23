import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Avatar: React.FC = () => {
  const blurRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Blur background animation - entrance with y movement
    gsap.fromTo(
      blurRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
    );

    // Avatar container entrance - scale and opacity
    gsap.fromTo(
      containerRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2.2,
        ease: "back.out(1.7)",
        delay: 0.8,
      },
    );

    // Glow box-shadow pulsing animation - cycle through intensity levels
    gsap.fromTo(
      glowRef.current,
      {
        boxShadow:
          "0 -8px 17px 8px rgba(139,92,246,0.2), 0 6px 10px 6px rgba(245,158,11,0.15), -6px 0 12px 8px rgba(59,130,246,0.2)",
      },
      {
        boxShadow:
          "0 -8px 17px 8px rgba(139,92,246,0.5), 0 6px 10px 6px rgba(245,158,11,0.35), -6px 0 12px 8px rgba(59,130,246,0.4)",
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      },
    );
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      {/* Circular Blue Background Blur Form */}
      <div
        ref={blurRef}
        className="absolute xs:w-[232px] xs:h-[232px] sm:w-[232px] sm:h-[232px] md-sm:w-[256px] md-sm:h-[256px] sm-lg:w-[282px] sm-lg:h-[282px] sm-md:w-[307px] sm-md:h-[307px] md-lg:w-[314px] md-lg:h-[314px] lg:w-[314px] lg:h-[314px] xl:w-[336px] xl:h-[336px] 2xl:w-[340px] 2xl:h-[340px] 3xl:w-[340px] 3xl:h-[340px] 4xl:w-[420px] 4xl:h-[420px] 4xl-5xl:w-[520px] 4xl-5xl:h-[520px] 5xl:w-[540px] 5xl:h-[540px] rounded-full bg-blue-500/25 blur-[50.96px] z-0 pointer-events-none"
      ></div>

      {/* Avatar Container with Gradient Border */}
      <div
        ref={containerRef}
        className="avatar-border-gradient relative 2xs:w-[127px] 2xs:h-[127px] xs:w-[145px] xs:h-[145px] sm:w-[145px] sm:h-[145px] md-sm:w-[160px] md-sm:h-[160px] sm-lg:w-[176px] sm-lg:h-[176px] sm-md:w-[192px] sm-md:h-[192px] md-lg:w-[196px] md-lg:h-[196px] lg:w-[210px] lg:h-[210px] xl:w-[226px] xl:h-[226px] 2xl:w-[250px] 2xl:h-[250px] 3xl:w-[250px] 3xl:h-[250px] 4xl:w-[360px] 4xl:h-[360px] 4xl-5xl:w-[420px] 4xl-5xl:h-[420px] 5xl:w-[500px] 5xl:h-[500px] rounded-full p-[3px] 2xs:p-[2.5px] xs:p-[3px] sm:p-[3px] md-sm:p-[3px] sm-lg:p-[3px] sm-md:p-[3.5px] md-lg:p-[3.5px] lg:p-[4px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[5px] 4xl:p-[6px] 4xl-5xl:p-[7px] 5xl:p-[9px]"
      >
        <div
          ref={glowRef}
          className="relative w-full h-full rounded-full overflow-hidden"
        >
          <div className="absolute inset-0 rounded-full bg-black/20 z-10 pointer-events-none"></div>
          <img
            src="/assets/images/Einstein-Avatar.webp"
            alt="Albert Einstein"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;

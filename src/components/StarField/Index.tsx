import React, { useMemo } from "react";
import { generateStars } from "../../utils/starGenerator";

const StarField: React.FC = () => {
  const stars: ReturnType<typeof generateStars> = useMemo(
    () => generateStars(),
    [],
  ); // useMemo to avoid regenerating stars on every render

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
          75% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.2;
          }
        }

        .star {
          position: absolute;
          border-radius: 50%;
          animation: twinkle var(--animation-duration) infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="fixed inset-0 w-full h-full overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={
              {
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                animationDelay: star.animationDelay,
                "--animation-duration": star.animationDuration,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
};

export default StarField;

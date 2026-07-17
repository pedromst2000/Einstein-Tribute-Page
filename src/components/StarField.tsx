import React, { useMemo } from "react";
import { generateStars } from "../utils/starGenerator";

const StarField: React.FC = () => {
  const stars: ReturnType<typeof generateStars> = useMemo(
    () => generateStars(),
    [],
  ); // useMemo to avoid regenerating stars on every render

  return (
    <>
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

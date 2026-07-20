import React, { useMemo } from "react";
import { generateStars } from "../utils/starGenerator";

const StarField: React.FC = () => {
  /**
   * Generate stars using the generateStars function and memoize the result to prevent unnecessary re-renders. The useMemo hook ensures that the stars are only generated once when the component mounts, improving performance by avoiding regeneration on every render.
   */
  const stars: ReturnType<typeof generateStars> = useMemo(
    () => generateStars(),
    [],
  );

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
                //"--animation-duration": star.animationDuration,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
};

export default StarField;

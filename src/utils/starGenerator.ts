import { getSeededRandom } from "./random";
import {
  THEME_COLORS,
  GRID_ROWS,
  GRID_COLS,
  STARS_PER_CONSTELLATION,
} from "./constants";
import type { Star } from "../types";

/**
 * Generates an array of stars distributed in constellation clusters
 * Uses seeded randomness to ensure deterministic placement
 * @returns Array of Star objects
 */
export const generateStars = (): Star[] => {
  const generatedStars: Star[] = [];

  for (let row = 0; row < GRID_ROWS; row += 1) {
    for (let col = 0; col < GRID_COLS; col += 1) {
      const gridX = (100 / GRID_COLS) * col + 100 / GRID_COLS / 2;
      const gridY = (100 / GRID_ROWS) * row + 100 / GRID_ROWS / 2;

      const seed: number = row * GRID_COLS + col; // Unique seed for each constellation cluster
      const offsetX: number = (getSeededRandom(seed) - 0.5) * 12; // Random offset for constellation cluster within grid cell
      const offsetY: number = (getSeededRandom(seed + 1000) - 0.5) * 12;

      const constellationX: number = Math.max(8, Math.min(92, gridX + offsetX)); // Ensure constellations stay within bounds (8% to 92%)
      const constellationY: number = Math.max(8, Math.min(92, gridY + offsetY));
      const constellationRadius: number = 6 + getSeededRandom(seed + 2000) * 5;

      for (let s = 0; s < STARS_PER_CONSTELLATION; s += 1) {
        const starSeed: number = seed * 100 + s;
        const angle: number = getSeededRandom(starSeed) * Math.PI * 2;
        const distance: number =
          getSeededRandom(starSeed + 500) * constellationRadius;

        const isViolet: boolean = getSeededRandom(starSeed + 3000) > 0.85;
        const isBlue: boolean = getSeededRandom(starSeed + 3100) > 0.75;
        const isAmber: boolean = getSeededRandom(starSeed + 3200) > 0.9;

        let color: string = THEME_COLORS[0]; // white default (~50%)

        // Distribute remaining colors among accent stars (violet, blue, amber variants)
        if (isAmber) {
          // Pick between amber-500 [5] and amber-400 [6]
          color =
            getSeededRandom(starSeed + 3200) > 0.95
              ? THEME_COLORS[6]
              : THEME_COLORS[5];
        } else if (isViolet) {
          // Pick between violet-600 [1] and violet-400 [2]
          color =
            getSeededRandom(starSeed + 3000) > 0.9
              ? THEME_COLORS[2]
              : THEME_COLORS[1];
        } else if (isBlue) {
          // Pick between blue-500 [3] and blue-400 [4]
          color =
            getSeededRandom(starSeed + 3100) > 0.8
              ? THEME_COLORS[4]
              : THEME_COLORS[3];
        }

        const star: Star = {
          id: generatedStars.length,
          x: constellationX + Math.cos(angle) * distance,
          y: constellationY + Math.sin(angle) * distance,
          size: 0.5 + getSeededRandom(starSeed + 1000) * 3,
          animationDuration: `${0.8 + getSeededRandom(starSeed + 2000) * 0.6}s`, // 0.8s to 1.4s
          animationDelay: `${getSeededRandom(starSeed + 2500) * 1}s`,
          color,
        };

        // Ensure stars are within the visible area (0% to 100%)
        if (star.x >= 0 && star.x <= 100 && star.y >= 0 && star.y <= 100) {
          generatedStars.push(star);
        }
      }
    }
  }

  return generatedStars;
};

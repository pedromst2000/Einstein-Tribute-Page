import { getSeededRandom } from "./random";
import {
  THEME_COLORS,
  GRID_ROWS,
  GRID_COLS,
  STARS_PER_CONSTELLATION,
  MILKY_WAY_BAND_WIDTH,
  MILKY_WAY_DENSITY_MULTIPLIER,
  POLE_DENSITY_MULTIPLIER,
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

      // Calculate variable star count based on latitude (Milky Way band effect)
      // Poles (top/bottom) sparse, equatorial band (Milky Way) dense
      let starsInConstellation: number = STARS_PER_CONSTELLATION;
      const distanceFromCenter: number = Math.abs(row - GRID_ROWS / 2);
      if (distanceFromCenter < MILKY_WAY_BAND_WIDTH) {
        // In Milky Way band: increase density
        starsInConstellation = Math.round(
          STARS_PER_CONSTELLATION * MILKY_WAY_DENSITY_MULTIPLIER,
        );
      } else if (distanceFromCenter > GRID_ROWS / 2 - 1) {
        // Near poles: decrease density
        starsInConstellation = Math.round(
          STARS_PER_CONSTELLATION * POLE_DENSITY_MULTIPLIER,
        );
      }

      for (let s = 0; s < starsInConstellation; s += 1) {
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
          // Pick between amber-500 [5], amber-400 [6], and amber-300 [7]
          const amberRandom = getSeededRandom(starSeed + 3200);
          if (amberRandom > 0.96) {
            color = THEME_COLORS[7]; // amber-300
          } else if (amberRandom > 0.93) {
            color = THEME_COLORS[6]; // amber-400
          } else {
            color = THEME_COLORS[5]; // amber-500
          }
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

        // Realistic magnitude-based star sizing (slightly increased for visibility)
        // 80% small (0.4-1.2px), 15% medium (1.2-2.5px), 5% large (2.5-4.5px)
        const sizeRandom: number = getSeededRandom(starSeed + 1000);
        let size: number;
        if (sizeRandom < 0.8) {
          // Faint stars (magnitude 5-6): 0.4-1.2px
          size = 0.4 + (sizeRandom / 0.8) * 0.8;
        } else if (sizeRandom < 0.95) {
          // Medium stars (magnitude 3-4): 1.2-2.5px
          size = 1.2 + ((sizeRandom - 0.8) / 0.15) * 1.3;
        } else {
          // Bright stars (magnitude 1-2): 2.5-4.5px
          size = 2.5 + ((sizeRandom - 0.95) / 0.05) * 2;
        }

        const star: Star = {
          id: generatedStars.length,
          x: constellationX + Math.cos(angle) * distance,
          y: constellationY + Math.sin(angle) * distance,
          size,
          animationDuration: `${3 + getSeededRandom(starSeed + 2000) * 2}s`, // 3s to 5s (slower, realistic atmospheric twinkling)
          animationDelay: `${getSeededRandom(starSeed + 2500) * 2}s`, // 0-2s staggered delays
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

/**
 * Theme colors for stars
 */
export const THEME_COLORS: string[] = [
  "#FFFFFF", // white
  "#8B5CF6", // violet-600
  "#C997F9", // violet-400
  "#3B82F6", // blue-500
  "#60A5FA", // blue-400
  "#F59E0B", // amber-500
  "#FABA4F", // amber-400
  "#FFD583", // amber-300
];

/**
 * Grid configuration for constellation distribution
 * 7×7 grid balances coverage with clean appearance
 */
export const GRID_ROWS: number = 7;
export const GRID_COLS: number = 7;

/**
 * Base number of stars per constellation cluster
 * Actual count varies by latitude (Milky Way band denser)
 */
export const STARS_PER_CONSTELLATION: number = 13;

/**
 * Milky Way band configuration
 * Creates subtle higher density in equatorial band, lower at poles
 */
export const MILKY_WAY_CENTER_ROW: number = 3; // Center of band (0-6 scale)
export const MILKY_WAY_BAND_WIDTH: number = 2; // Rows affected by increased density
export const MILKY_WAY_DENSITY_MULTIPLIER: number = 1.35; // 35% more stars in band (subtle)
export const POLE_DENSITY_MULTIPLIER: number = 0.75; // 25% fewer stars at poles

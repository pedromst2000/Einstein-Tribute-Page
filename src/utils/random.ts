/**
 * Generates a deterministic pseudo-random number using a seeded approach
 * @param seed - The seed value to generate random number from
 * @returns A number between 0 and 1
 */
export const getSeededRandom = (seed: number): number => {
  const x: number = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

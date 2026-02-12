/**
 * Math utility functions
 */

/**
 * Clamp a value between min and max
 */
export const clamp = (
  value: number,
  min: number = 0,
  max: number = 100
): number => Math.min(Math.max(value, min), max);

/**
 * Round a number to specified decimal places
 */
export const round = (value: number, precision: number = 3): number =>
  parseFloat(value.toFixed(precision));

/**
 * Map a value from one range to another
 */
export const mapRange = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

/**
 * Ease in out cubic easing function
 */
export const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

/**
 * Linear interpolation
 */
export const lerp = (start: number, end: number, t: number): number =>
  start + (end - start) * clamp(t, 0, 1);

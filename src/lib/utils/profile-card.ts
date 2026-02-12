/**
 * ProfileCard utility functions and constants
 */

export const PROFILE_CARD_DEFAULTS = {
  NAME: 'Javi A. Torres',
  TITLE: 'Software Engineer',
  HANDLE: 'javicodes',
  STATUS: 'Online',
  CONTACT_TEXT: 'Contact',
} as const;

export const PROFILE_CARD_ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
} as const;

export const PROFILE_CARD_GRADIENTS = {
  DEFAULT_BEHIND:
    'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)',
  DEFAULT_INNER: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)',
} as const;

/**
 * Adjust value from one range to another
 */
export const adjustPointerValue = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number => {
  const normalized = (value - fromMin) / (fromMax - fromMin);
  return toMin + normalized * (toMax - toMin);
};

/**
 * Calculate pointer distance from center
 */
export const getPointerDistanceFromCenter = (
  percentX: number,
  percentY: number
): number => {
  const centerX = percentX - 50;
  const centerY = percentY - 50;
  return Math.hypot(centerY, centerX) / 50;
};

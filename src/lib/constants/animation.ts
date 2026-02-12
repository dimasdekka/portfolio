/**
 * Animation configuration constants
 */

export const ANIMATION = {
  BLUR_TEXT_DELAY: 150,
  FADE_IN_DELAY: 0.8,
  FADE_IN_DURATION: 1,
  SCROLL_VELOCITY: 100,
} as const;

export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
  VERY_SLOW: 1,
} as const;

export const ANIMATION_EASING = {
  IN_OUT: 'easeInOut',
  IN: 'easeIn',
  OUT: 'easeOut',
} as const;

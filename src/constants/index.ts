/**
 * Application constants
 */

/**
 * Animation configuration
 */
export const ANIMATION = {
  BLUR_TEXT_DELAY: 150,
  FADE_IN_DELAY: 0.8,
  FADE_IN_DURATION: 1,
  SCROLL_VELOCITY: 100,
} as const;

/**
 * Layout configuration
 */
export const LAYOUT = {
  HERO_PADDING_TOP: 20,
  THREADS_HEIGHT: 600,
  SCROLL_VELOCITY_MARGIN_TOP: 300,
  PROJECTS_MAX_WIDTH: 1400,
} as const;

/**
 * External URLs
 */
export const URLS = {
  LINKEDIN: 'https://www.linkedin.com/in/dimas-dekananta',
  GITHUB: 'https://github.com/dimasdekka',
} as const;

/**
 * Asset paths
 */
export const ASSETS = {
  GRAIN_TEXTURE: '/photos/texture/grain.webp',
  ICON_PATTERN: '/photos/texture/iconpattern.png',
  PROFILE_AVATAR: '/photos/profile/profilecard.svg',
  PROFILE_MINI_AVATAR: '/photos/profile/profilecard_2.svg',
} as const;

/**
 * User information
 */
export const USER_INFO = {
  NAME: 'Dimas Dekananta',
  HANDLE: 'unicodes',
  GITHUB_USERNAME: 'dimasdekka',
  TITLE_DESKTOP: 'Web Developer',
  TITLE_MOBILE: 'Software Engineer',
  ROLES: 'Web Developer|Mobile Developer|Solopreneur',
} as const;

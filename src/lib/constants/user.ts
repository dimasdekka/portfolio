/**
 * User information and metadata
 */

export const USER_INFO = {
  NAME: 'Dimas Dekananta',
  HANDLE: 'unicodes',
  GITHUB_USERNAME: 'dimasdekka',
  TITLE_DESKTOP: 'Web Developer',
  TITLE_MOBILE: 'Software Engineer',
  ROLES: 'Web Developer|Mobile Developer|Solopreneur',
} as const;

export const USER_CONTACT = {
  GITHUB: USER_INFO.GITHUB_USERNAME,
} as const;

/**
 * Reusable tech stack icon paths
 * Centralized to avoid duplication across projects
 */

export const TECH_ICONS = {
  REACT: '/techstack/react.svg',
  TAILWIND: '/techstack/tailwind.svg',
  EXPRESS: '/techstack/express.svg',
  NEXTJS: '/techstack/nextjs.svg',
  SHADCN: '/techstack/shadcn.svg',
} as const;

/**
 * Common tech stack combinations
 * Reusable stacks for projects
 */
export const TECH_STACKS = {
  REACT_TAILWIND_EXPRESS: [
    TECH_ICONS.REACT,
    TECH_ICONS.TAILWIND,
    TECH_ICONS.EXPRESS,
  ],
  REACT_TAILWIND: [TECH_ICONS.REACT, TECH_ICONS.TAILWIND],
  NEXTJS_TAILWIND_SHADCN: [
    TECH_ICONS.NEXTJS,
    TECH_ICONS.TAILWIND,
    TECH_ICONS.SHADCN,
  ],
};

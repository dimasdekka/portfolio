/**
 * App component constants and helper configurations
 * Centralized configuration for all page-level components
 */

import React from 'react';
import { VscHome, VscArchive, VscAccount } from 'react-icons/vsc';

// ============================================
// NAVIGATION & LAYOUT
// ============================================

export const NAV_ITEMS = [
  {
    icon: <VscHome size={18} />,
    label: 'Home',
    href: '/',
    onClick: () => {},
  },
  {
    icon: <VscArchive size={18} />,
    label: 'Archive',
    href: '/Archive',
    onClick: () => {},
  },
  {
    icon: <VscAccount size={18} />,
    label: 'Profile',
    href: '/Contact',
    onClick: () => {},
  },
] as const;

export const SOCIAL_LINKS = [
  {
    platform: 'GitHub',
    href: 'https://github.com/dimasdekka',
    iconPath: '/icons/github_icon.svg',
  },
  {
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dimas-dekananta/',
    iconPath: '/icons/linkedin_icon.svg',
  },
  {
    platform: 'Gmail',
    href: 'mailto:dekanantadimas@gmail.com',
    iconPath: '/icons/gmail_icon.svg',
  },
] as const;

// ============================================
// CURSOR STYLING
// ============================================

export const CURSOR_CONFIG = {
  DOT: {
    size: 8,
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.7)',
    glowSize: 10,
    glowSpread: 4,
  },
  OUTLINE: {
    size: 30,
    borderColor: '#0891b2',
    borderWidth: 2,
    opacity: 0.5,
  },
} as const;

// ============================================
// SPRING ANIMATIONS
// ============================================

export const SPRING_CONFIG = {
  DOT: {
    damping: 25,
    stiffness: 200,
  },
  OUTLINE: {
    damping: 35,
    stiffness: 400,
  },
} as const;

// ============================================
// SCROLL & LAYOUT CONFIG
// ============================================

export const LENIS_CONFIG = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
} as const;

export const DOCK_CONFIG = {
  panelHeight: 68,
  baseItemSize: 50,
  magnification: 90,
} as const;

// ============================================
// STYLING & LAYOUT CLASSES
// ============================================

export const RESPONSIVE = {
  HIDDEN_MOBILE: 'hidden md:block',
  HIDDEN_DESKTOP: 'md:hidden',
  OPACITY_MOBILE: 'opacity-10 md:hidden',
} as const;

export const SPACING = {
  HEADER_PADDING: 'px-4 py-2 md:px-8 md:py-3',
  SOCIAL_PADDING: 'p-2 md:p-4',
  SOCIAL_SPACE: 'space-y-7 md:space-y-5',
} as const;

export const ICON_SIZES = {
  SOCIAL: {
    width: 'w-5 sm:w-6 md:w-7',
    height: 'h-5 sm:h-6 md:h-7',
  },
} as const;

export const SOCIAL_CONTAINER = {
  backdrop: 'bg-black/60',
  border: 'border border-white/[.30] border-dashed',
  rounded: 'rounded-full',
} as const;

// ============================================
// Z-INDEX LAYERS
// ============================================

export const Z_INDEX = {
  HEADER: 50,
  MOBILE_MENU: 40,
  DOCK: 50,
  SOCIAL: 50,
  CURSOR_OUTLINE: 9998,
  CURSOR_DOT: 9999,
} as const;

// ============================================
// PAGE SECTION CONFIGS
// ============================================

export const TECH_STACK_CARDS = [
  {
    id: 'develop',
    title: 'DEVELOP',
    description:
      'Started creating Web Development using NextJS, React, and Tailwind and eventually switched to Mobile Development using React Native',
    skillsKey: 'dev',
  },
  {
    id: 'create',
    title: 'CREATE',
    description:
      'Aspiring content creator and junior developer, passionate about telling stories through both words and code. Currently learning and building as I go.',
    skillsKey: 'content',
  },
] as const;

export const SECTION_TITLES = {
  WHAT_I_DO: 'What I do',
  MY_JOURNEY: 'My Journey',
  MY_PROJECTS: 'My Projects',
} as const;

export const BLUR_TEXT_DEFAULTS = {
  DIRECTION: 'top' as const,
} as const;

export const PROFILE_CARD_CONFIG = {
  STATUS: 'Online',
  CONTACT_TEXT: 'Contact Me',
} as const;

export const THREADS_CONFIG = {
  AMPLITUDE: 2.5,
  DISTANCE: 0,
  ENABLE_MOUSE: false,
} as const;

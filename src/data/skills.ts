import type { Skill } from '@/types';

/**
 * Development skills
 */
export const devSkills: Skill[] = [
  { name: 'Next.js', category: 'development' },
  { name: 'Tailwind', category: 'development' },
  { name: 'React', category: 'development' },
  { name: 'Javascript', category: 'development' },
  { name: 'Node.js', category: 'development' },
  { name: 'Python', category: 'development' },
  { name: 'React Native', category: 'development' },
  { name: 'MongoDB', category: 'development' },
  { name: 'Express JS', category: 'development' },
  { name: 'MySQL', category: 'development' },
];

/**
 * Content creation skills
 */
export const contentSkills: Skill[] = [
  { name: 'Figma', category: 'design' },
  { name: 'Canva', category: 'design' },
  { name: 'Capcut', category: 'content' },
];

/**
 * All skills combined
 */
export const allSkills: Skill[] = [...devSkills, ...contentSkills];

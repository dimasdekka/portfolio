/**
 * Skill-related types
 */

export interface Skill {
  name: string;
  category: 'development' | 'content' | 'design' | 'other';
}

export interface SkillTagProps {
  skillName: string;
}

/**
 * Project data type definition
 */
export interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  techstack: string[];
  imageSrc: string;
  link: string;
}

/**
 * Skill data type definition
 */
export interface Skill {
  name: string;
  category: 'development' | 'content' | 'design' | 'other';
}

/**
 * Experience/Timeline entry type definition
 */
export interface Experience {
  id: number;
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies?: string[];
}

/**
 * Component prop types
 */
export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface SkillTagProps {
  skillName: string;
}

export interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  grainUrl: string;
  iconUrl: string;
  avatarUrl: string;
  miniAvatarUrl?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
}

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

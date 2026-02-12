/**
 * Project-related types
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

export interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Experience/Timeline-related types
 */

export interface Experience {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
  logo: string;
  technologies?: string[];
}

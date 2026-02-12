import type { Project } from '@/lib/types';
import { TECH_STACKS } from './techstack';

/**
 * Portfolio projects data
 * Add your projects here following the Project interface
 */
const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Campus Bridge',
    category: 'Mobile Development',
    description: 'Empowering Connections And Progress',
    techstack: TECH_STACKS.REACT_TAILWIND_EXPRESS,
    imageSrc: '/proj/projectOne.svg',
    link: 'https://github.com/dimasdekka/CampusBridge',
  },
  {
    id: 2,
    number: '02',
    title: 'Sistem Inventory',
    category: 'Web Development',
    description: 'Efficient Stock Management & Analytics System',
    techstack: TECH_STACKS.REACT_TAILWIND_EXPRESS,
    imageSrc: '/proj/sisteminventory.png',
    link: 'https://github.com/dimasdekka/Sistem-Inventory',
  },
  {
    id: 3,
    number: '03',
    title: 'OnePrint',
    category: 'Web Development',
    description: 'Self-Service Printing',
    techstack: TECH_STACKS.REACT_TAILWIND_EXPRESS,
    imageSrc: '/proj/oneprint.png',
    link: 'https://github.com/dimasdekka/OnePrint',
  },
  {
    id: 4,
    number: '04',
    title: 'Dalleys Cafe Voucher',
    category: 'Web Development',
    description: 'Ticket Management System',
    techstack: TECH_STACKS.REACT_TAILWIND,
    imageSrc: '/proj/projectThree.svg',
    link: 'https://github.com/dimasdekka/CafeDalleyVoucher',
  },
  {
    id: 5,
    number: '05',
    title: 'Unimovie',
    category: 'Web Development',
    description: 'Discover Your Next Favorite Movie',
    techstack: TECH_STACKS.NEXTJS_TAILWIND_SHADCN,
    imageSrc: '/proj/projectTwo.svg',
    link: 'https://github.com/dimasdekka/UniMovie-React-Movie-App',
  },
];

export default projects;

import type { Project } from '@/types';

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
    techstack: [
      '/techstack/react.svg',
      '/techstack/tailwind.svg',
      '/techstack/express.svg',
    ],
    imageSrc: '/proj/projectOne.svg',
    link: 'https://github.com/dimasdekka/CampusBridge',
  },
  {
    id: 2,
    number: '02',
    title: 'Unimovie',
    category: 'Web Development',
    description: 'Discover Your Next Favorite Movie',
    techstack: [
      '/techstack/nextjs.svg',
      '/techstack/tailwind.svg',
      '/techstack/shadcn.svg',
    ],
    imageSrc: '/proj/projectTwo.svg',
    link: 'https://github.com/dimasdekka/UniMovie-React-Movie-App',
  },
  {
    id: 3,
    number: '03',
    title: 'Dalleys Cafe Voucher',
    category: 'Web Development',
    description: 'Ticket Management System',
    techstack: ['/techstack/react.svg', '/techstack/tailwind.svg'],
    imageSrc: '/proj/projectThree.svg',
    link: 'https://github.com/dimasdekka/CafeDalleyVoucher',
  },
];

export default projects;

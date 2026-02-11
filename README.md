# Portfolio - Dimas Dekananta

A modern, interactive portfolio website built with Next.js, featuring 3D animations, smooth transitions, and a clean, professional design.

## ✨ Features

- **Interactive 3D Elements**: Physics-based lanyard component using Three.js and Rapier
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type-Safe**: Built with TypeScript for better code quality
- **Performance Optimized**: Next.js 15 with React 19
- **Clean Code**: Following enterprise-level coding standards

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Physics**: [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Code Quality**: ESLint, Prettier, Husky

## 📦 Installation

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dimasdekka/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Main homepage
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── blocks/           # Complex UI blocks
│   │   ├── Backgrounds/  # Background components
│   │   ├── Components/   # Feature components
│   │   └── TextAnimations/ # Text animation components
│   ├── components/       # Reusable components
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Lanyard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillTag.tsx
│   ├── data/            # Static data
│   │   ├── projects.ts  # Project information
│   │   └── skills.ts    # Skills data
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── constants/       # App constants
│   │   └── index.ts
│   └── fonts/           # Custom fonts
├── public/              # Static assets
│   ├── assets/          # 3D models, textures
│   ├── photos/          # Images
│   ├── proj/            # Project screenshots
│   └── techstack/       # Technology icons
├── .github/             # GitHub templates
│   ├── ISSUE_TEMPLATE/  # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── .husky/              # Git hooks
└── CONTRIBUTING.md      # Contribution guidelines
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 4,
  number: '04',
  title: 'Your Project',
  category: 'Web Development',
  description: 'Project description',
  techstack: ['/techstack/icon.svg'],
  imageSrc: '/proj/project.svg',
  link: 'https://github.com/username/repo',
}
```

### Adding Skills

Edit `src/data/skills.ts`:

```typescript
export const devSkills: Skill[] = [
  { name: 'Your Skill', category: 'development' },
  // ...
];
```

### Updating Personal Information

Edit `src/constants/index.ts`:

```typescript
export const USER_INFO = {
  NAME: 'Your Name',
  HANDLE: 'yourhandle',
  GITHUB_USERNAME: 'yourusername',
  // ...
} as const;
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Commit using conventional commits: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Quality

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for pre-commit hooks
- **TypeScript** for type safety

Pre-commit hooks will automatically run linting and type checking before each commit.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dimas Dekananta**
- GitHub: [@dimasdekka](https://github.com/dimasdekka)
- LinkedIn: [Dimas Dekananta](https://www.linkedin.com/in/dimas-dekananta)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- 3D lanyard component inspired by physics-based interactions
- Animation techniques from Framer Motion community

---

⭐ If you found this project helpful, please consider giving it a star!

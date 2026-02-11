# Contributing to Portfolio

Thank you for considering contributing to this portfolio project! This document outlines the guidelines and best practices for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Requirements](#testing-requirements)

## Code of Conduct

- Be respectful and professional in all interactions
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a new branch** for your feature or bugfix
4. **Make your changes** following the code style guidelines
5. **Test your changes** thoroughly
6. **Submit a pull request**

## Development Workflow

We follow **GitHub Flow** for our development workflow:

1. `main` branch is always deployable
2. Create feature branches from `main`
3. Work on your feature/bugfix
4. Open a Pull Request for review
5. After approval, merge to `main`

## Branch Naming Conventions

Use descriptive branch names that follow this pattern:

```
<type>/<short-description>
```

### Types:

- `feature/` - New features or enhancements
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent fixes for production
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### Examples:

```
feature/add-dark-mode
bugfix/fix-mobile-navigation
hotfix/critical-security-patch
docs/update-readme
refactor/optimize-animations
```

## Commit Message Guidelines

We use **Conventional Commits** format for clear and structured commit history.

### Format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semi-colons, etc.)
- `refactor` - Code refactoring without changing functionality
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks, dependency updates
- `ci` - CI/CD configuration changes

### Examples:

```bash
feat(projects): add new project card animation
fix(mobile): resolve navigation menu overflow issue
docs(readme): update installation instructions
refactor(components): extract hero section into separate component
perf(images): optimize image loading with lazy loading
```

### Rules:

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- First line should be 50 characters or less
- Reference issues and pull requests when applicable
- Add body for complex changes explaining the "why"

## Pull Request Process

1. **Update documentation** if you've made changes to APIs or functionality
2. **Ensure all tests pass** and the build succeeds
3. **Fill out the PR template** completely
4. **Request review** from maintainers
5. **Address review feedback** promptly
6. **Squash commits** if requested before merging

### PR Checklist:

- [ ] Code builds without errors (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] TypeScript compilation succeeds
- [ ] Tested on multiple browsers
- [ ] Tested responsive design
- [ ] No console errors or warnings
- [ ] Documentation updated (if applicable)
- [ ] Screenshots added for UI changes

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new files (`.tsx`, `.ts`)
- Define proper interfaces and types
- Avoid using `any` type
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Keep components small and focused (Single Responsibility Principle)
- Extract reusable logic into custom hooks
- Use proper prop types with TypeScript interfaces

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Use CSS variables for theme values

### File Organization

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── blocks/          # Complex UI blocks
├── data/            # Static data and content
├── types/           # TypeScript type definitions
├── constants/       # Constants and configuration
└── utils/           # Utility functions
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types/Interfaces**: PascalCase (e.g., `ProjectProps`)

## Testing Requirements

Before submitting a PR:

1. **Manual Testing**:
   - Test on Chrome, Firefox, and Safari
   - Test on mobile devices (or responsive mode)
   - Verify all animations work smoothly
   - Check for console errors

2. **Build Testing**:

   ```bash
   npm run build
   npm start
   ```

3. **Lint Testing**:
   ```bash
   npm run lint
   ```

## Questions?

If you have questions or need help, feel free to:

- Open an issue for discussion
- Reach out to the maintainers
- Check existing documentation

Thank you for contributing! 🚀

# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app entry points (`index.tsx`, `PortfolioManager.tsx`) and feature code.
- `src/components/` hosts UI building blocks like `Header.tsx`, `ProjectCard.tsx`, and `ProjectModal.tsx`.
- `src/config/portfolio.json` stores portfolio content and theme data consumed by the UI.
- `src/styles/` contains global styles (`theme.css`) and component styles under `styles/components/`.
- `src/types/` holds shared TypeScript types (for example `portfolio.ts`).
- `public/` contains static assets and the HTML template.
- Tests live alongside sources (for example `src/App.test.tsx`).

## Build, Test, and Development Commands
- `npm start`: Run the app in dev mode with hot reload at `http://localhost:3000`.
- `npm run build`: Create a production build in `build/`.
- `npm test`: Run the Jest test runner (watch mode by default).
- `npm run eject`: One-way export of CRA config (avoid unless you must customize tooling).

## Coding Style & Naming Conventions
- TypeScript + React (Create React App). Keep 4-space indentation, double quotes, and semicolons, matching existing files in `src/`.
- Component files use `PascalCase` (for example `ProjectModal.tsx`).
- CSS files mirror component names (`ProjectModal.css`).
- Favor named props/types from `src/types/` to keep config-driven UI consistent.
- Linting uses CRA’s ESLint config (`react-app`, `react-app/jest`).

## Testing Guidelines
- Frameworks: Jest + React Testing Library (`@testing-library/*`).
- Test files follow `*.test.tsx` naming; place unit tests near the relevant component.
- Run `npm test` before opening a PR. Add tests when changing UI behavior or config parsing.

## Commit & Pull Request Guidelines
- Git history shows short, imperative subjects (for example `Initialize project using Create React App`). Keep commits concise and action-oriented.
- PRs should include a clear description, test notes (command + result), and screenshots or a short screen recording for UI changes.

## Configuration Notes
- Update `src/config/portfolio.json` for content or theme changes; keep types in sync with `src/types/portfolio.ts`.

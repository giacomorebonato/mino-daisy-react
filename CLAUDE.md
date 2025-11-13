# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project wraps [DaisyUI](https://daisyui.com/) components into React components. The library is built with Vite and published to NPM for easy reuse.

## Tech Stack

- **TypeScript**: Strict mode enabled for type safety
- **React 19**: Peer dependency (consumers must provide)
- **Vite**: Library build tool with dual ESM/CJS output
- **Tailwind CSS + DaisyUI**: Peer dependencies for styling
- **Storybook**: Component development and documentation
- **Vitest + React Testing Library**: Testing framework
- **clsx**: Utility for conditional class names

## Package Manager

This project uses **pnpm@10.15.1** (specified in package.json). Always use `pnpm` commands, not npm or yarn.

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (Vite dev mode)
pnpm dev

# Build library for NPM
pnpm build

# Preview build output
pnpm preview

# Run tests (watch mode)
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage

# Run Storybook (component development)
pnpm storybook

# Build Storybook for deployment
pnpm build-storybook
```

## Project Structure

```
src/
├── components/          # All React components
│   ├── Button/         # Example component structure
│   │   ├── Button.tsx        # Component implementation
│   │   ├── Button.test.tsx   # Unit tests
│   │   ├── Button.stories.tsx # Storybook stories
│   │   └── index.ts          # Exports
│   └── index.ts        # Barrel exports for all components
├── styles/
│   └── index.css       # Tailwind CSS imports
└── index.ts            # Main library entry point
```

## Architecture Guidelines

### Component Development Pattern

Each DaisyUI component wrapper should follow this pattern:

1. **Component File** (`ComponentName.tsx`):
   - Use TypeScript with proper prop types extending HTML element types
   - Do not use deprecated `forwardRef` for ref forwarding. Use React 19 ref property
   - Accept all DaisyUI variants and modifiers as props
   - Use `clsx` to conditionally apply DaisyUI classes
   - Spread remaining props to underlying element
   - Set `displayName` for better debugging

2. **Test File** (`ComponentName.test.tsx`):
   - Test prop-to-class mappings
   - Test disabled/loading states
   - Test custom className merging
   - Test accessibility

3. **Stories File** (`ComponentName.stories.tsx`):
   - Show all variants and sizes
   - Include interactive controls
   - Document common use cases

4. **Exports** (`index.ts`):
   - Export component and types from component folder
   - Re-export from `components/index.ts`

### Library Build

- **Output formats**: ESM (`.mjs`) and CommonJS (`.cjs`)
- **Type declarations**: Generated automatically by TypeScript
- **Externalized**: React, react-dom, and react/jsx-runtime are peer dependencies
- **Entry point**: `src/index.ts`

### Peer Dependencies

Consumers of this library must have:

- `react` >= 19.0.0
- `react-dom` >= 19.0.0
- `tailwindcss` >= 4.0.0
- `daisyui` >= 5.0.0

Consumers must configure Tailwind CSS in their project and include this library's components in their Tailwind content paths.

### Testing

- Unit tests use Vitest with jsdom environment
- Component tests use React Testing Library
- Storybook stories can also be tested with @storybook/addon-vitest
- Run `pnpm test` for watch mode during development

### Storybook Configuration

The Storybook configuration includes a `viteFinal` hook that explicitly sets `process.env.NODE_ENV` to 'development'. This prevents React from running in production mode during development, which would otherwise cause dead code elimination warnings.

### Code Conventions

- Write only files in lowercase kebab-case (e.g., `button.tsx`, not `Button.tsx`)
- Always read updated DaisyUI doc on https://daisyui.com/llms.txt
- Always update README.md when new components are added
- Each time you make changes or create code. Run `pnpm format` to ensure that you're following the rules.
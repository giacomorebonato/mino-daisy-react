# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project wraps [DaisyUI](https://daisyui.com/) components into React components. The library is built with Vite and published to NPM for easy reuse.

## Tech Stack

- **TypeScript**: Strict mode enabled for type safety
- **React 19**: Peer dependency (consumers must provide)
- **Bunit**: Library build tool with dual ESM/CJS output
- **Tailwind CSS + DaisyUI**: Peer dependencies for styling
- **Storybook**: Component development and documentation
- **Bun Test + React Testing Library**: Testing framework
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

Each DaisyUI component wrapper should follow this **minimal wrapper pattern**:

#### Core Principles

1. **No convenience props** - Users apply DaisyUI classes via `className`
2. **Minimal abstraction** - Components only add base DaisyUI class and ref forwarding
3. **Keep essential props** - Only props that control behavior or set required attributes
4. **React 19 refs** - Use ref as a prop, not `forwardRef`

#### Component Structure

**Component File** (`component-name.tsx`):
```tsx
import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface ComponentProps extends HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>
  // Only add essential behavioral props here (e.g., open, disabled, tip)
}

export function Component({ className, ref, ...props }: ComponentProps) {
  return <element ref={ref} className={clsx('base-class', className)} {...props} />
}

Component.displayName = 'Component'
```

**Essential Props to Keep:**
- **Behavioral props**: `open`, `disabled`, `checked`, `checkbox`
- **Required attributes**: `tip` (for Tooltip data-tip), `dataContent` (for Steps)
- **Structural props**: `trigger`, `content` (for Dropdown)
- **Standard HTML**: All native HTML attributes (value, onChange, type, href, etc.)

**Props to NEVER Add:**
- ❌ `variant` - Use `className="component-primary"`
- ❌ `size` - Use `className="component-lg"`
- ❌ `ghost`, `outline`, `bordered` - Use `className="component-ghost"`
- ❌ Layout props (`vertical`, `horizontal`, `start`, `end`) - Use className
- ❌ Any prop that just maps to a className

**Examples:**

```tsx
// ✅ CORRECT - Minimal wrapper
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({ className, ref, ...props }: ButtonProps) {
  return <button ref={ref} className={clsx('btn', className)} {...props} />
}

// ✅ CORRECT - With essential behavioral prop
export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open?: boolean  // Essential: controls modal visibility
  ref?: React.Ref<HTMLDialogElement>
}

export function Modal({ className, open, ref, ...props }: ModalProps) {
  const classes = clsx('modal', { 'modal-open': open }, className)
  return <dialog ref={ref} open={open} className={classes} {...props} />
}

// ❌ WRONG - Convenience props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'  // ❌ Don't do this
  size?: 'sm' | 'lg'  // ❌ Don't do this
  ref?: React.Ref<HTMLButtonElement>
}
```

#### Test Files

**Test File** (`component-name.test.tsx`):
- Test that base class is applied
- Test className merging
- Test essential behavioral props (if any)
- Test HTML attributes are passed through
- Test accessibility
- Use className in tests, not convenience props

```tsx
// ✅ CORRECT
it('applies variant classes', () => {
  render(<Button className="btn-primary btn-lg">Click</Button>)
  expect(button).toHaveClass('btn-primary')
  expect(button).toHaveClass('btn-lg')
})

// ❌ WRONG
it('applies variant classes', () => {
  render(<Button variant="primary" size="lg">Click</Button>)  // ❌ No variant prop
  // ...
})
```

#### Story Files

**Stories File** (`component-name.stories.tsx`):
- Show all DaisyUI variants using className
- Include interactive controls for className combinations
- Document common use cases
- Reference DaisyUI documentation

#### Exports

**Component index** (`component-name/index.ts`):
- Export component and props interface only
- Do NOT export type unions (variant types, size types, etc.)

```tsx
// ✅ CORRECT
export type { ButtonProps } from './button'
export { Button } from './button'

// ❌ WRONG
export type { ButtonProps, ButtonVariant, ButtonSize } from './button'  // ❌ No type unions
```

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

- Unit tests use Bun test with HappyDom environment
- Component tests use React Testing Library
- Run `pnpm test` for watch mode during development

### Storybook Configuration

The Storybook configuration includes a `viteFinal` hook that explicitly sets `process.env.NODE_ENV` to 'development'. This prevents React from running in production mode during development, which would otherwise cause dead code elimination warnings.

### Code Conventions

- Write only files in lowercase kebab-case (e.g., `button.tsx`, not `Button.tsx`)
- Always read updated DaisyUI doc on https://daisyui.com/llms.txt
- Always update README.md when new components are added
- Each time you make changes or create code. Run `pnpm format` to ensure that you're following the rules.

### Component Usage Pattern

Components in this library are **minimal wrappers** - they ONLY provide:
1. Base DaisyUI class (e.g., `btn`, `input`, `card`)
2. Ref forwarding
3. Essential behavioral props (very few, like `open` for Modal)

**All styling via className:**
```tsx
// ✅ CORRECT Usage
<Button className="btn-primary btn-lg">Click</Button>
<Input className="input-bordered input-error" />
<Modal open={isOpen} className="modal-bottom">
  <div className="modal-box">Content</div>
</Modal>

// ❌ WRONG Usage (these props don't exist)
<Button variant="primary" size="lg">Click</Button>
<Input variant="error" bordered />
<Modal open={isOpen} placement="bottom">Content</Modal>
```

**Why this pattern?**
- Direct access to all DaisyUI classes without abstraction
- Smaller bundle size (no prop-to-class mapping logic)
- Better alignment with DaisyUI's utility-first approach
- Type-safe HTML attributes
- Easier to maintain and extend
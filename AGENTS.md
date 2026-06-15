# Agent Guide for `mino-daisy-react`

Use this guide when editing, adding components, or maintaining this library.

## Project identity

`mino-daisy-react` is a React component library that wraps DaisyUI's CSS classes into small, reusable React components. It also ships a few extra components that are not directly from DaisyUI but are useful for common UI patterns (e.g. `SubmitButton`, `PwdInput`, `RichTextEditor`, `Calendar`, `BottomSheet`).

- Published to NPM.
- Built with Bun + Vite.
- React 19 peer dependency.
- TypeScript in strict mode.
- Styles come from the consumer's Tailwind CSS + DaisyUI setup, not from this package.

## Tech stack

| Concern | Tool |
|---|---|
| Language | TypeScript (strict) |
| Runtime / build | Bun + `build.ts` (Vite-style bundling) |
| UI library target | DaisyUI 5 + Tailwind CSS 4 |
| Component dev | Storybook 10 + Vite |
| Tests | Bun test + React Testing Library + HappyDom |
| Class names | `clsx` for conditional/merged classes |
| Format/lint | Biome |
| Releases | `release-it` |

## Project scripts

Run all commands with `bun`:

```bash
bun install
bun run build            # Build library to dist/
bun run dev              # Watch build
bun run test             # Run tests
bun run storybook        # Component dev server on :6006
bun run build-storybook  # Static Storybook
bun run format           # Biome check --write
bun run release          # release-it
```

## Architecture: minimal wrapper pattern

Components should be **thin wrappers** around DaisyUI classes.

### Keep

- The base DaisyUI class (`btn`, `input`, `card`, etc.).
- `ref` forwarding as a prop (React 19 style, no `forwardRef`).
- Essential behavioral props: `open`, `disabled`, `checked`, `checkbox`, `tip`, `dataContent`, etc.
- All native HTML attributes via spread.

### Avoid

- Convenience props that map to class names: `variant`, `size`, `ghost`, `outline`, `bordered`, `primary`, `vertical`, etc.
- Extra abstraction. Users style with `className` directly.

### Example

```tsx
// ✅ Correct
import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({ className, ref, ...props }: ButtonProps) {
  return <button ref={ref} className={clsx('btn', className)} {...props} />
}
```

## Component file structure

Each component lives in its own lowercase-kebab directory under `src/`:

```
src/button/
  button.tsx          # Implementation
  button.test.tsx     # Tests
  button.stories.tsx  # Storybook stories
  index.ts            # Public exports
```

Export convention:

```ts
// index.ts
export type { ButtonProps } from './button'
export { Button } from './button'
```

Do not export type unions such as `ButtonVariant` or `ButtonSize`.

## Extra / reusable components

Beyond DaisyUI wrappers, this library includes opinionated components built from the same primitives. When editing them, keep the same minimal style but add behavior as needed.

| Component | Location | Purpose |
|---|---|---|
| `SubmitButton` | `src/submit-button` | `Button` with loading spinner (`isLoading`) and `type="submit"` |
| `PwdInput` | `src/pwd-input` | Password input with show/hide toggle |
| `Calendar` | `src/calendar` | Date picker wrapper around `react-day-picker` |
| `RichTextEditor` | `src/rich-text-editor` | Lexical-based rich text editor with toolbar |
| `BottomSheet` | `src/bottom-sheet` | Mobile-style bottom sheet overlay |
| `FormControl` | `src/form-control` | Layout helper for labels/hints/legends |

## DaisyUI skill

This repo includes the official DaisyUI agent skill under `.agents/skills/daisyui/`. Agents should reference it when generating or modifying DaisyUI code. Before adding a new component or changing markup, read the relevant component doc in `.agents/skills/daisyui/components/`.

## Testing guidelines

- Use React Testing Library.
- Test base class application.
- Test `className` merging with DaisyUI modifier classes.
- Test behavioral props (`open`, `disabled`, `isLoading`, etc.).
- Test native HTML attributes pass through.
- Test accessibility where relevant.

Example:

```tsx
it('applies variant classes', () => {
  render(<Button className="btn-primary btn-lg">Click</Button>)
  expect(screen.getByRole('button')).toHaveClass('btn btn-primary btn-lg')
})
```

## Storybook guidelines

Stories should demonstrate DaisyUI variants using `className`, not fake props. Include interactive controls for common class combinations and reference DaisyUI docs.

## Build & publishing

- Output goes to `dist/`.
- ESM only (main: `./dist/index.js`, types: `./dist/index.d.ts`).
- React, `react-dom`, and JSX runtimes are externalized.
- The `files` array in `package.json` only ships `dist`.
- Use `bun run release` for versioning and publishing.

## Peer dependencies

Consumers must install:

- `react` >= 19.0.0
- `react-dom` >= 19.0.0
- `tailwindcss` >= 4.0.0
- `daisyui` >= 5.0.0
- `lucide-react` ^0.563.0

## Do's and don'ts

- ✅ Style via `className="btn-primary btn-lg"`
- ✅ Spread remaining props to the underlying element
- ✅ Use `clsx` for class merging
- ✅ Write tests and stories for every new component
- ✅ Run `bun run format` after code changes
- ✅ Read `.agents/skills/daisyui/` before using DaisyUI classes
- ❌ Add `variant`, `size`, `color`, or similar convenience props
- ❌ Export variant/size type unions from component indexes
- ❌ Write custom CSS inside the library
- ❌ Import DaisyUI/Tailwind CSS into the package bundle

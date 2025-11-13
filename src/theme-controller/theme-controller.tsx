import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export type ThemeControllerVariant = 'checkbox' | 'toggle' | 'swap'

export interface ThemeControllerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme: string
  variant?: ThemeControllerVariant
  ref?: React.Ref<HTMLInputElement>
}

export function ThemeController({
  className,
  theme,
  variant = 'checkbox',
  ref,
  ...props
}: ThemeControllerProps) {
  const classes = clsx(
    'theme-controller',
    {
      checkbox: variant === 'checkbox',
      toggle: variant === 'toggle',
      swap: variant === 'swap',
    },
    className,
  )

  return <input ref={ref} type="checkbox" className={classes} value={theme} {...props} />
}

ThemeController.displayName = 'ThemeController'

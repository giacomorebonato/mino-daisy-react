import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export type ThemeControllerStyle = 'checkbox' | 'toggle' | 'swap'

export interface ThemeControllerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme: string
  style?: ThemeControllerStyle
}

export const ThemeController = forwardRef<HTMLInputElement, ThemeControllerProps>(
  ({ className, theme, style = 'checkbox', ...props }, ref) => {
    const classes = clsx(
      'theme-controller',
      {
        checkbox: style === 'checkbox',
        toggle: style === 'toggle',
        swap: style === 'swap',
      },
      className,
    )

    return <input ref={ref} type="checkbox" className={classes} value={theme} {...props} />
  },
)

ThemeController.displayName = 'ThemeController'

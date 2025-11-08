import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => {
    const classes = clsx(
      'toggle',
      {
        [`toggle-${variant}`]: variant,
        [`toggle-${size}`]: size,
      },
      className,
    )

    return <input ref={ref} type="checkbox" className={classes} {...props} />
  },
)

Toggle.displayName = 'Toggle'

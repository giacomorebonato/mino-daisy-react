import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, ...props }, ref) => {
    const classes = clsx(
      'checkbox',
      {
        [`checkbox-${variant}`]: variant,
        [`checkbox-${size}`]: size,
      },
      className,
    )

    return <input ref={ref} type="checkbox" className={classes} {...props} />
  },
)

Checkbox.displayName = 'Checkbox'

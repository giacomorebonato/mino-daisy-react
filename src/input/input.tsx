import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
  ghost?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ghost, ...props }, ref) => {
    const classes = clsx(
      'input',
      {
        [`input-${variant}`]: variant,
        [`input-${size}`]: size,
        'input-ghost': ghost,
      },
      className,
    )

    return <input ref={ref} className={classes} {...props} />
  },
)

Input.displayName = 'Input'

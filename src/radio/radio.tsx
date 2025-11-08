import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, variant, size, ...props }, ref) => {
    const classes = clsx(
      'radio',
      {
        [`radio-${variant}`]: variant,
        [`radio-${size}`]: size,
      },
      className,
    )

    return <input ref={ref} type="radio" className={classes} {...props} />
  },
)

Radio.displayName = 'Radio'

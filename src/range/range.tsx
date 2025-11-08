import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface RangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ className, variant, size, min = 0, max = 100, ...props }, ref) => {
    const classes = clsx(
      'range',
      {
        [`range-${variant}`]: variant,
        [`range-${size}`]: size,
      },
      className,
    )

    return <input ref={ref} type="range" min={min} max={max} className={classes} {...props} />
  },
)

Range.displayName = 'Range'

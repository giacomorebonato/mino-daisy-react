import { clsx } from 'clsx'
import type { SelectHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, variant, size, ghost, ...props }, ref) => {
    const classes = clsx(
      'select',
      {
        [`select-${variant}`]: variant,
        [`select-${size}`]: size,
        'select-ghost': ghost,
      },
      className,
    )

    return (
      <select ref={ref} className={classes} {...props}>
        {children}
      </select>
    )
  },
)

Select.displayName = 'Select'

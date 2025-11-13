import { clsx } from 'clsx'
import type { SelectHTMLAttributes } from 'react'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
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
  ref?: React.Ref<HTMLSelectElement>
}

export function Select({ children, className, variant, size, ghost, ref, ...props }: SelectProps) {
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
}

Select.displayName = 'Select'

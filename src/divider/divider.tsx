import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  vertical?: boolean
  horizontal?: boolean
  start?: boolean
  end?: boolean
}

export function Divider({
  children,
  className,
  variant,
  vertical,
  horizontal,
  start,
  end,
  ...props
}: DividerProps) {
  const classes = clsx(
    'divider',
    {
      'divider-neutral': variant === 'neutral',
      'divider-primary': variant === 'primary',
      'divider-secondary': variant === 'secondary',
      'divider-accent': variant === 'accent',
      'divider-info': variant === 'info',
      'divider-success': variant === 'success',
      'divider-warning': variant === 'warning',
      'divider-error': variant === 'error',
      'divider-vertical': vertical,
      'divider-horizontal': horizontal,
      'divider-start': start,
      'divider-end': end,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

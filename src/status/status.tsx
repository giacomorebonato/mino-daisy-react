import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export type StatusVariant =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type StatusSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: StatusVariant
  size?: StatusSize
}

export function Status({ className, variant, size, ...props }: StatusProps) {
  const classes = clsx(
    'status',
    {
      'status-neutral': variant === 'neutral',
      'status-primary': variant === 'primary',
      'status-secondary': variant === 'secondary',
      'status-accent': variant === 'accent',
      'status-info': variant === 'info',
      'status-success': variant === 'success',
      'status-warning': variant === 'warning',
      'status-error': variant === 'error',
      'status-xs': size === 'xs',
      'status-sm': size === 'sm',
      'status-md': size === 'md',
      'status-lg': size === 'lg',
      'status-xl': size === 'xl',
    },
    className,
  )

  return <span className={classes} {...props} />
}

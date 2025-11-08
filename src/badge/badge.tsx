import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  outline?: boolean
}

export function Badge({ children, className, variant, size, outline, ...props }: BadgeProps) {
  const classes = clsx(
    'badge',
    {
      [`badge-${variant}`]: variant,
      [`badge-${size}`]: size,
      'badge-outline': outline,
    },
    className,
  )
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'

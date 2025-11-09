import { clsx } from 'clsx'
import type { AnchorHTMLAttributes } from 'react'

export type LinkVariant =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
  hover?: boolean
}

export function Link({ children, className, variant, hover, ...props }: LinkProps) {
  const classes = clsx(
    'link',
    {
      'link-neutral': variant === 'neutral',
      'link-primary': variant === 'primary',
      'link-secondary': variant === 'secondary',
      'link-accent': variant === 'accent',
      'link-success': variant === 'success',
      'link-info': variant === 'info',
      'link-warning': variant === 'warning',
      'link-error': variant === 'error',
      'link-hover': hover,
    },
    className,
  )

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

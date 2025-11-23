import { clsx } from 'clsx'
import type { AnchorHTMLAttributes } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <a className={clsx('link', className)} {...props}>
      {children}
    </a>
  )
}

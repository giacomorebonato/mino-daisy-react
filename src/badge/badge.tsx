import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span className={clsx('badge', className)} {...props}>
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'

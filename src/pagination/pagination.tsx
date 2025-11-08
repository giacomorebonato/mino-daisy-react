import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Pagination({ children, className, ...props }: PaginationProps) {
  const classes = clsx('join', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Pagination.displayName = 'Pagination'

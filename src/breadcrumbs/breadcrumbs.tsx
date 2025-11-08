import { type HTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Breadcrumbs({
  children,
  className,
  ...props
}: BreadcrumbsProps) {
  const classes = clsx('breadcrumbs', className)
  return (
    <div className={classes} {...props}>
      <ul>{children}</ul>
    </div>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'

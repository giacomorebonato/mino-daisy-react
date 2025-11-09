import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface DiffProps extends HTMLAttributes<HTMLDivElement> {}

export interface DiffItemProps extends HTMLAttributes<HTMLDivElement> {
  item: 1 | 2
}

export interface DiffResizerProps extends HTMLAttributes<HTMLDivElement> {}

export function Diff({ children, className, ...props }: DiffProps) {
  const classes = clsx('diff', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function DiffItem({ children, className, item, ...props }: DiffItemProps) {
  const classes = clsx(`diff-item-${item}`, className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function DiffResizer({ className, ...props }: DiffResizerProps) {
  const classes = clsx('diff-resizer', className)

  return <div className={classes} {...props} />
}

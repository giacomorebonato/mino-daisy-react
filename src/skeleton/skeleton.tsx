import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  const classes = clsx('skeleton', className)

  return <div className={classes} {...props} />
}

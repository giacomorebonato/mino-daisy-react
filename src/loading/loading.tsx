import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface LoadingProps extends HTMLAttributes<HTMLSpanElement> {}

export function Loading({ className, ...props }: LoadingProps) {
  return <span className={clsx('loading', className)} {...props} />
}

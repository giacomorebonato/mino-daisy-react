import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {}

export function Toast({ children, className, ...props }: ToastProps) {
  return (
    <div className={clsx('toast', className)} {...props}>
      {children}
    </div>
  )
}

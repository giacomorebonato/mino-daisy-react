import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {}

export function Alert({ children, className, ...props }: AlertProps) {
  return (
    <div role="alert" className={clsx('alert', className)} {...props}>
      {children}
    </div>
  )
}

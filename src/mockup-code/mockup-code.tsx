import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface MockupCodeProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupCode({ children, className, ...props }: MockupCodeProps) {
  const classes = clsx('mockup-code', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface MockupWindowProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupWindow({ children, className, ...props }: MockupWindowProps) {
  const classes = clsx('mockup-window', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

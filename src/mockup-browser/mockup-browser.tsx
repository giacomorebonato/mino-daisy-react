import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface MockupBrowserProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupBrowser({ children, className, ...props }: MockupBrowserProps) {
  const classes = clsx('mockup-browser', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export interface MockupBrowserToolbarProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupBrowserToolbar({ children, className, ...props }: MockupBrowserToolbarProps) {
  const classes = clsx('mockup-browser-toolbar', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

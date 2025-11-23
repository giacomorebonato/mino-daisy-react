import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface KbdProps extends HTMLAttributes<HTMLElement> {}

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd className={clsx('kbd', className)} {...props}>
      {children}
    </kbd>
  )
}

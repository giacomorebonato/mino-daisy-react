import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

export function Divider({ children, className, ...props }: DividerProps) {
  return (
    <div className={clsx('divider', className)} {...props}>
      {children}
    </div>
  )
}

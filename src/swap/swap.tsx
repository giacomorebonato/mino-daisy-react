import { clsx } from 'clsx'
import type { HTMLAttributes, LabelHTMLAttributes } from 'react'

export interface SwapProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export interface SwapOnProps extends HTMLAttributes<HTMLDivElement> {}

export interface SwapOffProps extends HTMLAttributes<HTMLDivElement> {}

export interface SwapIndeterminateProps extends HTMLAttributes<HTMLDivElement> {}

export function Swap({ children, className, ...props }: SwapProps) {
  return (
    <label className={clsx('swap', className)} {...props}>
      {children}
    </label>
  )
}

export function SwapOn({ children, className, ...props }: SwapOnProps) {
  return (
    <div className={clsx('swap-on', className)} {...props}>
      {children}
    </div>
  )
}

export function SwapOff({ children, className, ...props }: SwapOffProps) {
  return (
    <div className={clsx('swap-off', className)} {...props}>
      {children}
    </div>
  )
}

export function SwapIndeterminate({ children, className, ...props }: SwapIndeterminateProps) {
  return (
    <div className={clsx('swap-indeterminate', className)} {...props}>
      {children}
    </div>
  )
}

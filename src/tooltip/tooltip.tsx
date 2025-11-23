import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  tip?: string
}

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {}

export function Tooltip({ children, className, tip, ...props }: TooltipProps) {
  return (
    <div className={clsx('tooltip', className)} data-tip={tip} {...props}>
      {children}
    </div>
  )
}

export function TooltipContent({ children, className, ...props }: TooltipContentProps) {
  return (
    <div className={clsx('tooltip-content', className)} {...props}>
      {children}
    </div>
  )
}

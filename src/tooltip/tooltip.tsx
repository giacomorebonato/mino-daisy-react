import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  tip?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  open?: boolean
}

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {}

export function Tooltip({
  children,
  className,
  tip,
  position,
  variant,
  open,
  ...props
}: TooltipProps) {
  const classes = clsx(
    'tooltip',
    {
      [`tooltip-${position}`]: position,
      [`tooltip-${variant}`]: variant,
      'tooltip-open': open,
    },
    className,
  )

  return (
    <div className={classes} data-tip={tip} {...props}>
      {children}
    </div>
  )
}

export function TooltipContent({ children, className, ...props }: TooltipContentProps) {
  const classes = clsx('tooltip-content', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

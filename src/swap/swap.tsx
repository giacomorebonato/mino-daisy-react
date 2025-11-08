import { clsx } from 'clsx'
import type { HTMLAttributes, LabelHTMLAttributes } from 'react'

export interface SwapProps extends LabelHTMLAttributes<HTMLLabelElement> {
  active?: boolean
  rotate?: boolean
  flip?: boolean
}

export interface SwapOnProps extends HTMLAttributes<HTMLDivElement> {}

export interface SwapOffProps extends HTMLAttributes<HTMLDivElement> {}

export interface SwapIndeterminateProps extends HTMLAttributes<HTMLDivElement> {}

export function Swap({ children, className, active, rotate, flip, ...props }: SwapProps) {
  const classes = clsx(
    'swap',
    {
      'swap-active': active,
      'swap-rotate': rotate,
      'swap-flip': flip,
    },
    className,
  )

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  )
}

export function SwapOn({ children, className, ...props }: SwapOnProps) {
  const classes = clsx('swap-on', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function SwapOff({ children, className, ...props }: SwapOffProps) {
  const classes = clsx('swap-off', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function SwapIndeterminate({ children, className, ...props }: SwapIndeterminateProps) {
  const classes = clsx('swap-indeterminate', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

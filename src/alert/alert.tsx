import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error'
  alertStyle?: 'outline' | 'dash' | 'soft'
  direction?: 'vertical' | 'horizontal'
}

export function Alert({
  children,
  className,
  variant,
  alertStyle,
  direction,
  ...props
}: AlertProps) {
  const classes = clsx(
    'alert',
    {
      [`alert-${variant}`]: variant,
      [`alert-${alertStyle}`]: alertStyle,
      [`alert-${direction}`]: direction,
    },
    className,
  )

  return (
    <div role="alert" className={classes} {...props}>
      {children}
    </div>
  )
}

import { clsx } from 'clsx'
import type { LabelHTMLAttributes, ReactNode } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  floating?: boolean
}

export function Label({ children, className, floating, ...props }: LabelProps) {
  const classes = clsx(
    {
      label: !floating,
      'floating-label': floating,
    },
    className,
  )

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  )
}

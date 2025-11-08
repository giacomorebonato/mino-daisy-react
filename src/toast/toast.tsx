import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  horizontal?: 'start' | 'center' | 'end'
  vertical?: 'top' | 'middle' | 'bottom'
}

export function Toast({ children, className, horizontal, vertical, ...props }: ToastProps) {
  const classes = clsx(
    'toast',
    {
      [`toast-${horizontal}`]: horizontal,
      [`toast-${vertical}`]: vertical,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

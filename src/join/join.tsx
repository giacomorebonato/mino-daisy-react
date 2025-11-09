import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export type JoinOrientation = 'horizontal' | 'vertical'

export interface JoinProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: JoinOrientation
}

export function Join({ children, className, orientation, ...props }: JoinProps) {
  const classes = clsx(
    'join',
    {
      'join-horizontal': orientation === 'horizontal',
      'join-vertical': orientation === 'vertical',
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

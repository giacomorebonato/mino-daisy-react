import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  top?: boolean
  bottom?: boolean
  start?: boolean
  end?: boolean
}

export function Stack({ children, className, top, bottom, start, end, ...props }: StackProps) {
  const classes = clsx(
    'stack',
    {
      'stack-top': top,
      'stack-bottom': bottom,
      'stack-start': start,
      'stack-end': end,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {}

export interface IndicatorItemProps extends HTMLAttributes<HTMLSpanElement> {
  horizontal?: 'start' | 'center' | 'end'
  vertical?: 'top' | 'middle' | 'bottom'
}

export function Indicator({ children, className, ...props }: IndicatorProps) {
  const classes = clsx('indicator', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function IndicatorItem({
  children,
  className,
  horizontal,
  vertical,
  ...props
}: IndicatorItemProps) {
  const classes = clsx(
    'indicator-item',
    {
      'indicator-start': horizontal === 'start',
      'indicator-center': horizontal === 'center',
      'indicator-end': horizontal === 'end',
      'indicator-top': vertical === 'top',
      'indicator-middle': vertical === 'middle',
      'indicator-bottom': vertical === 'bottom',
    },
    className,
  )

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

import { type HTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface StatsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  vertical?: boolean
  horizontal?: boolean
}

export function Stats({
  children,
  className,
  vertical,
  horizontal,
  ...props
}: StatsProps) {
  const classes = clsx(
    'stats',
    {
      'stats-vertical': vertical,
      'stats-horizontal': horizontal,
    },
    className,
  )
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Stats.displayName = 'Stats'

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Stat({ children, className, ...props }: StatProps) {
  const classes = clsx('stat', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Stat.displayName = 'Stat'

export interface StatTitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function StatTitle({ children, className, ...props }: StatTitleProps) {
  const classes = clsx('stat-title', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

StatTitle.displayName = 'StatTitle'

export interface StatValueProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function StatValue({ children, className, ...props }: StatValueProps) {
  const classes = clsx('stat-value', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

StatValue.displayName = 'StatValue'

export interface StatDescProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function StatDesc({ children, className, ...props }: StatDescProps) {
  const classes = clsx('stat-desc', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

StatDesc.displayName = 'StatDesc'

export interface StatFigureProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function StatFigure({ children, className, ...props }: StatFigureProps) {
  const classes = clsx('stat-figure', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

StatFigure.displayName = 'StatFigure'

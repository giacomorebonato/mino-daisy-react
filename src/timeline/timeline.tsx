import { type HTMLAttributes, type LiHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  vertical?: boolean
  horizontal?: boolean
  snap?: boolean
  compact?: boolean
}

export function Timeline({
  children,
  className,
  vertical,
  horizontal,
  snap,
  compact,
  ...props
}: TimelineProps) {
  const classes = clsx(
    'timeline',
    {
      'timeline-vertical': vertical,
      'timeline-horizontal': horizontal,
      'timeline-snap-icon': snap,
      'timeline-compact': compact,
    },
    className,
  )
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

Timeline.displayName = 'Timeline'

export interface TimelineItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

export function TimelineItem({
  children,
  className,
  ...props
}: TimelineItemProps) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  )
}

TimelineItem.displayName = 'TimelineItem'

export interface TimelineStartProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function TimelineStart({
  children,
  className,
  ...props
}: TimelineStartProps) {
  const classes = clsx('timeline-start', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

TimelineStart.displayName = 'TimelineStart'

export interface TimelineMiddleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function TimelineMiddle({
  children,
  className,
  ...props
}: TimelineMiddleProps) {
  const classes = clsx('timeline-middle', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

TimelineMiddle.displayName = 'TimelineMiddle'

export interface TimelineEndProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function TimelineEnd({
  children,
  className,
  ...props
}: TimelineEndProps) {
  const classes = clsx('timeline-end', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

TimelineEnd.displayName = 'TimelineEnd'

export interface TimelineBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function TimelineBox({
  children,
  className,
  ...props
}: TimelineBoxProps) {
  const classes = clsx('timeline-box', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

TimelineBox.displayName = 'TimelineBox'

import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  compact?: boolean
  side?: boolean
  bordered?: boolean
  imageFull?: boolean
}

export function Card({
  children,
  className,
  compact,
  side,
  bordered,
  imageFull,
  ...props
}: CardProps) {
  const classes = clsx(
    'card',
    {
      'card-compact': compact,
      'card-side': side,
      'card-bordered': bordered,
      'image-full': imageFull,
    },
    className,
  )
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Card.displayName = 'Card'

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  const classes = clsx('card-body', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

CardBody.displayName = 'CardBody'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  const classes = clsx('card-title', className)
  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  )
}

CardTitle.displayName = 'CardTitle'

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardActions({ children, className, ...props }: CardActionsProps) {
  const classes = clsx('card-actions', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

CardActions.displayName = 'CardActions'

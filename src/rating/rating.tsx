import { clsx } from 'clsx'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  half?: boolean
}

export interface RatingItemProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string
  hidden?: boolean
}

export function Rating({
  children,
  className,
  size,
  half,
  ...props
}: RatingProps) {
  const classes = clsx(
    'rating',
    {
      [`rating-${size}`]: size,
      'rating-half': half,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function RatingItem({
  className,
  mask,
  hidden,
  name = 'rating',
  ...props
}: RatingItemProps) {
  const classes = clsx(
    {
      'rating-hidden': hidden,
      [`mask ${mask}`]: mask,
    },
    className,
  )

  return <input type="radio" name={name} className={classes} {...props} />
}

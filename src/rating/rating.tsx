import { clsx } from 'clsx'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {}

export interface RatingItemProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Rating({ children, className, ...props }: RatingProps) {
  return (
    <div className={clsx('rating', className)} {...props}>
      {children}
    </div>
  )
}

export function RatingItem({ className, name = 'rating', ...props }: RatingItemProps) {
  return <input type="radio" name={name} className={className} {...props} />
}

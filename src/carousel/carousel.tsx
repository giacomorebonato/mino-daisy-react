import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean
  center?: boolean
  end?: boolean
}

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

export function Carousel({ children, className, vertical, center, end, ...props }: CarouselProps) {
  const classes = clsx(
    'carousel',
    {
      'carousel-vertical': vertical,
      'carousel-center': center,
      'carousel-end': end,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CarouselItem({ children, className, ...props }: CarouselItemProps) {
  const classes = clsx('carousel-item', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

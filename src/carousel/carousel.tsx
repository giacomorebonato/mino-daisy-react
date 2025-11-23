import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {}

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

export function Carousel({ children, className, ...props }: CarouselProps) {
  return (
    <div className={clsx('carousel', className)} {...props}>
      {children}
    </div>
  )
}

export function CarouselItem({ children, className, ...props }: CarouselItemProps) {
  return (
    <div className={clsx('carousel-item', className)} {...props}>
      {children}
    </div>
  )
}

import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export function Hero({ children, className, ...props }: HeroProps) {
  const classes = clsx('hero', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export interface HeroContentProps extends HTMLAttributes<HTMLDivElement> {}

export function HeroContent({ children, className, ...props }: HeroContentProps) {
  const classes = clsx('hero-content', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export interface HeroOverlayProps extends HTMLAttributes<HTMLDivElement> {}

export function HeroOverlay({ className, ...props }: HeroOverlayProps) {
  const classes = clsx('hero-overlay', className)

  return <div className={classes} {...props} />
}

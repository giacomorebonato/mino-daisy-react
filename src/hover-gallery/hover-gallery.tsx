import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface HoverGalleryProps extends HTMLAttributes<HTMLElement> {
  asFigure?: boolean
}

export function HoverGallery({
  children,
  className,
  asFigure = true,
  ...props
}: HoverGalleryProps) {
  const classes = clsx('hover-gallery', className)

  if (asFigure) {
    return (
      <figure className={classes} {...(props as HTMLAttributes<HTMLElement>)}>
        {children}
      </figure>
    )
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

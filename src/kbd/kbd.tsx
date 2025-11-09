import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export type KbdSize = 'xs' | 'sm' | 'md' | 'lg'

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  size?: KbdSize
}

export function Kbd({ children, className, size, ...props }: KbdProps) {
  const classes = clsx(
    'kbd',
    {
      'kbd-xs': size === 'xs',
      'kbd-sm': size === 'sm',
      'kbd-md': size === 'md',
      'kbd-lg': size === 'lg',
    },
    className,
  )

  return (
    <kbd className={classes} {...props}>
      {children}
    </kbd>
  )
}

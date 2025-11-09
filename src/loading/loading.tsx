import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export type LoadingType = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'

export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg'

export interface LoadingProps extends HTMLAttributes<HTMLSpanElement> {
  type?: LoadingType
  size?: LoadingSize
}

export function Loading({ className, type = 'spinner', size, ...props }: LoadingProps) {
  const classes = clsx(
    'loading',
    {
      'loading-spinner': type === 'spinner',
      'loading-dots': type === 'dots',
      'loading-ring': type === 'ring',
      'loading-ball': type === 'ball',
      'loading-bars': type === 'bars',
      'loading-infinity': type === 'infinity',
      'loading-xs': size === 'xs',
      'loading-sm': size === 'sm',
      'loading-md': size === 'md',
      'loading-lg': size === 'lg',
    },
    className,
  )

  return <span className={classes} {...props} />
}

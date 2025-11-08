import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  horizontal?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export function Menu({ children, className, horizontal, size, ...props }: MenuProps) {
  const classes = clsx(
    'menu',
    {
      'menu-horizontal': horizontal,
      [`menu-${size}`]: size,
    },
    className,
  )
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

Menu.displayName = 'Menu'

import { type HTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  horizontal?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export function Menu({
  children,
  className,
  horizontal,
  size,
  ...props
}: MenuProps) {
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

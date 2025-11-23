import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export function Menu({ children, className, ...props }: MenuProps) {
  return (
    <ul className={clsx('menu', className)} {...props}>
      {children}
    </ul>
  )
}

Menu.displayName = 'Menu'

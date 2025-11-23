import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  ref?: React.Ref<HTMLElement>
}

export function Navbar({ children, className, ref, ...props }: NavbarProps) {
  const classes = clsx('navbar', className)
  return (
    <nav ref={ref} className={classes} {...props}>
      {children}
    </nav>
  )
}

Navbar.displayName = 'Navbar'

export interface NavbarSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  ref?: React.Ref<HTMLDivElement>
}

export function NavbarStart({ children, className, ref, ...props }: NavbarSectionProps) {
  const classes = clsx('navbar-start', className)
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
}

NavbarStart.displayName = 'NavbarStart'

export function NavbarCenter({ children, className, ref, ...props }: NavbarSectionProps) {
  const classes = clsx('navbar-center', className)
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
}

NavbarCenter.displayName = 'NavbarCenter'

export function NavbarEnd({ children, className, ref, ...props }: NavbarSectionProps) {
  const classes = clsx('navbar-end', className)
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
}

NavbarEnd.displayName = 'NavbarEnd'

import { type HTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Navbar({ children, className, ...props }: NavbarProps) {
  const classes = clsx('navbar', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Navbar.displayName = 'Navbar'

export interface NavbarSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function NavbarStart({
  children,
  className,
  ...props
}: NavbarSectionProps) {
  const classes = clsx('navbar-start', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

NavbarStart.displayName = 'NavbarStart'

export function NavbarCenter({
  children,
  className,
  ...props
}: NavbarSectionProps) {
  const classes = clsx('navbar-center', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

NavbarCenter.displayName = 'NavbarCenter'

export function NavbarEnd({
  children,
  className,
  ...props
}: NavbarSectionProps) {
  const classes = clsx('navbar-end', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

NavbarEnd.displayName = 'NavbarEnd'

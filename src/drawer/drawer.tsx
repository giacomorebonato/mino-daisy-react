import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
} from 'react'
import clsx from 'clsx'

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  end?: boolean
}

export function Drawer({ children, className, end, ...props }: DrawerProps) {
  const classes = clsx('drawer', { 'drawer-end': end }, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Drawer.displayName = 'Drawer'

export interface DrawerToggleProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export function DrawerToggle({ className, id, ...props }: DrawerToggleProps) {
  const classes = clsx('drawer-toggle', className)
  return <input type="checkbox" id={id} className={classes} {...props} />
}

DrawerToggle.displayName = 'DrawerToggle'

export interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function DrawerContent({
  children,
  className,
  ...props
}: DrawerContentProps) {
  const classes = clsx('drawer-content', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

DrawerContent.displayName = 'DrawerContent'

export interface DrawerSideProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function DrawerSide({
  children,
  className,
  ...props
}: DrawerSideProps) {
  const classes = clsx('drawer-side', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

DrawerSide.displayName = 'DrawerSide'

export interface DrawerOverlayProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
}

export function DrawerOverlay({
  className,
  htmlFor,
  ...props
}: DrawerOverlayProps) {
  const classes = clsx('drawer-overlay', className)
  return (
    <label htmlFor={htmlFor} aria-label="close sidebar" className={classes} {...props} />
  )
}

DrawerOverlay.displayName = 'DrawerOverlay'

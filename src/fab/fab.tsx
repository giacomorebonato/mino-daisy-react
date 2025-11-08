import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface FabProps extends HTMLAttributes<HTMLDivElement> {
  flower?: boolean
  children: ReactNode
}

export interface FabCloseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface FabMainActionProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Fab({ children, className, flower, ...props }: FabProps) {
  const classes = clsx(
    'fab',
    {
      'fab-flower': flower,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function FabClose({ children, className, ...props }: FabCloseProps) {
  const classes = clsx('fab-close', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function FabMainAction({ children, className, ...props }: FabMainActionProps) {
  const classes = clsx('fab-main-action', className)

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

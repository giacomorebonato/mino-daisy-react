import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface FabProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface FabCloseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface FabMainActionProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Fab({ children, className, ...props }: FabProps) {
  return (
    <div className={clsx('fab', className)} {...props}>
      {children}
    </div>
  )
}

export function FabClose({ children, className, ...props }: FabCloseProps) {
  return (
    <div className={clsx('fab-close', className)} {...props}>
      {children}
    </div>
  )
}

export function FabMainAction({ children, className, ...props }: FabMainActionProps) {
  return (
    <button className={clsx('fab-main-action', className)} {...props}>
      {children}
    </button>
  )
}

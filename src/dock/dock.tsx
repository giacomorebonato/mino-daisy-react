import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface DockProps extends ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  ref?: React.Ref<HTMLDivElement>
}

export function Dock({ children, className, size, ref, ...props }: DockProps) {
  const classes = clsx(
    'dock',
    {
      [`dock-${size}`]: size,
    },
    className,
  )
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
}

Dock.displayName = 'Dock'

export interface DockItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

export function DockItem({ children, className, active, ref, ...props }: DockItemProps) {
  const classes = clsx(
    {
      'dock-active': active,
    },
    className,
  )
  return (
    <button ref={ref} type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

DockItem.displayName = 'DockItem'

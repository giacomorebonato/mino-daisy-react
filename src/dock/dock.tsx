import clsx from 'clsx'
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'

export interface DockProps extends ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const Dock = forwardRef<HTMLDivElement, DockProps>(
  ({ children, className, size, ...props }, ref) => {
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
  },
)

Dock.displayName = 'Dock'

export interface DockItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
}

export const DockItem = forwardRef<HTMLButtonElement, DockItemProps>(
  ({ children, className, active, ...props }, ref) => {
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
  },
)

DockItem.displayName = 'DockItem'

import { clsx } from 'clsx'
import type { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {}

export function Tabs({ children, className, ...props }: TabsProps) {
  return (
    <div role="tablist" className={clsx('tabs', className)} {...props}>
      {children}
    </div>
  )
}

export function Tab({ children, className, disabled, ...props }: TabProps) {
  const classes = clsx(
    'tab',
    {
      'tab-disabled': disabled,
    },
    className,
  )

  return (
    <button role="tab" className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export function TabContent({ children, className, ...props }: TabContentProps) {
  return (
    <div className={clsx('tab-content', className)} {...props}>
      {children}
    </div>
  )
}

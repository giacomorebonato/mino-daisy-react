import { clsx } from 'clsx'
import type { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabsStyle?: 'boxed' | 'bordered' | 'lifted'
  placement?: 'top' | 'bottom'
}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {}

export function Tabs({
  children,
  className,
  tabsStyle,
  placement,
  ...props
}: TabsProps) {
  const classes = clsx(
    'tabs',
    {
      'tabs-boxed': tabsStyle === 'boxed',
      'tabs-bordered': tabsStyle === 'bordered',
      'tabs-lifted': tabsStyle === 'lifted',
      [`tabs-${placement}`]: placement,
    },
    className,
  )

  return (
    <div role="tablist" className={classes} {...props}>
      {children}
    </div>
  )
}

export function Tab({
  children,
  className,
  active,
  disabled,
  ...props
}: TabProps) {
  const classes = clsx(
    'tab',
    {
      'tab-active': active,
      'tab-disabled': disabled,
    },
    className,
  )

  return (
    <button
      role="tab"
      className={classes}
      disabled={disabled}
      aria-selected={active}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabContent({
  children,
  className,
  ...props
}: TabContentProps) {
  const classes = clsx('tab-content', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

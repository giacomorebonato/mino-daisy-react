import { clsx } from 'clsx'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  icon?: 'arrow' | 'plus'
  open?: boolean
  checkbox?: boolean
}

export interface CollapseTitleProps extends HTMLAttributes<HTMLDivElement> {}

export interface CollapseContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface CollapseCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Collapse({
  children,
  className,
  icon,
  open,
  checkbox = false,
  ...props
}: CollapseProps) {
  const classes = clsx(
    'collapse',
    {
      'collapse-arrow': icon === 'arrow',
      'collapse-plus': icon === 'plus',
      'collapse-open': open === true,
      'collapse-close': open === false,
    },
    className,
  )

  if (checkbox) {
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    )
  }

  return (
    // biome-ignore lint/a11y/noNoninteractiveTabindex: DaisyUI collapse requires tabIndex for keyboard navigation
    <div tabIndex={0} className={classes} {...props}>
      {children}
    </div>
  )
}

export function CollapseTitle({ children, className, ...props }: CollapseTitleProps) {
  const classes = clsx('collapse-title', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CollapseContent({ children, className, ...props }: CollapseContentProps) {
  const classes = clsx('collapse-content', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CollapseCheckbox({ className, ...props }: CollapseCheckboxProps) {
  const classes = clsx('collapse-toggle', className)

  return <input type="checkbox" className={classes} {...props} />
}

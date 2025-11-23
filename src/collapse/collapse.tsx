import { clsx } from 'clsx'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  checkbox?: boolean
}

export interface CollapseTitleProps extends HTMLAttributes<HTMLDivElement> {}

export interface CollapseContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface CollapseCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Collapse({ children, className, checkbox = false, ...props }: CollapseProps) {
  const classes = clsx('collapse', className)

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
  return (
    <div className={clsx('collapse-title', className)} {...props}>
      {children}
    </div>
  )
}

export function CollapseContent({ children, className, ...props }: CollapseContentProps) {
  return (
    <div className={clsx('collapse-content', className)} {...props}>
      {children}
    </div>
  )
}

export function CollapseCheckbox({ className, ...props }: CollapseCheckboxProps) {
  return <input type="checkbox" className={clsx('collapse-toggle', className)} {...props} />
}

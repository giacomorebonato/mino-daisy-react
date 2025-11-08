import { clsx } from 'clsx'
import type { FormHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react'

export interface FilterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If true, renders as a form element instead of div
   */
  asForm?: boolean
  /**
   * Name attribute for the radio group
   */
  name: string
}

export interface FilterResetProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * If true, renders as a reset input (type="reset") instead of radio
   */
  asReset?: boolean
}

export interface FilterItemProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Filter({ children, className, asForm, name, ...props }: FilterProps) {
  const classes = clsx('filter', className)

  if (asForm) {
    return (
      <form className={classes} {...(props as FormHTMLAttributes<HTMLFormElement>)}>
        {children}
      </form>
    )
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function FilterReset({ className, asReset = false, ...props }: FilterResetProps) {
  const classes = clsx(
    'btn',
    {
      'btn-square': asReset,
      'filter-reset': !asReset,
    },
    className,
  )

  if (asReset) {
    return <input type="reset" className={classes} value="×" {...props} />
  }

  return <input type="radio" className={classes} aria-label="×" {...props} />
}

export function FilterItem({ className, ...props }: FilterItemProps) {
  const classes = clsx('btn', className)

  return <input type="radio" className={classes} {...props} />
}

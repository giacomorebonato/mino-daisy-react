import { clsx } from 'clsx'
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode
}

export interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {
  children: ReactNode
}

export function Fieldset({ children, className, ...props }: FieldsetProps) {
  const classes = clsx('fieldset', className)

  return (
    <fieldset className={classes} {...props}>
      {children}
    </fieldset>
  )
}

export function FieldsetLegend({ children, className, ...props }: FieldsetLegendProps) {
  const classes = clsx('fieldset-legend', className)

  return (
    <legend className={classes} {...props}>
      {children}
    </legend>
  )
}

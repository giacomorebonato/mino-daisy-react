import { clsx } from 'clsx'
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export interface FormControlProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children?: ReactNode
  ref?: React.Ref<HTMLFieldSetElement>
}

export function FormControl({ className, ref, children, ...props }: FormControlProps) {
  return (
    <fieldset ref={ref} className={clsx('fieldset', className)} {...props}>
      {children}
    </fieldset>
  )
}

FormControl.displayName = 'FormControl'

export interface LegendProps extends HTMLAttributes<HTMLLegendElement> {
  children?: ReactNode
  ref?: React.Ref<HTMLLegendElement>
}

export function Legend({ className, ref, children, ...props }: LegendProps) {
  return (
    <legend ref={ref} className={clsx('fieldset-legend', className)} {...props}>
      {children}
    </legend>
  )
}

Legend.displayName = 'Legend'

export interface HintProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode
  /**
   * When true, the hint element reserves space even when empty.
   * Prevents layout shifts when error messages appear/disappear.
   */
  reserveSpace?: boolean
  ref?: React.Ref<HTMLParagraphElement>
  isError?: boolean
}

export function Hint({ className, ref, children, reserveSpace, isError, ...props }: HintProps) {
  return (
    <p ref={ref} className={clsx('label', { 'min-h-5': reserveSpace, 'text-error': isError }, className)} {...props}>
      {children}
    </p>
  )
}

Hint.displayName = 'Hint'

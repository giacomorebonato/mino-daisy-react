import { clsx } from 'clsx'
import type { FieldsetHTMLAttributes, HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'

export type FormControlProps =
  | ({ as?: 'fieldset' } & FieldsetHTMLAttributes<HTMLFieldSetElement> & {
        children?: ReactNode
        ref?: React.Ref<HTMLFieldSetElement>
      })
  | ({ as: 'label' } & LabelHTMLAttributes<HTMLLabelElement> & {
        children?: ReactNode
        ref?: React.Ref<HTMLLabelElement>
      })

export function FormControl(props: FormControlProps) {
  if (props.as === 'label') {
    const { as: _, className, ref, children, ...rest } = props
    return (
      <label ref={ref} className={clsx('fieldset', className)} {...rest}>
        {children}
      </label>
    )
  }
  const { as: _, className, ref, children, ...rest } = props
  return (
    <fieldset ref={ref} className={clsx('fieldset', className)} {...rest}>
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
    <p
      ref={ref}
      className={clsx('label', { 'min-h-5': reserveSpace, 'text-error': isError }, className)}
      {...props}
    >
      {children}
    </p>
  )
}

Hint.displayName = 'Hint'

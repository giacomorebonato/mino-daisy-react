import { clsx } from 'clsx'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'

export interface ValidatorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ghost?: boolean
  hint?: ReactNode
}

export const Validator = forwardRef<HTMLInputElement, ValidatorProps>(
  ({ className, variant, size, ghost, hint, ...props }, ref) => {
    const classes = clsx(
      'input',
      'validator',
      {
        [`input-${variant}`]: variant,
        [`input-${size}`]: size,
        'input-ghost': ghost,
      },
      className,
    )

    return (
      <>
        <input ref={ref} className={classes} {...props} />
        {hint && <p className="validator-hint">{hint}</p>}
      </>
    )
  },
)

Validator.displayName = 'Validator'

export interface ValidatorHintProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function ValidatorHint({ children, className, ...props }: ValidatorHintProps) {
  const classes = clsx('validator-hint', className)

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
  ref?: React.Ref<HTMLInputElement>
}

export function Input({ className, variant, size, ghost, ref, ...props }: InputProps) {
  const classes = clsx(
    'input',
    {
      [`input-${variant}`]: variant,
      [`input-${size}`]: size,
      'input-ghost': ghost,
    },
    className,
  )

  return <input ref={ref} className={classes} {...props} />
}

Input.displayName = 'Input'

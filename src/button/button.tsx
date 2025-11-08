import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'ghost'
    | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  outline?: boolean
  wide?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
  loading?: boolean
  disabled?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({
  children,
  className,
  variant,
  size,
  outline,
  wide,
  block,
  circle,
  square,
  loading,
  disabled,
  ref,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'btn',
    {
      [`btn-${variant}`]: variant,
      [`btn-${size}`]: size,
      'btn-outline': outline,
      'btn-wide': wide,
      'btn-block': block,
      'btn-circle': circle,
      'btn-square': square,
      loading: loading,
    },
    className,
  )

  return (
    <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}

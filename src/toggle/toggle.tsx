import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
  ref?: React.Ref<HTMLInputElement>
}

export function Toggle({ className, variant, size, ref, ...props }: ToggleProps) {
  const classes = clsx(
    'toggle',
    {
      [`toggle-${variant}`]: variant,
      [`toggle-${size}`]: size,
    },
    className,
  )

  return <input ref={ref} type="checkbox" className={classes} {...props} />
}

Toggle.displayName = 'Toggle'

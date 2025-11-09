import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export function Checkbox({ className, variant, size, ref, ...props }: CheckboxProps) {
  const classes = clsx(
    'checkbox',
    {
      [`checkbox-${variant}`]: variant,
      [`checkbox-${size}`]: size,
    },
    className,
  )

  return <input ref={ref} type="checkbox" className={classes} {...props} />
}

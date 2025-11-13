import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface RangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export function Range({ className, variant, size, min = 0, max = 100, ref, ...props }: RangeProps) {
  const classes = clsx(
    'range',
    {
      [`range-${variant}`]: variant,
      [`range-${size}`]: size,
    },
    className,
  )

  return <input ref={ref} type="range" min={min} max={max} className={classes} {...props} />
}

Range.displayName = 'Range'

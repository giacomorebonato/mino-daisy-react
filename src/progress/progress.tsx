import clsx from 'clsx'
import type { ProgressHTMLAttributes } from 'react'

export interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  ref?: React.Ref<HTMLProgressElement>
}

export function Progress({ className, variant, ref, ...props }: ProgressProps) {
  const classes = clsx(
    'progress',
    {
      [`progress-${variant}`]: variant,
    },
    className,
  )
  return <progress ref={ref} className={classes} max={100} {...props} />
}

Progress.displayName = 'Progress'

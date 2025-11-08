import clsx from 'clsx'
import { forwardRef, type ProgressHTMLAttributes } from 'react'

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
}

export const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  ({ className, variant, ...props }, ref) => {
    const classes = clsx(
      'progress',
      {
        [`progress-${variant}`]: variant,
      },
      className,
    )
    return <progress ref={ref} className={classes} max={100} {...props} />
  },
)

Progress.displayName = 'Progress'

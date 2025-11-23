import clsx from 'clsx'
import type { ProgressHTMLAttributes } from 'react'

export interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  ref?: React.Ref<HTMLProgressElement>
}

export function Progress({ className, ref, ...props }: ProgressProps) {
  return <progress ref={ref} className={clsx('progress', className)} max={100} {...props} />
}

Progress.displayName = 'Progress'

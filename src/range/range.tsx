import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

export function Range({ className, ref, ...props }: RangeProps) {
  return <input ref={ref} type="range" className={clsx('range', className)} {...props} />
}

Range.displayName = 'Range'

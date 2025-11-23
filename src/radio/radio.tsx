import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

export function Radio({ className, ref, ...props }: RadioProps) {
  return <input ref={ref} type="radio" className={clsx('radio', className)} {...props} />
}

Radio.displayName = 'Radio'

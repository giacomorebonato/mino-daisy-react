import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

export function Checkbox({ className, ref, ...props }: CheckboxProps) {
  return <input ref={ref} type="checkbox" className={clsx('checkbox', className)} {...props} />
}

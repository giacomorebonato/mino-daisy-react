import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

export function Input({ className, ref, ...props }: InputProps) {
  return <input ref={ref} className={clsx('input w-full', className)} {...props} />
}

Input.displayName = 'Input'

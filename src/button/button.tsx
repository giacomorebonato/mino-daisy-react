import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({ className, ref, ...props }: ButtonProps) {
  return <button ref={ref} className={clsx('btn', className)} {...props} />
}

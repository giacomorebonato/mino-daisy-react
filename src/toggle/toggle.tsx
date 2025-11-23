import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

export function Toggle({ className, ref, ...props }: ToggleProps) {
  return <input ref={ref} type="checkbox" className={clsx('toggle', className)} {...props} />
}

Toggle.displayName = 'Toggle'

import { clsx } from 'clsx'
import type { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  ref?: React.Ref<HTMLSelectElement>
}

export function Select({ className, ref, ...props }: SelectProps) {
  return <select ref={ref} className={clsx('select', className)} {...props} />
}

Select.displayName = 'Select'

import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>
}

export function FileInput({ className, ref, ...props }: FileInputProps) {
  return <input ref={ref} type="file" className={clsx('file-input', className)} {...props} />
}

FileInput.displayName = 'FileInput'

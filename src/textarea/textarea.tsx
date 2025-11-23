import { clsx } from 'clsx'
import type { TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>
}

export function Textarea({ className, ref, ...props }: TextareaProps) {
  return <textarea ref={ref} className={clsx('textarea', className)} {...props} />
}

Textarea.displayName = 'Textarea'

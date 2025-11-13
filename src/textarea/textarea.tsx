import { clsx } from 'clsx'
import type { TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  ghost?: boolean
  ref?: React.Ref<HTMLTextAreaElement>
}

export function Textarea({ className, variant, size, ghost, ref, ...props }: TextareaProps) {
  const classes = clsx(
    'textarea',
    {
      [`textarea-${variant}`]: variant,
      [`textarea-${size}`]: size,
      'textarea-ghost': ghost,
    },
    className,
  )

  return <textarea ref={ref} className={classes} {...props} />
}

Textarea.displayName = 'Textarea'

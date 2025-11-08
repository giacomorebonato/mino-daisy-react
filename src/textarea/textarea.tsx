import { clsx } from 'clsx'
import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ghost, ...props }, ref) => {
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
  },
)

Textarea.displayName = 'Textarea'

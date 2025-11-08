import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, variant, size, ghost, ...props }, ref) => {
    const classes = clsx(
      'file-input',
      {
        [`file-input-${variant}`]: variant,
        [`file-input-${size}`]: size,
        'file-input-ghost': ghost,
      },
      className,
    )

    return <input ref={ref} type="file" className={classes} {...props} />
  },
)

FileInput.displayName = 'FileInput'

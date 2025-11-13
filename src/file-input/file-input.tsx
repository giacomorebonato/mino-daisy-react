import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

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
  ref?: React.Ref<HTMLInputElement>
}

export function FileInput({ className, variant, size, ghost, ref, ...props }: FileInputProps) {
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
}

FileInput.displayName = 'FileInput'

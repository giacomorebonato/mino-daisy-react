import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  online?: boolean
  offline?: boolean
  placeholder?: boolean
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function Avatar({
  children,
  className,
  online,
  offline,
  placeholder,
  ...props
}: AvatarProps) {
  const classes = clsx(
    'avatar',
    {
      'avatar-online': online,
      'avatar-offline': offline,
      'avatar-placeholder': placeholder,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function AvatarGroup({ children, className, ...props }: AvatarGroupProps) {
  const classes = clsx('avatar-group', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

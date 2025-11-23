import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    <div className={clsx('avatar', className)} {...props}>
      {children}
    </div>
  )
}

export function AvatarGroup({ children, className, ...props }: AvatarGroupProps) {
  return (
    <div className={clsx('avatar-group', className)} {...props}>
      {children}
    </div>
  )
}

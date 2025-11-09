import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface MockupPhoneProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupPhone({ children, className, ...props }: MockupPhoneProps) {
  const classes = clsx('mockup-phone', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export interface MockupPhoneCameraProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupPhoneCamera({ className, ...props }: MockupPhoneCameraProps) {
  const classes = clsx('mockup-phone-camera', className)

  return <div className={classes} {...props} />
}

export interface MockupPhoneDisplayProps extends HTMLAttributes<HTMLDivElement> {}

export function MockupPhoneDisplay({ children, className, ...props }: MockupPhoneDisplayProps) {
  const classes = clsx('mockup-phone-display', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

import clsx from 'clsx'
import type { HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react'

export interface StepsProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  vertical?: boolean
  horizontal?: boolean
}

export function Steps({ children, className, vertical, horizontal, ...props }: StepsProps) {
  const classes = clsx(
    'steps',
    {
      'steps-vertical': vertical,
      'steps-horizontal': horizontal,
    },
    className,
  )
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

Steps.displayName = 'Steps'

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  dataContent?: string
}

export function Step({ children, className, variant, dataContent, ...props }: StepProps) {
  const classes = clsx(
    'step',
    {
      [`step-${variant}`]: variant,
    },
    className,
  )
  return (
    <li className={classes} data-content={dataContent} {...props}>
      {children}
    </li>
  )
}

Step.displayName = 'Step'

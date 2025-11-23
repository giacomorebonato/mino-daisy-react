import clsx from 'clsx'
import type { HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react'

export interface StepsProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export function Steps({ children, className, ...props }: StepsProps) {
  return (
    <ul className={clsx('steps', className)} {...props}>
      {children}
    </ul>
  )
}

Steps.displayName = 'Steps'

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
  dataContent?: string
}

export function Step({ children, className, dataContent, ...props }: StepProps) {
  return (
    <li className={clsx('step', className)} data-content={dataContent} {...props}>
      {children}
    </li>
  )
}

Step.displayName = 'Step'

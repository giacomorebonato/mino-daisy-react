import { clsx } from 'clsx'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionTitleProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionRadioProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Accordion({ children, className, ...props }: AccordionProps) {
  return (
    <div className={clsx('space-y-2', className)} {...props}>
      {children}
    </div>
  )
}

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <div className={clsx('collapse', className)} {...props}>
      {children}
    </div>
  )
}

export function AccordionTitle({ children, className, ...props }: AccordionTitleProps) {
  return (
    <div className={clsx('collapse-title', className)} {...props}>
      {children}
    </div>
  )
}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  return (
    <div className={clsx('collapse-content', className)} {...props}>
      {children}
    </div>
  )
}

export function AccordionRadio({ className, name = 'accordion', ...props }: AccordionRadioProps) {
  return (
    <input type="radio" name={name} className={clsx('collapse-toggle', className)} {...props} />
  )
}

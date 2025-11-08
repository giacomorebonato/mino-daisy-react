import { clsx } from 'clsx'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: 'arrow' | 'plus'
}

export interface AccordionTitleProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionRadioProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Accordion({ children, className, ...props }: AccordionProps) {
  const classes = clsx('space-y-2', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function AccordionItem({ children, className, icon, ...props }: AccordionItemProps) {
  const classes = clsx(
    'collapse',
    {
      'collapse-arrow': icon === 'arrow',
      'collapse-plus': icon === 'plus',
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function AccordionTitle({ children, className, ...props }: AccordionTitleProps) {
  const classes = clsx('collapse-title', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  const classes = clsx('collapse-content', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function AccordionRadio({ className, name = 'accordion', ...props }: AccordionRadioProps) {
  const classes = clsx('collapse-toggle', className)

  return <input type="radio" name={name} className={classes} {...props} />
}

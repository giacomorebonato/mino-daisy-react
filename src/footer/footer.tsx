import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  horizontal?: boolean
  center?: boolean
}

export function Footer({ children, className, horizontal, center, ...props }: FooterProps) {
  const classes = clsx(
    'footer',
    {
      'footer-horizontal': horizontal,
      'footer-center': center,
    },
    className,
  )
  return (
    <footer className={classes} {...props}>
      {children}
    </footer>
  )
}

Footer.displayName = 'Footer'

export interface FooterTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function FooterTitle({ children, className, ...props }: FooterTitleProps) {
  const classes = clsx('footer-title', className)
  return (
    <h6 className={classes} {...props}>
      {children}
    </h6>
  )
}

FooterTitle.displayName = 'FooterTitle'

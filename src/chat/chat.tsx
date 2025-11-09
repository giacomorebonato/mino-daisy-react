import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  start?: boolean
  end?: boolean
}

export interface ChatImageProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
}

export function Chat({ children, className, start, end, ...props }: ChatProps) {
  const classes = clsx(
    'chat',
    {
      'chat-start': start,
      'chat-end': end,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ChatImage({ children, className, ...props }: ChatImageProps) {
  const classes = clsx('chat-image', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ChatHeader({ children, className, ...props }: ChatHeaderProps) {
  const classes = clsx('chat-header', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ChatFooter({ children, className, ...props }: ChatFooterProps) {
  const classes = clsx('chat-footer', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ChatBubble({ children, className, variant, ...props }: ChatBubbleProps) {
  const classes = clsx(
    'chat-bubble',
    {
      'chat-bubble-neutral': variant === 'neutral',
      'chat-bubble-primary': variant === 'primary',
      'chat-bubble-secondary': variant === 'secondary',
      'chat-bubble-accent': variant === 'accent',
      'chat-bubble-info': variant === 'info',
      'chat-bubble-success': variant === 'success',
      'chat-bubble-warning': variant === 'warning',
      'chat-bubble-error': variant === 'error',
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

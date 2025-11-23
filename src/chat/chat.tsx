import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatImageProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {}

export function Chat({ children, className, ...props }: ChatProps) {
  return (
    <div className={clsx('chat', className)} {...props}>
      {children}
    </div>
  )
}

export function ChatImage({ children, className, ...props }: ChatImageProps) {
  return (
    <div className={clsx('chat-image', className)} {...props}>
      {children}
    </div>
  )
}

export function ChatHeader({ children, className, ...props }: ChatHeaderProps) {
  return (
    <div className={clsx('chat-header', className)} {...props}>
      {children}
    </div>
  )
}

export function ChatFooter({ children, className, ...props }: ChatFooterProps) {
  return (
    <div className={clsx('chat-footer', className)} {...props}>
      {children}
    </div>
  )
}

export function ChatBubble({ children, className, ...props }: ChatBubbleProps) {
  return (
    <div className={clsx('chat-bubble', className)} {...props}>
      {children}
    </div>
  )
}

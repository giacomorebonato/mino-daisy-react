import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface CountdownProps extends HTMLAttributes<HTMLSpanElement> {
  value: number
}

export function Countdown({
  children,
  className,
  value,
  style,
  ...props
}: CountdownProps) {
  const classes = clsx('countdown', className)

  const countdownStyle = {
    '--value': value,
    ...style,
  } as React.CSSProperties

  return (
    <span
      className={classes}
      style={countdownStyle}
      aria-live="polite"
      aria-label={value.toString()}
      {...props}
    >
      <span>{children ?? value}</span>
    </span>
  )
}

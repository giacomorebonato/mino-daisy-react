import clsx from 'clsx'
import { type CSSProperties, forwardRef, type HTMLAttributes, type ReactNode } from 'react'

export interface RadialProgressProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  value: number
  size?: string
  thickness?: string
}

export const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  ({ children, className, value, size, thickness, style, ...props }, ref) => {
    const classes = clsx('radial-progress', className)
    const customStyle: CSSProperties = {
      '--value': value,
      '--size': size,
      '--thickness': thickness,
      ...style,
    } as CSSProperties
    return (
      <div
        ref={ref}
        className={classes}
        style={customStyle}
        role="progressbar"
        aria-valuenow={value}
        {...props}
      >
        {children || `${value}%`}
      </div>
    )
  },
)

RadialProgress.displayName = 'RadialProgress'

import { type CSSProperties, type HTMLAttributes, type ReactNode, forwardRef } from 'react'
import clsx from 'clsx'

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

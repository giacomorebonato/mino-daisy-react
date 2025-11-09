import { clsx } from 'clsx'
import type { ImgHTMLAttributes } from 'react'

export type MaskShape =
  | 'squircle'
  | 'heart'
  | 'hexagon'
  | 'hexagon-2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'square'
  | 'circle'
  | 'parallelogram'
  | 'parallelogram-2'
  | 'parallelogram-3'
  | 'parallelogram-4'
  | 'star'
  | 'star-2'
  | 'triangle'
  | 'triangle-2'
  | 'triangle-3'
  | 'triangle-4'

export type MaskHalf = 'half-1' | 'half-2'

export interface MaskProps extends ImgHTMLAttributes<HTMLImageElement> {
  shape?: MaskShape
  half?: MaskHalf
}

export function Mask({ className, shape, half, ...props }: MaskProps) {
  const classes = clsx(
    'mask',
    {
      [`mask-${shape}`]: shape,
      [`mask-${half}`]: half,
    },
    className,
  )

  // biome-ignore lint/a11y/useAltText: alt prop is passed through props spreading from consumer
  return <img className={classes} {...props} />
}

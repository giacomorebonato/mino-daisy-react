import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { DayPickerProps } from 'react-day-picker'
import { DayPicker } from 'react-day-picker'

export interface CalendarProps extends DayPickerProps {
  className?: string
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, ...props }, ref) => {
    const classes = clsx('react-day-picker', className)

    return (
      <div ref={ref}>
        <DayPicker className={classes} {...props} />
      </div>
    )
  },
)

Calendar.displayName = 'Calendar'

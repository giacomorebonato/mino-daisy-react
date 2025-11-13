import { clsx } from 'clsx'
import type { DayPickerProps } from 'react-day-picker'
import { DayPicker } from 'react-day-picker'

export type CalendarProps = DayPickerProps & {
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

export function Calendar({ className, ref, ...props }: CalendarProps) {
  const classes = clsx('react-day-picker', className)

  return (
    <div ref={ref}>
      <DayPicker className={classes} {...props} />
    </div>
  )
}

Calendar.displayName = 'Calendar'

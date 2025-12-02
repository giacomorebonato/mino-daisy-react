import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  ref?: React.Ref<HTMLDivElement>
}

export interface BottomSheetContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface BottomSheetBackdropProps extends HTMLAttributes<HTMLDivElement> {}

export interface BottomSheetActionsProps extends HTMLAttributes<HTMLDivElement> {}

export function BottomSheet({ children, className, open, ref, ...props }: BottomSheetProps) {
  const classes = clsx(
    'fixed inset-0 z-50 transition-opacity duration-300',
    {
      'pointer-events-none opacity-0': !open,
      'pointer-events-auto opacity-100': open,
    },
    className,
  )

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
}

BottomSheet.displayName = 'BottomSheet'

export function BottomSheetContent({ children, className, ...props }: BottomSheetContentProps) {
  const classes = clsx(
    'fixed bottom-0 left-0 right-0 bg-base-100 rounded-t-2xl shadow-xl max-h-[90vh] overflow-y-auto transition-transform duration-300 ease-out',
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function BottomSheetBackdrop({ children, className, ...props }: BottomSheetBackdropProps) {
  const classes = clsx('fixed inset-0 bg-black/50 backdrop-blur-sm', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function BottomSheetActions({ children, className, ...props }: BottomSheetActionsProps) {
  const classes = clsx('flex flex-col gap-2 p-4 w-full', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

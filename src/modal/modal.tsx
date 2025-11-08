import { clsx } from 'clsx'
import type {
  DialogHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
} from 'react'
import { forwardRef } from 'react'

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open?: boolean
  placement?: 'top' | 'middle' | 'bottom' | 'start' | 'end'
}

export interface ModalBoxProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalActionProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalBackdropProps
  extends FormHTMLAttributes<HTMLFormElement> {}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, className, open, placement, ...props }, ref) => {
    const classes = clsx(
      'modal',
      {
        'modal-open': open,
        [`modal-${placement}`]: placement,
      },
      className,
    )

    return (
      <dialog ref={ref} open={open} className={classes} {...props}>
        {children}
      </dialog>
    )
  },
)

Modal.displayName = 'Modal'

export function ModalBox({
  children,
  className,
  ...props
}: ModalBoxProps) {
  const classes = clsx('modal-box', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ModalAction({
  children,
  className,
  ...props
}: ModalActionProps) {
  const classes = clsx('modal-action', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ModalBackdrop({
  children,
  className,
  ...props
}: ModalBackdropProps) {
  const classes = clsx('modal-backdrop', className)

  return (
    <form method="dialog" className={classes} {...props}>
      {children}
    </form>
  )
}

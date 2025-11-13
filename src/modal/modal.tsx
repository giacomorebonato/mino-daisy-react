import { clsx } from 'clsx'
import type { DialogHTMLAttributes, FormHTMLAttributes, HTMLAttributes } from 'react'

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open?: boolean
  placement?: 'top' | 'middle' | 'bottom' | 'start' | 'end'
  ref?: React.Ref<HTMLDialogElement>
}

export interface ModalBoxProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalActionProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalBackdropProps extends FormHTMLAttributes<HTMLFormElement> {}

export function Modal({ children, className, open, placement, ref, ...props }: ModalProps) {
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
}

Modal.displayName = 'Modal'

export function ModalBox({ children, className, ...props }: ModalBoxProps) {
  const classes = clsx('modal-box', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ModalAction({ children, className, ...props }: ModalActionProps) {
  const classes = clsx('modal-action', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function ModalBackdrop({ children, className, ...props }: ModalBackdropProps) {
  const classes = clsx('modal-backdrop', className)

  return (
    <form method="dialog" className={classes} {...props}>
      {children}
    </form>
  )
}

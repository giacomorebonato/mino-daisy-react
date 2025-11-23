import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface DropdownProps extends Omit<ComponentPropsWithoutRef<'details'>, 'content'> {
  /**
   * The trigger button content
   */
  trigger: ReactNode

  /**
   * The dropdown content
   */
  content: ReactNode

  /**
   * Additional class names for the dropdown content
   */
  contentClassName?: string

  /**
   * Ref to the details element
   */
  ref?: React.Ref<HTMLDetailsElement>
}

export function Dropdown({
  trigger,
  content,
  contentClassName,
  className,
  ref,
  ...props
}: DropdownProps) {
  const contentClasses = clsx('dropdown-content', contentClassName)

  return (
    <details ref={ref} className={clsx('dropdown', className)} {...props}>
      <summary className="cursor-pointer">{trigger}</summary>
      <div className={contentClasses}>{content}</div>
    </details>
  )
}

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
   * Horizontal placement of dropdown
   */
  placement?: 'start' | 'center' | 'end'

  /**
   * Vertical/horizontal position of dropdown
   */
  position?: 'top' | 'bottom' | 'left' | 'right'

  /**
   * Open dropdown on hover instead of click
   */
  hover?: boolean

  /**
   * Force dropdown to stay open
   */
  forceOpen?: boolean

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
  placement,
  position,
  hover = false,
  forceOpen = false,
  contentClassName,
  className,
  ref,
  ...props
}: DropdownProps) {
  const dropdownClasses = clsx(
    'dropdown',
    placement && `dropdown-${placement}`,
    position && `dropdown-${position}`,
    hover && 'dropdown-hover',
    forceOpen && 'dropdown-open',
    className,
  )

  const contentClasses = clsx('dropdown-content', contentClassName)

  return (
    <details ref={ref} className={dropdownClasses} {...props}>
      <summary className="cursor-pointer">{trigger}</summary>
      <div className={contentClasses}>{content}</div>
    </details>
  )
}

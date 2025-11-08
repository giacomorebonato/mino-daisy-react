import { clsx } from 'clsx'
import type { HTMLAttributes, LiHTMLAttributes } from 'react'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {}

export interface ListRowProps extends LiHTMLAttributes<HTMLLIElement> {
  colWrap?: boolean
  colGrow?: boolean
}

export function List({ children, className, ...props }: ListProps) {
  const classes = clsx('list', className)

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

export function ListRow({ children, className, colWrap, colGrow, ...props }: ListRowProps) {
  const classes = clsx(
    'list-row',
    {
      'list-col-wrap': colWrap,
      'list-col-grow': colGrow,
    },
    className,
  )

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}

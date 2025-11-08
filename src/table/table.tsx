import clsx from 'clsx'
import type { ReactNode, TableHTMLAttributes } from 'react'

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
  zebra?: boolean
  pinRows?: boolean
  pinCols?: boolean
}

export function Table({
  children,
  className,
  size,
  zebra,
  pinRows,
  pinCols,
  ...props
}: TableProps) {
  const classes = clsx(
    'table',
    {
      [`table-${size}`]: size,
      'table-zebra': zebra,
      'table-pin-rows': pinRows,
      'table-pin-cols': pinCols,
    },
    className,
  )
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  )
}

Table.displayName = 'Table'

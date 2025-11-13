import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Skeleton } from './skeleton'

describe('Skeleton', () => {
  it('applies skeleton class', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveClass('skeleton')
  })

  it('renders as div element', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Skeleton className="h-32 w-32" />)
    expect(container.firstChild).toHaveClass('skeleton', 'h-32', 'w-32')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Skeleton data-testid="skeleton" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'skeleton')
  })

  it('renders children correctly', () => {
    render(
      <Skeleton>
        <span>Loading content</span>
      </Skeleton>,
    )
    expect(screen.getByText('Loading content')).toBeInTheDocument()
  })
})

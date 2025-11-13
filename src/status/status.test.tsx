import { describe, expect, it } from 'bun:test'
import { render } from '@testing-library/react'
import { Status } from './status'

describe('Status', () => {
  it('renders with base status class', () => {
    const { container } = render(<Status />)
    expect(container.firstChild).toHaveClass('status')
  })

  it('renders as span element', () => {
    const { container } = render(<Status />)
    expect(container.firstChild?.nodeName).toBe('SPAN')
  })

  it('applies color variant classes', () => {
    const { container, rerender } = render(<Status variant="primary" />)
    expect(container.firstChild).toHaveClass('status-primary')

    rerender(<Status variant="secondary" />)
    expect(container.firstChild).toHaveClass('status-secondary')

    rerender(<Status variant="accent" />)
    expect(container.firstChild).toHaveClass('status-accent')

    rerender(<Status variant="neutral" />)
    expect(container.firstChild).toHaveClass('status-neutral')

    rerender(<Status variant="info" />)
    expect(container.firstChild).toHaveClass('status-info')

    rerender(<Status variant="success" />)
    expect(container.firstChild).toHaveClass('status-success')

    rerender(<Status variant="warning" />)
    expect(container.firstChild).toHaveClass('status-warning')

    rerender(<Status variant="error" />)
    expect(container.firstChild).toHaveClass('status-error')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(<Status size="xs" />)
    expect(container.firstChild).toHaveClass('status-xs')

    rerender(<Status size="sm" />)
    expect(container.firstChild).toHaveClass('status-sm')

    rerender(<Status size="md" />)
    expect(container.firstChild).toHaveClass('status-md')

    rerender(<Status size="lg" />)
    expect(container.firstChild).toHaveClass('status-lg')

    rerender(<Status size="xl" />)
    expect(container.firstChild).toHaveClass('status-xl')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Status className="custom-class" />)
    expect(container.firstChild).toHaveClass('status', 'custom-class')
  })

  it('passes additional props to span element', () => {
    const { container } = render(<Status data-testid="status" aria-label="online" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'status')
    expect(container.firstChild).toHaveAttribute('aria-label', 'online')
  })

  it('combines variant and size', () => {
    const { container } = render(<Status variant="success" size="lg" />)
    expect(container.firstChild).toHaveClass('status', 'status-success', 'status-lg')
  })
})

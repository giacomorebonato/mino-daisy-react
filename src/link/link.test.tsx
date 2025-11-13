import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Link } from './link'

describe('Link', () => {
  it('renders children correctly', () => {
    render(<Link>Click me</Link>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies link class', () => {
    const { container } = render(<Link>Click me</Link>)
    expect(container.firstChild).toHaveClass('link')
  })

  it('renders as anchor element', () => {
    const { container } = render(<Link>Click me</Link>)
    expect(container.firstChild?.nodeName).toBe('A')
  })

  it('applies variant classes', () => {
    const { container, rerender } = render(<Link variant="primary">Link</Link>)
    expect(container.firstChild).toHaveClass('link-primary')

    rerender(<Link variant="secondary">Link</Link>)
    expect(container.firstChild).toHaveClass('link-secondary')

    rerender(<Link variant="accent">Link</Link>)
    expect(container.firstChild).toHaveClass('link-accent')

    rerender(<Link variant="neutral">Link</Link>)
    expect(container.firstChild).toHaveClass('link-neutral')

    rerender(<Link variant="success">Link</Link>)
    expect(container.firstChild).toHaveClass('link-success')

    rerender(<Link variant="info">Link</Link>)
    expect(container.firstChild).toHaveClass('link-info')

    rerender(<Link variant="warning">Link</Link>)
    expect(container.firstChild).toHaveClass('link-warning')

    rerender(<Link variant="error">Link</Link>)
    expect(container.firstChild).toHaveClass('link-error')
  })

  it('applies hover class when hover prop is true', () => {
    const { container } = render(<Link hover>Link</Link>)
    expect(container.firstChild).toHaveClass('link-hover')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Link className="custom-class">Link</Link>)
    expect(container.firstChild).toHaveClass('link', 'custom-class')
  })

  it('passes additional props to anchor element', () => {
    const { container } = render(
      <Link href="https://example.com" target="_blank">
        Link
      </Link>,
    )
    expect(container.firstChild).toHaveAttribute('href', 'https://example.com')
    expect(container.firstChild).toHaveAttribute('target', '_blank')
  })
})

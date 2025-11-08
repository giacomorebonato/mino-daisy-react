import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './badge'

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Badge text</Badge>)
    expect(screen.getByText('Badge text')).toBeInTheDocument()
  })

  it('applies badge class', () => {
    const { container } = render(<Badge>Content</Badge>)
    const badge = container.querySelector('span')
    expect(badge).toHaveClass('badge')
  })

  it('applies variant classes', () => {
    const { container, rerender } = render(<Badge variant="primary">Content</Badge>)
    let badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-primary')

    rerender(<Badge variant="secondary">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-secondary')

    rerender(<Badge variant="accent">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-accent')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(<Badge size="xs">Content</Badge>)
    let badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-xs')

    rerender(<Badge size="sm">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-sm')

    rerender(<Badge size="md">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-md')

    rerender(<Badge size="lg">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-lg')
  })

  it('applies outline class when outline prop is true', () => {
    const { container } = render(<Badge outline>Content</Badge>)
    const badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-outline')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Badge className="custom-class">Content</Badge>)
    const badge = container.querySelector('span')
    expect(badge).toHaveClass('badge')
    expect(badge).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(<Badge data-testid="badge-element">Content</Badge>)
    expect(container.querySelector('span')).toHaveAttribute('data-testid', 'badge-element')
  })

  it('renders as span element', () => {
    const { container } = render(<Badge>Content</Badge>)
    expect(container.querySelector('span')).toBeInTheDocument()
  })
})

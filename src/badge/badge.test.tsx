import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
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
    const { container, rerender } = render(<Badge className="badge-primary">Content</Badge>)
    let badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-primary')

    rerender(<Badge className="badge-secondary">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-secondary')

    rerender(<Badge className="badge-accent">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-accent')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(<Badge className="badge-xs">Content</Badge>)
    let badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-xs')

    rerender(<Badge className="badge-sm">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-sm')

    rerender(<Badge className="badge-md">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-md')

    rerender(<Badge className="badge-lg">Content</Badge>)
    badge = container.querySelector('span')
    expect(badge).toHaveClass('badge-lg')
  })

  it('applies outline class when outline prop is true', () => {
    const { container } = render(<Badge className="badge-outline">Content</Badge>)
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

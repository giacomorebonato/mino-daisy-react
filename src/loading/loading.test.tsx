import { describe, expect, it } from 'bun:test'
import { render } from '@testing-library/react'
import { Loading } from './loading'

describe('Loading', () => {
  it('applies loading class', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toHaveClass('loading')
  })

  it('renders as span element', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild?.nodeName).toBe('SPAN')
  })

  it('applies spinner type by default', () => {
    const { container } = render(<Loading className="loading-spinner" />)
    expect(container.firstChild).toHaveClass('loading-spinner')
  })

  it('applies different loading types', () => {
    const { container, rerender } = render(<Loading className="loading-spinner" />)
    expect(container.firstChild).toHaveClass('loading-spinner')

    rerender(<Loading className="loading-dots" />)
    expect(container.firstChild).toHaveClass('loading-dots')

    rerender(<Loading className="loading-ring" />)
    expect(container.firstChild).toHaveClass('loading-ring')

    rerender(<Loading className="loading-ball" />)
    expect(container.firstChild).toHaveClass('loading-ball')

    rerender(<Loading className="loading-bars" />)
    expect(container.firstChild).toHaveClass('loading-bars')

    rerender(<Loading className="loading-infinity" />)
    expect(container.firstChild).toHaveClass('loading-infinity')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(<Loading className="loading-xs" />)
    expect(container.firstChild).toHaveClass('loading-xs')

    rerender(<Loading className="loading-sm" />)
    expect(container.firstChild).toHaveClass('loading-sm')

    rerender(<Loading className="loading-md" />)
    expect(container.firstChild).toHaveClass('loading-md')

    rerender(<Loading className="loading-lg" />)
    expect(container.firstChild).toHaveClass('loading-lg')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Loading className="custom-class" />)
    expect(container.firstChild).toHaveClass('loading', 'custom-class')
  })

  it('passes additional props to span element', () => {
    const { container } = render(<Loading data-testid="loading" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'loading')
  })

  it('combines type and size', () => {
    const { container } = render(<Loading className="loading-dots loading-lg" />)
    expect(container.firstChild).toHaveClass('loading', 'loading-dots', 'loading-lg')
  })
})

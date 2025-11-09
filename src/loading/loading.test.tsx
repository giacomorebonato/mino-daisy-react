import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
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
    const { container } = render(<Loading />)
    expect(container.firstChild).toHaveClass('loading-spinner')
  })

  it('applies different loading types', () => {
    const { container, rerender } = render(<Loading type="spinner" />)
    expect(container.firstChild).toHaveClass('loading-spinner')

    rerender(<Loading type="dots" />)
    expect(container.firstChild).toHaveClass('loading-dots')

    rerender(<Loading type="ring" />)
    expect(container.firstChild).toHaveClass('loading-ring')

    rerender(<Loading type="ball" />)
    expect(container.firstChild).toHaveClass('loading-ball')

    rerender(<Loading type="bars" />)
    expect(container.firstChild).toHaveClass('loading-bars')

    rerender(<Loading type="infinity" />)
    expect(container.firstChild).toHaveClass('loading-infinity')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(<Loading size="xs" />)
    expect(container.firstChild).toHaveClass('loading-xs')

    rerender(<Loading size="sm" />)
    expect(container.firstChild).toHaveClass('loading-sm')

    rerender(<Loading size="md" />)
    expect(container.firstChild).toHaveClass('loading-md')

    rerender(<Loading size="lg" />)
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
    const { container } = render(<Loading type="dots" size="lg" />)
    expect(container.firstChild).toHaveClass('loading', 'loading-dots', 'loading-lg')
  })
})

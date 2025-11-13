import { describe, expect, it } from 'bun:test'
import { render } from '@testing-library/react'
import { Progress } from './progress'

describe('Progress', () => {
  it('applies progress class', () => {
    const { container } = render(<Progress value={50} />)
    expect(container.querySelector('progress')).toHaveClass('progress')
  })

  it('applies variant classes', () => {
    const { container, rerender } = render(<Progress variant="primary" value={50} />)
    let progress = container.querySelector('progress')
    expect(progress).toHaveClass('progress-primary')

    rerender(<Progress variant="secondary" value={50} />)
    progress = container.querySelector('progress')
    expect(progress).toHaveClass('progress-secondary')
  })

  it('sets max to 100 by default', () => {
    const { container } = render(<Progress value={50} />)
    expect(container.querySelector('progress')).toHaveAttribute('max', '100')
  })

  it('renders as progress element', () => {
    const { container } = render(<Progress value={50} />)
    expect(container.querySelector('progress')).toBeInTheDocument()
  })
})

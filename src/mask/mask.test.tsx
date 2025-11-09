import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Mask } from './mask'

describe('Mask', () => {
  it('applies base mask class', () => {
    const { container } = render(<Mask src="test.jpg" alt="Test" />)
    expect(container.firstChild).toHaveClass('mask')
  })

  it('applies shape classes correctly', () => {
    const shapes = [
      'squircle',
      'heart',
      'hexagon',
      'hexagon-2',
      'decagon',
      'pentagon',
      'diamond',
      'square',
      'circle',
      'parallelogram',
      'parallelogram-2',
      'parallelogram-3',
      'parallelogram-4',
      'star',
      'star-2',
      'triangle',
      'triangle-2',
      'triangle-3',
      'triangle-4',
    ] as const

    for (const shape of shapes) {
      const { container } = render(<Mask shape={shape} src="test.jpg" alt="Test" />)
      expect(container.firstChild).toHaveClass('mask', `mask-${shape}`)
    }
  })

  it('applies half classes correctly', () => {
    const halves = ['half-1', 'half-2'] as const

    for (const half of halves) {
      const { container } = render(<Mask half={half} src="test.jpg" alt="Test" />)
      expect(container.firstChild).toHaveClass('mask', `mask-${half}`)
    }
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Mask className="custom-class" src="test.jpg" alt="Test" />)
    expect(container.firstChild).toHaveClass('mask', 'custom-class')
  })

  it('passes additional props to img element', () => {
    const { container } = render(<Mask src="test.jpg" alt="Test" data-testid="mask" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'mask')
    expect(container.firstChild).toHaveAttribute('src', 'test.jpg')
    expect(container.firstChild).toHaveAttribute('alt', 'Test')
  })
})

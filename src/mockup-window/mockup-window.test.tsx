import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MockupWindow } from './mockup-window'

describe('MockupWindow', () => {
  it('renders children correctly', () => {
    render(
      <MockupWindow>
        <div>Test content</div>
      </MockupWindow>,
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies mockup-window class', () => {
    const { container } = render(<MockupWindow>Content</MockupWindow>)
    expect(container.firstChild).toHaveClass('mockup-window')
  })

  it('renders as div element', () => {
    const { container } = render(<MockupWindow>Content</MockupWindow>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<MockupWindow className="custom-class">Content</MockupWindow>)
    expect(container.firstChild).toHaveClass('mockup-window', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<MockupWindow data-testid="window">Content</MockupWindow>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'window')
  })
})

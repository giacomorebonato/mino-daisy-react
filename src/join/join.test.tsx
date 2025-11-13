import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Join } from './join'

describe('Join', () => {
  it('renders children correctly', () => {
    render(
      <Join>
        <button type="button" className="btn join-item">
          Button 1
        </button>
        <button type="button" className="btn join-item">
          Button 2
        </button>
      </Join>,
    )
    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
  })

  it('applies join class', () => {
    const { container } = render(
      <Join>
        <button type="button" className="btn join-item">
          Button
        </button>
      </Join>,
    )
    expect(container.firstChild).toHaveClass('join')
  })

  it('renders as div element', () => {
    const { container } = render(
      <Join>
        <button type="button">Button</button>
      </Join>,
    )
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('applies orientation classes', () => {
    const { container, rerender } = render(
      <Join orientation="horizontal">
        <button type="button">Button</button>
      </Join>,
    )
    expect(container.firstChild).toHaveClass('join-horizontal')

    rerender(
      <Join orientation="vertical">
        <button type="button">Button</button>
      </Join>,
    )
    expect(container.firstChild).toHaveClass('join-vertical')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Join className="custom-class">
        <button type="button">Button</button>
      </Join>,
    )
    expect(container.firstChild).toHaveClass('join', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(
      <Join data-testid="join">
        <button type="button">Button</button>
      </Join>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'join')
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { MockupPhone, MockupPhoneCamera, MockupPhoneDisplay } from './mockup-phone'

describe('MockupPhone', () => {
  it('renders children correctly', () => {
    render(
      <MockupPhone>
        <div>Test content</div>
      </MockupPhone>,
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies mockup-phone class', () => {
    const { container } = render(<MockupPhone>Content</MockupPhone>)
    expect(container.firstChild).toHaveClass('mockup-phone')
  })

  it('renders as div element', () => {
    const { container } = render(<MockupPhone>Content</MockupPhone>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<MockupPhone className="custom-class">Content</MockupPhone>)
    expect(container.firstChild).toHaveClass('mockup-phone', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<MockupPhone data-testid="phone">Content</MockupPhone>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'phone')
  })
})

describe('MockupPhoneCamera', () => {
  it('applies mockup-phone-camera class', () => {
    const { container } = render(<MockupPhoneCamera />)
    expect(container.firstChild).toHaveClass('mockup-phone-camera')
  })

  it('renders as div element', () => {
    const { container } = render(<MockupPhoneCamera />)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<MockupPhoneCamera className="custom-class" />)
    expect(container.firstChild).toHaveClass('mockup-phone-camera', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<MockupPhoneCamera data-testid="camera" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'camera')
  })
})

describe('MockupPhoneDisplay', () => {
  it('renders children correctly', () => {
    render(<MockupPhoneDisplay>Display content</MockupPhoneDisplay>)
    expect(screen.getByText('Display content')).toBeInTheDocument()
  })

  it('applies mockup-phone-display class', () => {
    const { container } = render(<MockupPhoneDisplay>Content</MockupPhoneDisplay>)
    expect(container.firstChild).toHaveClass('mockup-phone-display')
  })

  it('renders as div element', () => {
    const { container } = render(<MockupPhoneDisplay>Content</MockupPhoneDisplay>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <MockupPhoneDisplay className="custom-class">Content</MockupPhoneDisplay>,
    )
    expect(container.firstChild).toHaveClass('mockup-phone-display', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(
      <MockupPhoneDisplay data-testid="display">Content</MockupPhoneDisplay>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'display')
  })
})

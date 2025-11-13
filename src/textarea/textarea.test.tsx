import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Textarea } from './textarea'

describe('Textarea', () => {
  it('renders with placeholder', () => {
    render(<Textarea placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Textarea variant="primary" placeholder="Primary textarea" />)
    expect(screen.getByPlaceholderText('Primary textarea')).toHaveClass('textarea-primary')
  })

  it('applies size classes', () => {
    render(<Textarea size="lg" placeholder="Large textarea" />)
    expect(screen.getByPlaceholderText('Large textarea')).toHaveClass('textarea-lg')
  })

  it('applies ghost style when ghost prop is true', () => {
    render(<Textarea ghost placeholder="Ghost textarea" />)
    expect(screen.getByPlaceholderText('Ghost textarea')).toHaveClass('textarea-ghost')
  })

  it('disables textarea when disabled prop is true', () => {
    render(<Textarea disabled placeholder="Disabled textarea" />)
    expect(screen.getByPlaceholderText('Disabled textarea')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<Textarea className="custom-class" placeholder="Custom textarea" />)
    const textarea = screen.getByPlaceholderText('Custom textarea')
    expect(textarea).toHaveClass('textarea')
    expect(textarea).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Textarea ref={ref} placeholder="Ref textarea" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('renders with default value', () => {
    render(<Textarea defaultValue="Default content" />)
    expect(screen.getByText('Default content')).toBeInTheDocument()
  })
})

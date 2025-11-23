import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Input className="input-primary" placeholder="Primary input" />)
    expect(screen.getByPlaceholderText('Primary input')).toHaveClass('input-primary')
  })

  it('applies size classes', () => {
    render(<Input className="input-lg" placeholder="Large input" />)
    expect(screen.getByPlaceholderText('Large input')).toHaveClass('input-lg')
  })

  it('applies ghost style when ghost prop is true', () => {
    render(<Input className="input-ghost" placeholder="Ghost input" />)
    expect(screen.getByPlaceholderText('Ghost input')).toHaveClass('input-ghost')
  })

  it('disables input when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled input" />)
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<Input className="custom-class" placeholder="Custom input" />)
    const input = screen.getByPlaceholderText('Custom input')
    expect(input).toHaveClass('input')
    expect(input).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Input ref={ref} placeholder="Ref input" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('supports different input types', () => {
    render(<Input type="email" placeholder="Email input" />)
    expect(screen.getByPlaceholderText('Email input')).toHaveAttribute('type', 'email')
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Radio } from './radio'

describe('Radio', () => {
  it('renders radio button', () => {
    render(<Radio data-testid="radio" />)
    const radio = screen.getByTestId('radio')
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveAttribute('type', 'radio')
  })

  it('applies variant classes', () => {
    render(<Radio className="radio-primary" data-testid="radio" />)
    expect(screen.getByTestId('radio')).toHaveClass('radio-primary')
  })

  it('applies size classes', () => {
    render(<Radio className="radio-lg" data-testid="radio" />)
    expect(screen.getByTestId('radio')).toHaveClass('radio-lg')
  })

  it('is checked when checked prop is true', () => {
    render(<Radio checked readOnly data-testid="radio" />)
    expect(screen.getByTestId('radio')).toBeChecked()
  })

  it('is unchecked by default', () => {
    render(<Radio data-testid="radio" />)
    expect(screen.getByTestId('radio')).not.toBeChecked()
  })

  it('disables radio when disabled prop is true', () => {
    render(<Radio disabled data-testid="radio" />)
    expect(screen.getByTestId('radio')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<Radio className="custom-class" data-testid="radio" />)
    const radio = screen.getByTestId('radio')
    expect(radio).toHaveClass('radio')
    expect(radio).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Radio ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('supports name attribute for grouping', () => {
    render(<Radio name="group1" data-testid="radio" />)
    expect(screen.getByTestId('radio')).toHaveAttribute('name', 'group1')
  })
})

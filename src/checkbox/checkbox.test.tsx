import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('renders checkbox', () => {
    render(<Checkbox data-testid="checkbox" />)
    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('applies variant classes', () => {
    render(<Checkbox className="checkbox-primary" data-testid="checkbox" />)
    expect(screen.getByTestId('checkbox')).toHaveClass('checkbox-primary')
  })

  it('applies size classes', () => {
    render(<Checkbox className="checkbox-lg" data-testid="checkbox" />)
    expect(screen.getByTestId('checkbox')).toHaveClass('checkbox-lg')
  })

  it('is checked when checked prop is true', () => {
    render(<Checkbox checked readOnly data-testid="checkbox" />)
    expect(screen.getByTestId('checkbox')).toBeChecked()
  })

  it('is unchecked by default', () => {
    render(<Checkbox data-testid="checkbox" />)
    expect(screen.getByTestId('checkbox')).not.toBeChecked()
  })

  it('disables checkbox when disabled prop is true', () => {
    render(<Checkbox disabled data-testid="checkbox" />)
    expect(screen.getByTestId('checkbox')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<Checkbox className="custom-class" data-testid="checkbox" />)
    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('checkbox')
    expect(checkbox).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Checkbox ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})

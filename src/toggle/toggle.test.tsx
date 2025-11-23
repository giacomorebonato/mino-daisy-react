import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Toggle } from './toggle'

describe('Toggle', () => {
  it('renders toggle', () => {
    render(<Toggle data-testid="toggle" />)
    const toggle = screen.getByTestId('toggle')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('type', 'checkbox')
  })

  it('applies variant classes', () => {
    render(<Toggle className="toggle-primary" data-testid="toggle" />)
    expect(screen.getByTestId('toggle')).toHaveClass('toggle-primary')
  })

  it('applies size classes', () => {
    render(<Toggle className="toggle-lg" data-testid="toggle" />)
    expect(screen.getByTestId('toggle')).toHaveClass('toggle-lg')
  })

  it('is checked when checked prop is true', () => {
    render(<Toggle checked readOnly data-testid="toggle" />)
    expect(screen.getByTestId('toggle')).toBeChecked()
  })

  it('is unchecked by default', () => {
    render(<Toggle data-testid="toggle" />)
    expect(screen.getByTestId('toggle')).not.toBeChecked()
  })

  it('disables toggle when disabled prop is true', () => {
    render(<Toggle disabled data-testid="toggle" />)
    expect(screen.getByTestId('toggle')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<Toggle className="custom-class" data-testid="toggle" />)
    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveClass('toggle')
    expect(toggle).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Toggle ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})

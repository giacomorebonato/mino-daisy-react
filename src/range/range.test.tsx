import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Range } from './range'

describe('Range', () => {
  it('renders range slider', () => {
    render(<Range data-testid="range" />)
    const range = screen.getByTestId('range')
    expect(range).toBeInTheDocument()
    expect(range).toHaveAttribute('type', 'range')
  })

  it('applies variant classes', () => {
    render(<Range className="range-primary" data-testid="range" />)
    expect(screen.getByTestId('range')).toHaveClass('range-primary')
  })

  it('applies size classes', () => {
    render(<Range className="range-lg" data-testid="range" />)
    expect(screen.getByTestId('range')).toHaveClass('range-lg')
  })

  it('accepts custom min and max values', () => {
    render(<Range min={10} max={50} data-testid="range" />)
    const range = screen.getByTestId('range')
    expect(range).toHaveAttribute('min', '10')
    expect(range).toHaveAttribute('max', '50')
  })

  it('accepts default value', () => {
    render(<Range defaultValue={30} data-testid="range" />)
    expect(screen.getByTestId('range')).toHaveValue('30')
  })

  it('disables range when disabled prop is true', () => {
    render(<Range disabled data-testid="range" />)
    expect(screen.getByTestId('range')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<Range className="custom-class" data-testid="range" />)
    const range = screen.getByTestId('range')
    expect(range).toHaveClass('range')
    expect(range).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Range ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})

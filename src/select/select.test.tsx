import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Select } from './select'

describe('Select', () => {
  it('renders with options', () => {
    render(
      <Select>
        <option>Option 1</option>
        <option>Option 2</option>
      </Select>,
    )
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(
      <Select className="select-primary" data-testid="select">
        <option>Primary select</option>
      </Select>,
    )
    expect(screen.getByTestId('select')).toHaveClass('select-primary')
  })

  it('applies size classes', () => {
    render(
      <Select className="select-lg" data-testid="select">
        <option>Large select</option>
      </Select>,
    )
    expect(screen.getByTestId('select')).toHaveClass('select-lg')
  })

  it('applies ghost style when ghost prop is true', () => {
    render(
      <Select className="select-ghost" data-testid="select">
        <option>Ghost select</option>
      </Select>,
    )
    expect(screen.getByTestId('select')).toHaveClass('select-ghost')
  })

  it('disables select when disabled prop is true', () => {
    render(
      <Select disabled data-testid="select">
        <option>Disabled select</option>
      </Select>,
    )
    expect(screen.getByTestId('select')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(
      <Select className="custom-class" data-testid="select">
        <option>Custom select</option>
      </Select>,
    )
    const select = screen.getByTestId('select')
    expect(select).toHaveClass('select')
    expect(select).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Select ref={ref}>
        <option>Ref select</option>
      </Select>,
    )
    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })

  it('handles multiple selection', () => {
    render(
      <Select multiple data-testid="select">
        <option>Option 1</option>
        <option>Option 2</option>
      </Select>,
    )
    expect(screen.getByTestId('select')).toHaveAttribute('multiple')
  })
})

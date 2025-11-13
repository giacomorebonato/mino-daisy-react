import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Calendar } from './calendar'

describe('Calendar', () => {
  it('renders calendar component', () => {
    render(<Calendar data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('applies react-day-picker class', () => {
    const { container } = render(<Calendar data-testid="calendar" />)
    const dayPicker = container.querySelector('.react-day-picker')
    expect(dayPicker).toBeInTheDocument()
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Calendar className="custom-class" data-testid="calendar" />)
    const dayPicker = container.querySelector('.react-day-picker.custom-class')
    expect(dayPicker).toBeInTheDocument()
  })

  it('supports single selection mode', () => {
    const date = new Date(2024, 0, 15)
    render(<Calendar mode="single" selected={date} data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('supports multiple selection mode', () => {
    const dates = [new Date(2024, 0, 15), new Date(2024, 0, 20)]
    render(<Calendar mode="multiple" selected={dates} data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('supports range selection mode', () => {
    const range = { from: new Date(2024, 0, 15), to: new Date(2024, 0, 20) }
    render(<Calendar mode="range" selected={range} data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('accepts disabled prop', () => {
    render(<Calendar disabled data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('accepts custom month prop', () => {
    const month = new Date(2024, 5, 1) // June 2024
    render(<Calendar month={month} data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('forwards ref to wrapper div element', () => {
    const ref = { current: null }
    render(<Calendar ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('accepts numberOfMonths prop', () => {
    render(<Calendar numberOfMonths={2} data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })
})

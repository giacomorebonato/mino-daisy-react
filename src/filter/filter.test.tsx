import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Filter, FilterItem, FilterReset } from './filter'

describe('Filter', () => {
  it('renders as div by default', () => {
    const { container } = render(
      <Filter name="test">
        <FilterReset name="test" />
        <FilterItem name="test" aria-label="Option 1" />
      </Filter>,
    )
    expect(container.querySelector('div.filter')).toBeInTheDocument()
  })

  it('renders as form when asForm is true', () => {
    const { container } = render(
      <Filter name="test" asForm>
        <FilterReset name="test" asReset />
        <FilterItem name="test" aria-label="Option 1" />
      </Filter>,
    )
    expect(container.querySelector('form.filter')).toBeInTheDocument()
  })

  it('applies filter class', () => {
    const { container } = render(
      <Filter name="test">
        <FilterItem name="test" aria-label="Option 1" />
      </Filter>,
    )
    expect(container.firstChild).toHaveClass('filter')
  })

  it('merges custom className', () => {
    const { container } = render(
      <Filter name="test" className="custom">
        <FilterItem name="test" aria-label="Option 1" />
      </Filter>,
    )
    expect(container.firstChild).toHaveClass('filter')
    expect(container.firstChild).toHaveClass('custom')
  })
})

describe('FilterReset', () => {
  it('renders as radio with filter-reset class by default', () => {
    render(<FilterReset name="test" />)
    const input = screen.getByRole('radio')
    expect(input).toHaveClass('btn')
    expect(input).toHaveClass('filter-reset')
    expect(input).toHaveAttribute('type', 'radio')
    expect(input).toHaveAttribute('aria-label', '×')
  })

  it('renders as reset input when asReset is true', () => {
    render(<FilterReset name="test" asReset />)
    const input = screen.getByRole('button')
    expect(input).toHaveClass('btn')
    expect(input).toHaveClass('btn-square')
    expect(input).toHaveAttribute('type', 'reset')
    expect(input).toHaveAttribute('value', '×')
  })

  it('merges custom className', () => {
    render(<FilterReset name="test" className="custom" />)
    const input = screen.getByRole('radio')
    expect(input).toHaveClass('btn')
    expect(input).toHaveClass('filter-reset')
    expect(input).toHaveClass('custom')
  })
})

describe('FilterItem', () => {
  it('renders as radio input', () => {
    render(<FilterItem name="test" aria-label="Option 1" />)
    const input = screen.getByRole('radio')
    expect(input).toHaveAttribute('type', 'radio')
  })

  it('applies btn class', () => {
    render(<FilterItem name="test" aria-label="Option 1" />)
    const input = screen.getByRole('radio')
    expect(input).toHaveClass('btn')
  })

  it('applies aria-label', () => {
    render(<FilterItem name="test" aria-label="Test Option" />)
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument()
  })

  it('applies name attribute for grouping', () => {
    render(
      <>
        <FilterItem name="group1" aria-label="Option 1" />
        <FilterItem name="group1" aria-label="Option 2" />
      </>,
    )
    const options = screen.getAllByRole('radio')
    expect(options[0]).toHaveAttribute('name', 'group1')
    expect(options[1]).toHaveAttribute('name', 'group1')
  })

  it('merges custom className', () => {
    render(<FilterItem name="test" aria-label="Option 1" className="custom" />)
    const input = screen.getByRole('radio')
    expect(input).toHaveClass('btn')
    expect(input).toHaveClass('custom')
  })
})

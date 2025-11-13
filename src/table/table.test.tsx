import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Table } from './table'

describe('Table', () => {
  it('renders children correctly', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Cell content</td>
          </tr>
        </tbody>
      </Table>,
    )
    expect(screen.getByText('Cell content')).toBeInTheDocument()
  })

  it('applies table class', () => {
    const { container } = render(
      <Table>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    const table = container.querySelector('table')
    expect(table).toHaveClass('table')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(
      <Table size="xs">
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    let table = container.querySelector('table')
    expect(table).toHaveClass('table-xs')

    rerender(
      <Table size="sm">
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    table = container.querySelector('table')
    expect(table).toHaveClass('table-sm')

    rerender(
      <Table size="md">
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    table = container.querySelector('table')
    expect(table).toHaveClass('table-md')

    rerender(
      <Table size="lg">
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    table = container.querySelector('table')
    expect(table).toHaveClass('table-lg')
  })

  it('applies zebra class when zebra prop is true', () => {
    const { container } = render(
      <Table zebra>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    const table = container.querySelector('table')
    expect(table).toHaveClass('table-zebra')
  })

  it('applies pin-rows class when pinRows prop is true', () => {
    const { container } = render(
      <Table pinRows>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    const table = container.querySelector('table')
    expect(table).toHaveClass('table-pin-rows')
  })

  it('applies pin-cols class when pinCols prop is true', () => {
    const { container } = render(
      <Table pinCols>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    const table = container.querySelector('table')
    expect(table).toHaveClass('table-pin-cols')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Table className="custom-class">
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    const table = container.querySelector('table')
    expect(table).toHaveClass('table')
    expect(table).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Table data-testid="table-element">
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    expect(container.querySelector('table')).toHaveAttribute('data-testid', 'table-element')
  })

  it('renders as table element', () => {
    const { container } = render(
      <Table>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    )
    expect(container.querySelector('table')).toBeInTheDocument()
  })
})

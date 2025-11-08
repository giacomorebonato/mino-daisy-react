import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { List, ListRow } from './list'

describe('List', () => {
  it('renders children correctly', () => {
    render(
      <List>
        <ListRow>Item 1</ListRow>
        <ListRow>Item 2</ListRow>
      </List>,
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('renders as ul element', () => {
    render(
      <List data-testid="list">
        <ListRow>Item</ListRow>
      </List>,
    )
    expect(screen.getByTestId('list').tagName).toBe('UL')
  })

  it('applies list class', () => {
    render(
      <List data-testid="list">
        <ListRow>Item</ListRow>
      </List>,
    )
    expect(screen.getByTestId('list')).toHaveClass('list')
  })

  it('merges custom className', () => {
    render(
      <List className="custom" data-testid="list">
        <ListRow>Item</ListRow>
      </List>,
    )
    const list = screen.getByTestId('list')
    expect(list).toHaveClass('list')
    expect(list).toHaveClass('custom')
  })
})

describe('ListRow', () => {
  it('renders children correctly', () => {
    render(<ListRow>Row content</ListRow>)
    expect(screen.getByText('Row content')).toBeInTheDocument()
  })

  it('renders as li element', () => {
    render(<ListRow data-testid="row">Item</ListRow>)
    expect(screen.getByTestId('row').tagName).toBe('LI')
  })

  it('applies list-row class', () => {
    render(<ListRow>Item</ListRow>)
    expect(screen.getByText('Item')).toHaveClass('list-row')
  })

  it('applies list-col-wrap class when colWrap is true', () => {
    render(<ListRow colWrap>Item</ListRow>)
    expect(screen.getByText('Item')).toHaveClass('list-col-wrap')
  })

  it('applies list-col-grow class when colGrow is true', () => {
    render(<ListRow colGrow>Item</ListRow>)
    expect(screen.getByText('Item')).toHaveClass('list-col-grow')
  })

  it('merges custom className', () => {
    render(<ListRow className="custom">Item</ListRow>)
    const row = screen.getByText('Item')
    expect(row).toHaveClass('list-row')
    expect(row).toHaveClass('custom')
  })

  it('applies multiple modifiers together', () => {
    render(
      <ListRow colWrap colGrow>
        Item
      </ListRow>,
    )
    const row = screen.getByText('Item')
    expect(row).toHaveClass('list-col-wrap')
    expect(row).toHaveClass('list-col-grow')
  })
})

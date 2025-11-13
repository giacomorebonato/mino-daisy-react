import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Diff, DiffItem, DiffResizer } from './diff'

describe('Diff', () => {
  it('renders children correctly', () => {
    render(
      <Diff>
        <div>Diff Content</div>
      </Diff>,
    )
    expect(screen.getByText('Diff Content')).toBeInTheDocument()
  })

  it('applies base diff class', () => {
    const { container } = render(<Diff>Content</Diff>)
    expect(container.firstChild).toHaveClass('diff')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Diff className="custom-class">Content</Diff>)
    expect(container.firstChild).toHaveClass('diff', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Diff data-testid="diff">Content</Diff>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'diff')
  })
})

describe('DiffItem', () => {
  it('renders children correctly', () => {
    render(
      <DiffItem item={1}>
        <div>Item Content</div>
      </DiffItem>,
    )
    expect(screen.getByText('Item Content')).toBeInTheDocument()
  })

  it('applies diff-item-1 class when item is 1', () => {
    const { container } = render(<DiffItem item={1}>Content</DiffItem>)
    expect(container.firstChild).toHaveClass('diff-item-1')
  })

  it('applies diff-item-2 class when item is 2', () => {
    const { container } = render(<DiffItem item={2}>Content</DiffItem>)
    expect(container.firstChild).toHaveClass('diff-item-2')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <DiffItem item={1} className="custom-class">
        Content
      </DiffItem>,
    )
    expect(container.firstChild).toHaveClass('diff-item-1', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(
      <DiffItem item={1} data-testid="item">
        Content
      </DiffItem>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'item')
  })
})

describe('DiffResizer', () => {
  it('applies base diff-resizer class', () => {
    const { container } = render(<DiffResizer />)
    expect(container.firstChild).toHaveClass('diff-resizer')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<DiffResizer className="custom-class" />)
    expect(container.firstChild).toHaveClass('diff-resizer', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<DiffResizer data-testid="resizer" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'resizer')
  })
})

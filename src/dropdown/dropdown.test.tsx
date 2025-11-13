import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Dropdown } from './dropdown'

describe('Dropdown', () => {
  it('renders trigger and content', () => {
    render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={
          <ul>
            <li>Item 1</li>
          </ul>
        }
      />,
    )

    expect(screen.getByText('Click me')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('applies base dropdown class', () => {
    const { container } = render(
      <Dropdown trigger={<button type="button">Click me</button>} content={<div>Content</div>} />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('dropdown')
  })

  it('applies placement classes', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        placement="end"
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('dropdown-end')
  })

  it('applies position classes', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        position="top"
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('dropdown-top')
  })

  it('applies hover modifier class', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        hover
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('dropdown-hover')
  })

  it('applies forceOpen modifier class', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        forceOpen
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('dropdown-open')
  })

  it('applies custom className to details element', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        className="custom-class"
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('custom-class')
  })

  it('applies custom contentClassName to content wrapper', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        contentClassName="custom-content"
      />,
    )

    const content = container.querySelector('.dropdown-content')
    expect(content).toHaveClass('custom-content')
  })

  it('combines multiple placement and position classes', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        placement="end"
        position="top"
        hover
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveClass('dropdown')
    expect(details).toHaveClass('dropdown-end')
    expect(details).toHaveClass('dropdown-top')
    expect(details).toHaveClass('dropdown-hover')
  })

  it('forwards ref to details element', () => {
    const ref = { current: null }
    render(
      <Dropdown
        ref={ref}
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
      />,
    )

    expect(ref.current).toBeInstanceOf(HTMLDetailsElement)
  })

  it('spreads additional props to details element', () => {
    const { container } = render(
      <Dropdown
        trigger={<button type="button">Click me</button>}
        content={<div>Content</div>}
        data-testid="dropdown"
        open
      />,
    )

    const details = container.querySelector('details')
    expect(details).toHaveAttribute('data-testid', 'dropdown')
    expect(details).toHaveAttribute('open')
  })
})

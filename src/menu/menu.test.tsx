import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Menu } from './menu'

describe('Menu', () => {
  it('renders children correctly', () => {
    render(
      <Menu>
        <li>
          <a href="#item1">Item 1</a>
        </li>
        <li>
          <a href="#item2">Item 2</a>
        </li>
      </Menu>,
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('applies menu class', () => {
    const { container } = render(
      <Menu>
        <li>Item</li>
      </Menu>,
    )
    const menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu')
  })

  it('applies horizontal class when horizontal prop is true', () => {
    const { container } = render(
      <Menu horizontal>
        <li>Item</li>
      </Menu>,
    )
    const menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu-horizontal')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(
      <Menu size="xs">
        <li>Item</li>
      </Menu>,
    )
    let menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu-xs')

    rerender(
      <Menu size="sm">
        <li>Item</li>
      </Menu>,
    )
    menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu-sm')

    rerender(
      <Menu size="md">
        <li>Item</li>
      </Menu>,
    )
    menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu-md')

    rerender(
      <Menu size="lg">
        <li>Item</li>
      </Menu>,
    )
    menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu-lg')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Menu className="custom-class">
        <li>Item</li>
      </Menu>,
    )
    const menu = container.querySelector('ul')
    expect(menu).toHaveClass('menu')
    expect(menu).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Menu data-testid="menu-element">
        <li>Item</li>
      </Menu>,
    )
    expect(container.querySelector('ul')).toHaveAttribute('data-testid', 'menu-element')
  })

  it('renders as ul element', () => {
    const { container } = render(
      <Menu>
        <li>Item</li>
      </Menu>,
    )
    expect(container.querySelector('ul')).toBeInTheDocument()
  })
})

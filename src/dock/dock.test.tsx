import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Dock, DockItem } from './dock'

describe('Dock', () => {
  it('renders children correctly', () => {
    render(
      <Dock>
        <DockItem>Home</DockItem>
        <DockItem>Profile</DockItem>
      </Dock>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('applies dock class', () => {
    const { container } = render(
      <Dock>
        <DockItem>Item</DockItem>
      </Dock>,
    )
    const dock = container.querySelector('div')
    expect(dock).toHaveClass('dock')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(
      <Dock size="sm">
        <DockItem>Item</DockItem>
      </Dock>,
    )
    let dock = container.querySelector('div')
    expect(dock).toHaveClass('dock-sm')

    rerender(
      <Dock size="md">
        <DockItem>Item</DockItem>
      </Dock>,
    )
    dock = container.querySelector('div')
    expect(dock).toHaveClass('dock-md')

    rerender(
      <Dock size="lg">
        <DockItem>Item</DockItem>
      </Dock>,
    )
    dock = container.querySelector('div')
    expect(dock).toHaveClass('dock-lg')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Dock className="custom-class">
        <DockItem>Item</DockItem>
      </Dock>,
    )
    const dock = container.querySelector('div')
    expect(dock).toHaveClass('dock')
    expect(dock).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Dock data-testid="dock-element">
        <DockItem>Item</DockItem>
      </Dock>,
    )
    expect(container.querySelector('div')).toHaveAttribute('data-testid', 'dock-element')
  })

  it('renders as div element', () => {
    const { container } = render(
      <Dock>
        <DockItem>Item</DockItem>
      </Dock>,
    )
    expect(container.querySelector('div')).toBeInTheDocument()
  })
})

describe('DockItem', () => {
  it('renders children correctly', () => {
    render(<DockItem>Item text</DockItem>)
    expect(screen.getByText('Item text')).toBeInTheDocument()
  })

  it('applies dock-active class when active prop is true', () => {
    const { container } = render(<DockItem active>Item</DockItem>)
    const item = container.querySelector('button')
    expect(item).toHaveClass('dock-active')
  })

  it('does not apply dock-active class when active prop is false', () => {
    const { container } = render(<DockItem active={false}>Item</DockItem>)
    const item = container.querySelector('button')
    expect(item).not.toHaveClass('dock-active')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <DockItem className="custom" active>
        Item
      </DockItem>,
    )
    const item = container.querySelector('button')
    expect(item).toHaveClass('dock-active')
    expect(item).toHaveClass('custom')
  })

  it('renders as button element', () => {
    const { container } = render(<DockItem>Item</DockItem>)
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('has type button by default', () => {
    const { container } = render(<DockItem>Item</DockItem>)
    const button = container.querySelector('button')
    expect(button).toHaveAttribute('type', 'button')
  })
})

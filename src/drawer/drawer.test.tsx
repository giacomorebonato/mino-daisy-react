import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerSide,
  DrawerToggle,
} from './drawer'

describe('Drawer', () => {
  it('renders children correctly', () => {
    render(<Drawer>Drawer content</Drawer>)
    expect(screen.getByText('Drawer content')).toBeInTheDocument()
  })

  it('applies drawer class', () => {
    const { container } = render(<Drawer>Content</Drawer>)
    const drawer = container.querySelector('div')
    expect(drawer).toHaveClass('drawer')
  })

  it('applies drawer-end class when end prop is true', () => {
    const { container } = render(<Drawer end>Content</Drawer>)
    const drawer = container.querySelector('div')
    expect(drawer).toHaveClass('drawer-end')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Drawer className="custom-class">Content</Drawer>,
    )
    const drawer = container.querySelector('div')
    expect(drawer).toHaveClass('drawer')
    expect(drawer).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Drawer data-testid="drawer-element">Content</Drawer>,
    )
    expect(container.querySelector('div')).toHaveAttribute(
      'data-testid',
      'drawer-element',
    )
  })
})

describe('DrawerToggle', () => {
  it('renders with required id', () => {
    const { container } = render(<DrawerToggle id="my-drawer" />)
    const toggle = container.querySelector('input')
    expect(toggle).toHaveAttribute('id', 'my-drawer')
  })

  it('applies drawer-toggle class', () => {
    const { container } = render(<DrawerToggle id="my-drawer" />)
    const toggle = container.querySelector('input')
    expect(toggle).toHaveClass('drawer-toggle')
  })

  it('has type checkbox', () => {
    const { container } = render(<DrawerToggle id="my-drawer" />)
    const toggle = container.querySelector('input')
    expect(toggle).toHaveAttribute('type', 'checkbox')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <DrawerToggle id="my-drawer" className="custom" />,
    )
    const toggle = container.querySelector('input')
    expect(toggle).toHaveClass('drawer-toggle')
    expect(toggle).toHaveClass('custom')
  })
})

describe('DrawerContent', () => {
  it('renders children correctly', () => {
    render(<DrawerContent>Content area</DrawerContent>)
    expect(screen.getByText('Content area')).toBeInTheDocument()
  })

  it('applies drawer-content class', () => {
    const { container } = render(<DrawerContent>Content</DrawerContent>)
    const content = container.querySelector('div')
    expect(content).toHaveClass('drawer-content')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <DrawerContent className="custom">Content</DrawerContent>,
    )
    const content = container.querySelector('div')
    expect(content).toHaveClass('drawer-content')
    expect(content).toHaveClass('custom')
  })
})

describe('DrawerSide', () => {
  it('renders children correctly', () => {
    render(<DrawerSide>Side content</DrawerSide>)
    expect(screen.getByText('Side content')).toBeInTheDocument()
  })

  it('applies drawer-side class', () => {
    const { container } = render(<DrawerSide>Content</DrawerSide>)
    const side = container.querySelector('div')
    expect(side).toHaveClass('drawer-side')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <DrawerSide className="custom">Content</DrawerSide>,
    )
    const side = container.querySelector('div')
    expect(side).toHaveClass('drawer-side')
    expect(side).toHaveClass('custom')
  })
})

describe('DrawerOverlay', () => {
  it('renders with required htmlFor', () => {
    const { container } = render(<DrawerOverlay htmlFor="my-drawer" />)
    const overlay = container.querySelector('label')
    expect(overlay).toHaveAttribute('for', 'my-drawer')
  })

  it('applies drawer-overlay class', () => {
    const { container } = render(<DrawerOverlay htmlFor="my-drawer" />)
    const overlay = container.querySelector('label')
    expect(overlay).toHaveClass('drawer-overlay')
  })

  it('has aria-label for accessibility', () => {
    const { container } = render(<DrawerOverlay htmlFor="my-drawer" />)
    const overlay = container.querySelector('label')
    expect(overlay).toHaveAttribute('aria-label', 'close sidebar')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <DrawerOverlay htmlFor="my-drawer" className="custom" />,
    )
    const overlay = container.querySelector('label')
    expect(overlay).toHaveClass('drawer-overlay')
    expect(overlay).toHaveClass('custom')
  })

  it('renders as label element', () => {
    const { container } = render(<DrawerOverlay htmlFor="my-drawer" />)
    expect(container.querySelector('label')).toBeInTheDocument()
  })
})

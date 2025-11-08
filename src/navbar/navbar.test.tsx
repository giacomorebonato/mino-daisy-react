import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar, NavbarCenter, NavbarEnd, NavbarStart } from './navbar'

describe('Navbar', () => {
  it('renders children correctly', () => {
    render(<Navbar>Navbar content</Navbar>)
    expect(screen.getByText('Navbar content')).toBeInTheDocument()
  })

  it('applies navbar class', () => {
    const { container } = render(<Navbar>Content</Navbar>)
    const navbar = container.querySelector('div')
    expect(navbar).toHaveClass('navbar')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Navbar className="custom-class">Content</Navbar>,
    )
    const navbar = container.querySelector('div')
    expect(navbar).toHaveClass('navbar')
    expect(navbar).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Navbar data-testid="navbar-element">Content</Navbar>,
    )
    expect(container.querySelector('div')).toHaveAttribute(
      'data-testid',
      'navbar-element',
    )
  })
})

describe('NavbarStart', () => {
  it('renders children correctly', () => {
    render(<NavbarStart>Start content</NavbarStart>)
    expect(screen.getByText('Start content')).toBeInTheDocument()
  })

  it('applies navbar-start class', () => {
    const { container } = render(<NavbarStart>Content</NavbarStart>)
    const section = container.querySelector('div')
    expect(section).toHaveClass('navbar-start')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <NavbarStart className="custom">Content</NavbarStart>,
    )
    const section = container.querySelector('div')
    expect(section).toHaveClass('navbar-start')
    expect(section).toHaveClass('custom')
  })
})

describe('NavbarCenter', () => {
  it('renders children correctly', () => {
    render(<NavbarCenter>Center content</NavbarCenter>)
    expect(screen.getByText('Center content')).toBeInTheDocument()
  })

  it('applies navbar-center class', () => {
    const { container } = render(<NavbarCenter>Content</NavbarCenter>)
    const section = container.querySelector('div')
    expect(section).toHaveClass('navbar-center')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <NavbarCenter className="custom">Content</NavbarCenter>,
    )
    const section = container.querySelector('div')
    expect(section).toHaveClass('navbar-center')
    expect(section).toHaveClass('custom')
  })
})

describe('NavbarEnd', () => {
  it('renders children correctly', () => {
    render(<NavbarEnd>End content</NavbarEnd>)
    expect(screen.getByText('End content')).toBeInTheDocument()
  })

  it('applies navbar-end class', () => {
    const { container } = render(<NavbarEnd>Content</NavbarEnd>)
    const section = container.querySelector('div')
    expect(section).toHaveClass('navbar-end')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <NavbarEnd className="custom">Content</NavbarEnd>,
    )
    const section = container.querySelector('div')
    expect(section).toHaveClass('navbar-end')
    expect(section).toHaveClass('custom')
  })
})

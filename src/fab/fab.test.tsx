import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Fab, FabClose, FabMainAction } from './fab'

describe('Fab', () => {
  it('renders children correctly', () => {
    render(
      <Fab>
        <button type="button">Action</button>
      </Fab>,
    )
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('applies base fab class', () => {
    const { container } = render(
      <Fab>
        <button type="button">Action</button>
      </Fab>,
    )
    expect(container.firstChild).toHaveClass('fab')
  })

  it('applies flower class when flower prop is true', () => {
    const { container } = render(
      <Fab flower>
        <button type="button">Action</button>
      </Fab>,
    )
    expect(container.firstChild).toHaveClass('fab-flower')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Fab className="custom-class">
        <button type="button">Action</button>
      </Fab>,
    )
    const fab = container.firstChild
    expect(fab).toHaveClass('fab')
    expect(fab).toHaveClass('custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(
      <Fab data-testid="fab-container">
        <button type="button">Action</button>
      </Fab>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'fab-container')
  })
})

describe('FabClose', () => {
  it('renders children correctly', () => {
    render(<FabClose>Close Button</FabClose>)
    expect(screen.getByText('Close Button')).toBeInTheDocument()
  })

  it('applies fab-close class', () => {
    const { container } = render(<FabClose>Close</FabClose>)
    expect(container.firstChild).toHaveClass('fab-close')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<FabClose className="custom">Close</FabClose>)
    const element = container.firstChild
    expect(element).toHaveClass('fab-close')
    expect(element).toHaveClass('custom')
  })
})

describe('FabMainAction', () => {
  it('renders children correctly', () => {
    render(<FabMainAction>Main Action</FabMainAction>)
    expect(screen.getByText('Main Action')).toBeInTheDocument()
  })

  it('applies fab-main-action class', () => {
    render(<FabMainAction>Main</FabMainAction>)
    expect(screen.getByText('Main')).toHaveClass('fab-main-action')
  })

  it('merges custom className with component classes', () => {
    render(<FabMainAction className="custom">Main</FabMainAction>)
    const button = screen.getByText('Main')
    expect(button).toHaveClass('fab-main-action')
    expect(button).toHaveClass('custom')
  })

  it('renders as a button element', () => {
    render(<FabMainAction>Main</FabMainAction>)
    const button = screen.getByText('Main')
    expect(button.tagName).toBe('BUTTON')
  })
})

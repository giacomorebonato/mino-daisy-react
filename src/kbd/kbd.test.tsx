import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Kbd } from './kbd'

describe('Kbd', () => {
  it('renders children correctly', () => {
    render(<Kbd>K</Kbd>)
    expect(screen.getByText('K')).toBeInTheDocument()
  })

  it('applies kbd class', () => {
    const { container } = render(<Kbd>K</Kbd>)
    expect(container.firstChild).toHaveClass('kbd')
  })

  it('renders as kbd element', () => {
    const { container } = render(<Kbd>K</Kbd>)
    expect(container.firstChild?.nodeName).toBe('KBD')
  })

  it('applies size classes', () => {
    const { container, rerender } = render(<Kbd size="xs">K</Kbd>)
    expect(container.firstChild).toHaveClass('kbd-xs')

    rerender(<Kbd size="sm">K</Kbd>)
    expect(container.firstChild).toHaveClass('kbd-sm')

    rerender(<Kbd size="md">K</Kbd>)
    expect(container.firstChild).toHaveClass('kbd-md')

    rerender(<Kbd size="lg">K</Kbd>)
    expect(container.firstChild).toHaveClass('kbd-lg')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Kbd className="custom-class">K</Kbd>)
    expect(container.firstChild).toHaveClass('kbd', 'custom-class')
  })

  it('passes additional props to kbd element', () => {
    const { container } = render(<Kbd data-testid="kbd">K</Kbd>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'kbd')
  })
})

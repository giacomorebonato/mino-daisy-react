import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Divider } from './divider'

describe('Divider', () => {
  it('renders children correctly', () => {
    render(<Divider>Divider Text</Divider>)
    expect(screen.getByText('Divider Text')).toBeInTheDocument()
  })

  it('applies base divider class', () => {
    const { container } = render(<Divider />)
    expect(container.firstChild).toHaveClass('divider')
  })

  it('applies variant classes correctly', () => {
    const variants: Array<
      'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    > = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']

    for (const variant of variants) {
      const { container } = render(<Divider variant={variant} />)
      expect(container.firstChild).toHaveClass('divider', `divider-${variant}`)
    }
  })

  it('applies divider-vertical class when vertical prop is true', () => {
    const { container } = render(<Divider vertical />)
    expect(container.firstChild).toHaveClass('divider', 'divider-vertical')
  })

  it('applies divider-horizontal class when horizontal prop is true', () => {
    const { container } = render(<Divider horizontal />)
    expect(container.firstChild).toHaveClass('divider', 'divider-horizontal')
  })

  it('applies divider-start class when start prop is true', () => {
    const { container } = render(<Divider start />)
    expect(container.firstChild).toHaveClass('divider', 'divider-start')
  })

  it('applies divider-end class when end prop is true', () => {
    const { container } = render(<Divider end />)
    expect(container.firstChild).toHaveClass('divider', 'divider-end')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Divider className="custom-class" />)
    expect(container.firstChild).toHaveClass('divider', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Divider data-testid="divider" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'divider')
  })
})

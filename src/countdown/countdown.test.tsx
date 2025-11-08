import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Countdown } from './countdown'

describe('Countdown', () => {
  it('renders with value', () => {
    render(<Countdown value={42} />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('applies countdown class', () => {
    render(<Countdown value={10} />)
    expect(screen.getByText('10').parentElement).toHaveClass('countdown')
  })

  it('sets CSS variable --value', () => {
    render(<Countdown value={99} />)
    const countdown = screen.getByText('99').parentElement
    expect(countdown).toHaveAttribute('style')
    expect(countdown?.getAttribute('style')).toContain('--value')
  })

  it('applies aria-live attribute', () => {
    render(<Countdown value={5} />)
    expect(screen.getByText('5').parentElement).toHaveAttribute(
      'aria-live',
      'polite',
    )
  })

  it('applies aria-label with value', () => {
    render(<Countdown value={25} />)
    expect(screen.getByText('25').parentElement).toHaveAttribute(
      'aria-label',
      '25',
    )
  })

  it('renders custom children when provided', () => {
    render(<Countdown value={100}>Custom</Countdown>)
    expect(screen.getByText('Custom')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<Countdown value={50} className="custom" />)
    const countdown = screen.getByText('50').parentElement
    expect(countdown).toHaveClass('countdown')
    expect(countdown).toHaveClass('custom')
  })

  it('merges custom style with --value', () => {
    render(<Countdown value={75} style={{ color: 'red' }} />)
    const countdown = screen.getByText('75').parentElement
    const style = countdown?.getAttribute('style') || ''
    expect(style).toContain('--value')
    expect(style).toContain('color')
  })
})

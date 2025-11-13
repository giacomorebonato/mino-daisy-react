import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Indicator, IndicatorItem } from './indicator'

describe('Indicator', () => {
  it('renders children correctly', () => {
    render(
      <Indicator>
        <div>Indicator Content</div>
      </Indicator>,
    )
    expect(screen.getByText('Indicator Content')).toBeInTheDocument()
  })

  it('applies base indicator class', () => {
    const { container } = render(<Indicator>Content</Indicator>)
    expect(container.firstChild).toHaveClass('indicator')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Indicator className="custom-class">Content</Indicator>)
    expect(container.firstChild).toHaveClass('indicator', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Indicator data-testid="indicator">Content</Indicator>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'indicator')
  })
})

describe('IndicatorItem', () => {
  it('renders children correctly', () => {
    render(<IndicatorItem>Badge</IndicatorItem>)
    expect(screen.getByText('Badge')).toBeInTheDocument()
  })

  it('applies base indicator-item class', () => {
    const { container } = render(<IndicatorItem>Badge</IndicatorItem>)
    expect(container.firstChild).toHaveClass('indicator-item')
  })

  it('applies horizontal position classes correctly', () => {
    const positions: Array<'start' | 'center' | 'end'> = ['start', 'center', 'end']

    for (const position of positions) {
      const { container } = render(<IndicatorItem horizontal={position}>Badge</IndicatorItem>)
      expect(container.firstChild).toHaveClass('indicator-item', `indicator-${position}`)
    }
  })

  it('applies vertical position classes correctly', () => {
    const positions: Array<'top' | 'middle' | 'bottom'> = ['top', 'middle', 'bottom']

    for (const position of positions) {
      const { container } = render(<IndicatorItem vertical={position}>Badge</IndicatorItem>)
      expect(container.firstChild).toHaveClass('indicator-item', `indicator-${position}`)
    }
  })

  it('applies both horizontal and vertical position classes', () => {
    const { container } = render(
      <IndicatorItem horizontal="start" vertical="top">
        Badge
      </IndicatorItem>,
    )
    expect(container.firstChild).toHaveClass('indicator-item', 'indicator-start', 'indicator-top')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<IndicatorItem className="custom-class">Badge</IndicatorItem>)
    expect(container.firstChild).toHaveClass('indicator-item', 'custom-class')
  })

  it('passes additional props to span element', () => {
    const { container } = render(<IndicatorItem data-testid="item">Badge</IndicatorItem>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'item')
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Tooltip, TooltipContent } from './tooltip'

describe('Tooltip', () => {
  it('renders children correctly', () => {
    render(<Tooltip tip="Test tooltip">Hover me</Tooltip>)
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('applies data-tip attribute', () => {
    render(<Tooltip tip="Test tooltip">Content</Tooltip>)
    const tooltip = screen.getByText('Content')
    expect(tooltip).toHaveAttribute('data-tip', 'Test tooltip')
  })

  it('applies position classes', () => {
    render(
      <Tooltip tip="Test" position="bottom">
        Content
      </Tooltip>,
    )
    expect(screen.getByText('Content')).toHaveClass('tooltip-bottom')
  })

  it('applies variant classes', () => {
    render(
      <Tooltip tip="Test" variant="primary">
        Content
      </Tooltip>,
    )
    expect(screen.getByText('Content')).toHaveClass('tooltip-primary')
  })

  it('applies open class when open prop is true', () => {
    render(
      <Tooltip tip="Test" open>
        Content
      </Tooltip>,
    )
    expect(screen.getByText('Content')).toHaveClass('tooltip-open')
  })

  it('merges custom className with component classes', () => {
    render(
      <Tooltip tip="Test" className="custom-class">
        Content
      </Tooltip>,
    )
    const tooltip = screen.getByText('Content')
    expect(tooltip).toHaveClass('tooltip')
    expect(tooltip).toHaveClass('custom-class')
  })

  it('applies multiple modifiers together', () => {
    render(
      <Tooltip tip="Test" position="right" variant="success" open>
        Content
      </Tooltip>,
    )
    const tooltip = screen.getByText('Content')
    expect(tooltip).toHaveClass('tooltip-right')
    expect(tooltip).toHaveClass('tooltip-success')
    expect(tooltip).toHaveClass('tooltip-open')
  })
})

describe('TooltipContent', () => {
  it('renders children correctly', () => {
    render(<TooltipContent>Custom content</TooltipContent>)
    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })

  it('applies tooltip-content class', () => {
    render(<TooltipContent>Content</TooltipContent>)
    expect(screen.getByText('Content')).toHaveClass('tooltip-content')
  })

  it('merges custom className', () => {
    render(<TooltipContent className="custom">Content</TooltipContent>)
    const content = screen.getByText('Content')
    expect(content).toHaveClass('tooltip-content')
    expect(content).toHaveClass('custom')
  })
})

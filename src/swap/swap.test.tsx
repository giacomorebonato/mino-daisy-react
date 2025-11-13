import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Swap, SwapIndeterminate, SwapOff, SwapOn } from './swap'

describe('Swap', () => {
  it('renders children correctly', () => {
    render(
      <Swap>
        <SwapOn>On</SwapOn>
        <SwapOff>Off</SwapOff>
      </Swap>,
    )
    expect(screen.getByText('On')).toBeInTheDocument()
    expect(screen.getByText('Off')).toBeInTheDocument()
  })

  it('renders as label element', () => {
    render(
      <Swap data-testid="swap">
        <SwapOn>On</SwapOn>
      </Swap>,
    )
    expect(screen.getByTestId('swap').tagName).toBe('LABEL')
  })

  it('applies active class when active prop is true', () => {
    render(
      <Swap active data-testid="swap">
        <SwapOn>On</SwapOn>
      </Swap>,
    )
    expect(screen.getByTestId('swap')).toHaveClass('swap-active')
  })

  it('applies rotate class when rotate prop is true', () => {
    render(
      <Swap rotate data-testid="swap">
        <SwapOn>On</SwapOn>
      </Swap>,
    )
    expect(screen.getByTestId('swap')).toHaveClass('swap-rotate')
  })

  it('applies flip class when flip prop is true', () => {
    render(
      <Swap flip data-testid="swap">
        <SwapOn>On</SwapOn>
      </Swap>,
    )
    expect(screen.getByTestId('swap')).toHaveClass('swap-flip')
  })

  it('merges custom className', () => {
    render(
      <Swap className="custom" data-testid="swap">
        <SwapOn>On</SwapOn>
      </Swap>,
    )
    const swap = screen.getByTestId('swap')
    expect(swap).toHaveClass('swap')
    expect(swap).toHaveClass('custom')
  })
})

describe('SwapOn', () => {
  it('renders children correctly', () => {
    render(<SwapOn>Active state</SwapOn>)
    expect(screen.getByText('Active state')).toBeInTheDocument()
  })

  it('applies swap-on class', () => {
    render(<SwapOn>On</SwapOn>)
    expect(screen.getByText('On')).toHaveClass('swap-on')
  })

  it('merges custom className', () => {
    render(<SwapOn className="custom">On</SwapOn>)
    const element = screen.getByText('On')
    expect(element).toHaveClass('swap-on')
    expect(element).toHaveClass('custom')
  })
})

describe('SwapOff', () => {
  it('renders children correctly', () => {
    render(<SwapOff>Inactive state</SwapOff>)
    expect(screen.getByText('Inactive state')).toBeInTheDocument()
  })

  it('applies swap-off class', () => {
    render(<SwapOff>Off</SwapOff>)
    expect(screen.getByText('Off')).toHaveClass('swap-off')
  })

  it('merges custom className', () => {
    render(<SwapOff className="custom">Off</SwapOff>)
    const element = screen.getByText('Off')
    expect(element).toHaveClass('swap-off')
    expect(element).toHaveClass('custom')
  })
})

describe('SwapIndeterminate', () => {
  it('renders children correctly', () => {
    render(<SwapIndeterminate>Indeterminate state</SwapIndeterminate>)
    expect(screen.getByText('Indeterminate state')).toBeInTheDocument()
  })

  it('applies swap-indeterminate class', () => {
    render(<SwapIndeterminate>Indeterminate</SwapIndeterminate>)
    expect(screen.getByText('Indeterminate')).toHaveClass('swap-indeterminate')
  })

  it('merges custom className', () => {
    render(<SwapIndeterminate className="custom">Indeterminate</SwapIndeterminate>)
    const element = screen.getByText('Indeterminate')
    expect(element).toHaveClass('swap-indeterminate')
    expect(element).toHaveClass('custom')
  })
})

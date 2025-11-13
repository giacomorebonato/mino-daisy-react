import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Validator, ValidatorHint } from './validator'

describe('Validator', () => {
  it('renders input correctly', () => {
    render(<Validator placeholder="Enter username" />)
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument()
  })

  it('applies validator and input classes', () => {
    render(<Validator data-testid="validator-input" />)
    const input = screen.getByTestId('validator-input')
    expect(input).toHaveClass('input', 'validator')
  })

  it('renders with hint text', () => {
    render(<Validator hint="Must be at least 3 characters" />)
    expect(screen.getByText('Must be at least 3 characters')).toBeInTheDocument()
  })

  it('applies hint class to hint paragraph', () => {
    const { container } = render(<Validator hint="Hint text" />)
    const hint = container.querySelector('.validator-hint')
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveTextContent('Hint text')
  })

  it('applies variant classes', () => {
    render(<Validator variant="error" data-testid="validator-input" />)
    expect(screen.getByTestId('validator-input')).toHaveClass('input-error')
  })

  it('applies size classes', () => {
    render(<Validator size="lg" data-testid="validator-input" />)
    expect(screen.getByTestId('validator-input')).toHaveClass('input-lg')
  })

  it('applies ghost class', () => {
    render(<Validator ghost data-testid="validator-input" />)
    expect(screen.getByTestId('validator-input')).toHaveClass('input-ghost')
  })

  it('merges custom className with component classes', () => {
    render(<Validator className="custom-class" data-testid="validator-input" />)
    expect(screen.getByTestId('validator-input')).toHaveClass('input', 'validator', 'custom-class')
  })

  it('forwards ref to input element', () => {
    const ref = { current: null }
    render(<Validator ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('supports HTML5 validation attributes', () => {
    render(
      <Validator
        required
        minLength={3}
        maxLength={30}
        pattern="[A-Za-z]+"
        data-testid="validator-input"
      />,
    )
    const input = screen.getByTestId('validator-input')
    expect(input).toHaveAttribute('required')
    expect(input).toHaveAttribute('minlength', '3')
    expect(input).toHaveAttribute('maxlength', '30')
    expect(input).toHaveAttribute('pattern', '[A-Za-z]+')
  })
})

describe('ValidatorHint', () => {
  it('renders children correctly', () => {
    render(<ValidatorHint>Hint text</ValidatorHint>)
    expect(screen.getByText('Hint text')).toBeInTheDocument()
  })

  it('applies validator-hint class', () => {
    const { container } = render(<ValidatorHint>Hint</ValidatorHint>)
    expect(container.firstChild).toHaveClass('validator-hint')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<ValidatorHint className="custom-hint">Hint</ValidatorHint>)
    expect(container.firstChild).toHaveClass('validator-hint', 'custom-hint')
  })

  it('renders as p element', () => {
    const { container } = render(<ValidatorHint>Hint</ValidatorHint>)
    expect(container.firstChild?.nodeName).toBe('P')
  })
})

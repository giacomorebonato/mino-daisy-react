import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { FormControl, Hint, Legend } from './form-control'

describe('FormControl', () => {
  it('renders children correctly', () => {
    render(<FormControl>FormControl content</FormControl>)
    expect(screen.getByText('FormControl content')).toBeInTheDocument()
  })

  it('applies fieldset class', () => {
    const { container } = render(<FormControl>Content</FormControl>)
    const fieldset = container.querySelector('fieldset')
    expect(fieldset).toHaveClass('fieldset')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<FormControl className="custom-class">Content</FormControl>)
    const fieldset = container.querySelector('fieldset')
    expect(fieldset).toHaveClass('fieldset')
    expect(fieldset).toHaveClass('custom-class')
  })

  it('is disabled when disabled prop is true', () => {
    const { container } = render(<FormControl disabled>Content</FormControl>)
    const fieldset = container.querySelector('fieldset')
    expect(fieldset).toBeDisabled()
  })

  it('renders as fieldset element', () => {
    const { container } = render(<FormControl>Content</FormControl>)
    expect(container.querySelector('fieldset')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    const { container } = render(
      <FormControl data-testid="form-control-element">Content</FormControl>,
    )
    expect(container.querySelector('fieldset')).toHaveAttribute(
      'data-testid',
      'form-control-element',
    )
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<FormControl ref={ref}>Content</FormControl>)
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement)
  })
})

describe('Legend', () => {
  it('renders children correctly', () => {
    render(
      <FormControl>
        <Legend>Label text</Legend>
      </FormControl>,
    )
    expect(screen.getByText('Label text')).toBeInTheDocument()
  })

  it('applies fieldset-legend class', () => {
    const { container } = render(
      <FormControl>
        <Legend>Label</Legend>
      </FormControl>,
    )
    const legend = container.querySelector('legend')
    expect(legend).toHaveClass('fieldset-legend')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <FormControl>
        <Legend className="custom">Label</Legend>
      </FormControl>,
    )
    const legend = container.querySelector('legend')
    expect(legend).toHaveClass('fieldset-legend')
    expect(legend).toHaveClass('custom')
  })

  it('renders as legend element', () => {
    const { container } = render(
      <FormControl>
        <Legend>Label</Legend>
      </FormControl>,
    )
    expect(container.querySelector('legend')).toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <FormControl>
        <Legend ref={ref}>Label</Legend>
      </FormControl>,
    )
    expect(ref.current).toBeInstanceOf(HTMLLegendElement)
  })
})

describe('Hint', () => {
  it('renders children correctly', () => {
    render(
      <FormControl>
        <Hint>Hint text</Hint>
      </FormControl>,
    )
    expect(screen.getByText('Hint text')).toBeInTheDocument()
  })

  it('applies label class', () => {
    const { container } = render(
      <FormControl>
        <Hint>Hint</Hint>
      </FormControl>,
    )
    const hint = container.querySelector('p')
    expect(hint).toHaveClass('label')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <FormControl>
        <Hint className="text-error">Hint</Hint>
      </FormControl>,
    )
    const hint = container.querySelector('p')
    expect(hint).toHaveClass('label')
    expect(hint).toHaveClass('text-error')
  })

  it('renders as p element', () => {
    const { container } = render(
      <FormControl>
        <Hint>Hint</Hint>
      </FormControl>,
    )
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('applies min-h class when reserveSpace is true', () => {
    const { container } = render(
      <FormControl>
        <Hint reserveSpace>Hint</Hint>
      </FormControl>,
    )
    const hint = container.querySelector('p')
    expect(hint).toHaveClass('min-h-5')
  })

  it('does not apply min-h class when reserveSpace is false', () => {
    const { container } = render(
      <FormControl>
        <Hint>Hint</Hint>
      </FormControl>,
    )
    const hint = container.querySelector('p')
    expect(hint).not.toHaveClass('min-h-5')
  })

  it('renders empty content when reserveSpace is true', () => {
    const { container } = render(
      <FormControl>
        <Hint reserveSpace />
      </FormControl>,
    )
    const hint = container.querySelector('p')
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveClass('min-h-5')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <FormControl>
        <Hint ref={ref}>Hint</Hint>
      </FormControl>,
    )
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })
})

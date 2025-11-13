import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Fieldset, FieldsetLegend } from './fieldset'

describe('Fieldset', () => {
  it('renders children correctly', () => {
    render(<Fieldset>Fieldset content</Fieldset>)
    expect(screen.getByText('Fieldset content')).toBeInTheDocument()
  })

  it('applies fieldset class', () => {
    const { container } = render(<Fieldset>Content</Fieldset>)
    const fieldset = container.querySelector('fieldset')
    expect(fieldset).toHaveClass('fieldset')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Fieldset className="custom-class">Content</Fieldset>)
    const fieldset = container.querySelector('fieldset')
    expect(fieldset).toHaveClass('fieldset')
    expect(fieldset).toHaveClass('custom-class')
  })

  it('is disabled when disabled prop is true', () => {
    const { container } = render(<Fieldset disabled>Content</Fieldset>)
    const fieldset = container.querySelector('fieldset')
    expect(fieldset).toBeDisabled()
  })

  it('renders as fieldset element', () => {
    const { container } = render(<Fieldset>Content</Fieldset>)
    expect(container.querySelector('fieldset')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    const { container } = render(<Fieldset data-testid="fieldset-element">Content</Fieldset>)
    expect(container.querySelector('fieldset')).toHaveAttribute('data-testid', 'fieldset-element')
  })
})

describe('FieldsetLegend', () => {
  it('renders children correctly', () => {
    render(
      <Fieldset>
        <FieldsetLegend>Legend text</FieldsetLegend>
      </Fieldset>,
    )
    expect(screen.getByText('Legend text')).toBeInTheDocument()
  })

  it('applies fieldset-legend class', () => {
    const { container } = render(
      <Fieldset>
        <FieldsetLegend>Legend</FieldsetLegend>
      </Fieldset>,
    )
    const legend = container.querySelector('legend')
    expect(legend).toHaveClass('fieldset-legend')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Fieldset>
        <FieldsetLegend className="custom">Legend</FieldsetLegend>
      </Fieldset>,
    )
    const legend = container.querySelector('legend')
    expect(legend).toHaveClass('fieldset-legend')
    expect(legend).toHaveClass('custom')
  })

  it('renders as legend element', () => {
    const { container } = render(
      <Fieldset>
        <FieldsetLegend>Legend</FieldsetLegend>
      </Fieldset>,
    )
    expect(container.querySelector('legend')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Label } from './label'

describe('Label', () => {
  it('renders children correctly', () => {
    render(<Label>Label text</Label>)
    expect(screen.getByText('Label text')).toBeInTheDocument()
  })

  it('applies label class by default', () => {
    render(<Label>Default label</Label>)
    expect(screen.getByText('Default label')).toHaveClass('label')
  })

  it('applies floating-label class when floating prop is true', () => {
    render(<Label floating>Floating label</Label>)
    const label = screen.getByText('Floating label')
    expect(label).toHaveClass('floating-label')
    expect(label).not.toHaveClass('label')
  })

  it('merges custom className with component classes', () => {
    render(<Label className="custom-class">Custom label</Label>)
    const label = screen.getByText('Custom label')
    expect(label).toHaveClass('label')
    expect(label).toHaveClass('custom-class')
  })

  it('passes through htmlFor attribute', () => {
    render(<Label htmlFor="input-id">For input</Label>)
    expect(screen.getByText('For input')).toHaveAttribute('for', 'input-id')
  })

  it('renders with nested elements', () => {
    render(
      <Label>
        <span>Nested content</span>
        <input type="text" />
      </Label>,
    )
    expect(screen.getByText('Nested content')).toBeInTheDocument()
  })
})

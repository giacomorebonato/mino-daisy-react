import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Step, Steps } from './steps'

describe('Steps', () => {
  it('renders children correctly', () => {
    render(<Steps>Steps content</Steps>)
    expect(screen.getByText('Steps content')).toBeInTheDocument()
  })

  it('applies steps class', () => {
    const { container } = render(<Steps>Content</Steps>)
    expect(container.querySelector('ul')).toHaveClass('steps')
  })
})

describe('Step', () => {
  it('renders children correctly', () => {
    render(<Step>Step 1</Step>)
    expect(screen.getByText('Step 1')).toBeInTheDocument()
  })

  it('applies step class', () => {
    const { container } = render(<Step>Step</Step>)
    expect(container.querySelector('li')).toHaveClass('step')
  })

  it('applies variant classes', () => {
    const { container } = render(<Step className="step-primary">Step</Step>)
    expect(container.querySelector('li')).toHaveClass('step-primary')
  })

  it('applies data-content attribute', () => {
    const { container } = render(<Step dataContent="✓">Step</Step>)
    expect(container.querySelector('li')).toHaveAttribute('data-content', '✓')
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MockupCode } from './mockup-code'

describe('MockupCode', () => {
  it('renders children correctly', () => {
    render(
      <MockupCode>
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
      </MockupCode>,
    )
    expect(screen.getByText('npm i daisyui')).toBeInTheDocument()
  })

  it('applies mockup-code class', () => {
    const { container } = render(
      <MockupCode>
        <pre>
          <code>test</code>
        </pre>
      </MockupCode>,
    )
    expect(container.firstChild).toHaveClass('mockup-code')
  })

  it('renders as div element', () => {
    const { container } = render(
      <MockupCode>
        <pre>
          <code>test</code>
        </pre>
      </MockupCode>,
    )
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <MockupCode className="custom-class">
        <pre>
          <code>test</code>
        </pre>
      </MockupCode>,
    )
    expect(container.firstChild).toHaveClass('mockup-code', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(
      <MockupCode data-testid="code">
        <pre>
          <code>test</code>
        </pre>
      </MockupCode>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'code')
  })

  it('renders multiple pre elements', () => {
    render(
      <MockupCode>
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">">
          <code>Done!</code>
        </pre>
      </MockupCode>,
    )
    expect(screen.getByText('npm i daisyui')).toBeInTheDocument()
    expect(screen.getByText('installing...')).toBeInTheDocument()
    expect(screen.getByText('Done!')).toBeInTheDocument()
  })

  it('preserves data-prefix attributes on pre elements', () => {
    const { container } = render(
      <MockupCode>
        <pre data-prefix="$">
          <code>test</code>
        </pre>
      </MockupCode>,
    )
    const preElement = container.querySelector('pre')
    expect(preElement).toHaveAttribute('data-prefix', '$')
  })
})

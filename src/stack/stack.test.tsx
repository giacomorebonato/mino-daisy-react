import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stack } from './stack'

describe('Stack', () => {
  it('renders children correctly', () => {
    render(
      <Stack>
        <div>Stack Content</div>
      </Stack>,
    )
    expect(screen.getByText('Stack Content')).toBeInTheDocument()
  })

  it('applies base stack class', () => {
    const { container } = render(<Stack>Content</Stack>)
    expect(container.firstChild).toHaveClass('stack')
  })

  it('applies stack-top class when top prop is true', () => {
    const { container } = render(<Stack top>Content</Stack>)
    expect(container.firstChild).toHaveClass('stack', 'stack-top')
  })

  it('applies stack-bottom class when bottom prop is true', () => {
    const { container } = render(<Stack bottom>Content</Stack>)
    expect(container.firstChild).toHaveClass('stack', 'stack-bottom')
  })

  it('applies stack-start class when start prop is true', () => {
    const { container } = render(<Stack start>Content</Stack>)
    expect(container.firstChild).toHaveClass('stack', 'stack-start')
  })

  it('applies stack-end class when end prop is true', () => {
    const { container } = render(<Stack end>Content</Stack>)
    expect(container.firstChild).toHaveClass('stack', 'stack-end')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Stack className="custom-class">Content</Stack>)
    expect(container.firstChild).toHaveClass('stack', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Stack data-testid="stack">Content</Stack>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'stack')
  })
})

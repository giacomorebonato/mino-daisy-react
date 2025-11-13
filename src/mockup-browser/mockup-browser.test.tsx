import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { MockupBrowser, MockupBrowserToolbar } from './mockup-browser'

describe('MockupBrowser', () => {
  it('renders children correctly', () => {
    render(
      <MockupBrowser>
        <div>Test content</div>
      </MockupBrowser>,
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies mockup-browser class', () => {
    const { container } = render(<MockupBrowser>Content</MockupBrowser>)
    expect(container.firstChild).toHaveClass('mockup-browser')
  })

  it('renders as div element', () => {
    const { container } = render(<MockupBrowser>Content</MockupBrowser>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<MockupBrowser className="custom-class">Content</MockupBrowser>)
    expect(container.firstChild).toHaveClass('mockup-browser', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<MockupBrowser data-testid="browser">Content</MockupBrowser>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'browser')
  })
})

describe('MockupBrowserToolbar', () => {
  it('renders children correctly', () => {
    render(<MockupBrowserToolbar>Toolbar content</MockupBrowserToolbar>)
    expect(screen.getByText('Toolbar content')).toBeInTheDocument()
  })

  it('applies mockup-browser-toolbar class', () => {
    const { container } = render(<MockupBrowserToolbar>Content</MockupBrowserToolbar>)
    expect(container.firstChild).toHaveClass('mockup-browser-toolbar')
  })

  it('renders as div element', () => {
    const { container } = render(<MockupBrowserToolbar>Content</MockupBrowserToolbar>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <MockupBrowserToolbar className="custom-class">Content</MockupBrowserToolbar>,
    )
    expect(container.firstChild).toHaveClass('mockup-browser-toolbar', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(
      <MockupBrowserToolbar data-testid="toolbar">Content</MockupBrowserToolbar>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'toolbar')
  })
})

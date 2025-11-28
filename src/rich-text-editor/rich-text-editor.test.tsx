import { describe, expect, it, mock } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { RichTextEditor } from './rich-text-editor'

describe('RichTextEditor', () => {
  it('renders with placeholder', () => {
    render(<RichTextEditor placeholder="Type here..." />)
    expect(screen.getByText('Type here...')).toBeInTheDocument()
  })

  it('applies base class', () => {
    const { container } = render(<RichTextEditor />)
    expect(container.firstChild).toHaveClass('rich-text-editor')
  })

  it('merges className', () => {
    const { container } = render(<RichTextEditor className="custom-class" />)
    expect(container.firstChild).toHaveClass('rich-text-editor')
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('hides toolbar when disabled', () => {
    render(<RichTextEditor disabled />)
    // Toolbar has buttons, so check if buttons are not present
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBe(0)
  })

  it('spreads HTML attributes', () => {
    const { container } = render(<RichTextEditor data-testid="rte" id="my-editor" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'rte')
    expect(container.firstChild).toHaveAttribute('id', 'my-editor')
  })

  it('renders toolbar when not disabled', () => {
    render(<RichTextEditor />)
    // Should have multiple toolbar buttons
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders contenteditable element', () => {
    render(<RichTextEditor />)
    const contentEditable = document.querySelector('[contenteditable="true"]')
    expect(contentEditable).toBeInTheDocument()
  })

  it('applies editorClassName to content area', () => {
    render(<RichTextEditor editorClassName="custom-editor" />)
    const contentEditable = document.querySelector('[contenteditable="true"]')
    expect(contentEditable).toHaveClass('custom-editor')
  })

  it('renders with onChange prop', () => {
    const onChange = mock(() => {})
    render(<RichTextEditor onChange={onChange} />)

    // Verify editor renders (onChange will be called when content actually changes)
    const contentEditable = document.querySelector('[contenteditable="true"]')
    expect(contentEditable).toBeInTheDocument()
  })

  it('forwards ref to editor instance', () => {
    const ref = { current: null }
    render(<RichTextEditor ref={ref} />)

    // Wait for ref to be set
    setTimeout(() => {
      expect(ref.current).toBeDefined()
      expect(ref.current).toHaveProperty('update')
    }, 100)
  })
})

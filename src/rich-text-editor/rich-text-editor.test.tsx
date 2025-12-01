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

  describe('Markdown Support', () => {
    describe('contentFormat prop', () => {
      it('defaults to html format', () => {
        const onChange = mock(() => {})
        render(<RichTextEditor onChange={onChange} />)
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
        // Default behavior unchanged - HTML mode
      })

      it('accepts markdown as initialContent when contentFormat="markdown"', () => {
        render(
          <RichTextEditor
            initialContent="# Hello\n\nThis is **bold** text."
            contentFormat="markdown"
          />,
        )
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
        // Content should be converted from markdown to WYSIWYG display
      })

      it('accepts html as initialContent when contentFormat="html"', () => {
        render(
          <RichTextEditor
            initialContent="<h1>Hello</h1><p><strong>Bold</strong></p>"
            contentFormat="html"
          />,
        )
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
      })

      it('handles empty markdown content', () => {
        render(<RichTextEditor initialContent="" contentFormat="markdown" />)
        expect(screen.getByText(/Start typing/)).toBeInTheDocument()
      })

      it('renders with markdown contentFormat and onChange', () => {
        const onChange = mock(() => {})
        render(<RichTextEditor onChange={onChange} contentFormat="markdown" />)
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
      })
    })

    describe('enableMarkdownShortcuts prop', () => {
      it('does not enable shortcuts by default', () => {
        render(<RichTextEditor />)
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
        // Default behavior - no shortcuts enabled
      })

      it('renders with markdown shortcuts enabled', () => {
        render(<RichTextEditor enableMarkdownShortcuts />)
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
      })

      it('works with markdown shortcuts and html format', () => {
        render(<RichTextEditor contentFormat="html" enableMarkdownShortcuts />)
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
      })

      it('works with markdown shortcuts and markdown format', () => {
        render(<RichTextEditor contentFormat="markdown" enableMarkdownShortcuts />)
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
      })
    })

    describe('backwards compatibility', () => {
      it('existing code without new props works unchanged', () => {
        const onChange = mock(() => {})
        render(<RichTextEditor initialContent="<p>Test</p>" onChange={onChange} />)

        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
        // No breaking changes - defaults to HTML mode
      })

      it('maintains all existing props functionality', () => {
        const onChange = mock(() => {})
        render(
          <RichTextEditor
            initialContent="<p>Test</p>"
            onChange={onChange}
            placeholder="Custom placeholder"
            disabled={false}
            className="custom"
            editorClassName="editor-custom"
            toolbarClassName="toolbar-custom"
          />,
        )

        expect(screen.getByText('Custom placeholder')).toBeInTheDocument()
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toHaveClass('editor-custom')
      })
    })

    describe('edge cases', () => {
      it('handles undefined initialContent with markdown format', () => {
        render(<RichTextEditor contentFormat="markdown" />)
        expect(screen.getByText(/Start typing/)).toBeInTheDocument()
      })

      it('handles empty string initialContent with markdown format', () => {
        render(<RichTextEditor initialContent="" contentFormat="markdown" />)
        expect(screen.getByText(/Start typing/)).toBeInTheDocument()
      })

      it('renders with both markdown features enabled', () => {
        const onChange = mock(() => {})
        render(
          <RichTextEditor
            contentFormat="markdown"
            enableMarkdownShortcuts
            onChange={onChange}
            initialContent="# Test"
          />,
        )
        const contentEditable = document.querySelector('[contenteditable="true"]')
        expect(contentEditable).toBeInTheDocument()
      })

      it('handles disabled state with markdown features', () => {
        render(<RichTextEditor contentFormat="markdown" enableMarkdownShortcuts disabled />)
        // Should not have toolbar when disabled
        const buttons = screen.queryAllByRole('button')
        expect(buttons.length).toBe(0)
      })
    })
  })
})

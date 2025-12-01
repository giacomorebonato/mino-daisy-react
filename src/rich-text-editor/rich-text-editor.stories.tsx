import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RichTextEditor } from './rich-text-editor'

const meta = {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables editing and hides toolbar',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for empty editor',
    },
    initialContent: {
      control: 'text',
      description: 'Initial content (format depends on contentFormat)',
    },
    contentFormat: {
      control: 'select',
      options: ['html', 'markdown'],
      description: 'Content format for input/output',
    },
    enableMarkdownShortcuts: {
      control: 'boolean',
      description: 'Enable markdown shortcuts while typing',
    },
  },
} satisfies Meta<typeof RichTextEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Start typing...',
  },
}

export const WithInitialContent: Story = {
  args: {
    initialContent:
      '<h1>Hello World</h1><p>This is a <strong>bold</strong> and <em>italic</em> text.</p><ul><li>First item</li><li>Second item</li></ul>',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    initialContent:
      '<p>This content is <strong>read-only</strong>. The toolbar is hidden and you cannot edit.</p>',
  },
}

export const Styled: Story = {
  args: {
    className: 'card card-bordered shadow-lg',
    toolbarClassName: 'bg-base-200',
    editorClassName: 'min-h-[400px] bg-base-100',
    placeholder: 'Type something amazing...',
  },
}

export const WithChangeHandler: Story = {
  render: () => {
    const [html, setHtml] = useState('')

    return (
      <div className="space-y-4">
        <RichTextEditor onChange={setHtml} placeholder="Type to see HTML output below..." />
        <div className="card card-bordered bg-base-200">
          <div className="card-body">
            <h3 className="card-title text-sm">HTML Output:</h3>
            <pre className="text-xs overflow-auto max-h-[200px]">{html || '(empty)'}</pre>
          </div>
        </div>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  args: {
    className: 'border-2 border-primary rounded-lg',
    toolbarClassName: 'bg-primary/10 sticky top-0 z-10',
    editorClassName: 'min-h-[300px] prose-lg',
    placeholder: 'Custom styled editor...',
  },
}

export const CompactEditor: Story = {
  args: {
    className: 'border border-base-300 rounded',
    editorClassName: 'min-h-[150px] p-2 text-sm',
    placeholder: 'Quick note...',
  },
}

export const WithImageAndLinks: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div className="alert alert-info">
          <div className="text-sm">
            <strong>Image Upload Note:</strong> When inserting images, you can:
            <ul className="list-disc list-inside mt-2">
              <li>Enter "url" to paste an image URL</li>
              <li>Enter "upload" to upload an image file (converts to base64)</li>
            </ul>
            <p className="mt-2">
              ⚠️ Base64 images increase HTML size. For production, convert to CDN URLs in the
              onChange callback.
            </p>
          </div>
        </div>
        <RichTextEditor
          initialContent='<p>Try the <a href="https://example.com" class="link link-primary">link button</a> and image button in the toolbar!</p>'
          placeholder="Insert links and images..."
        />
      </div>
    )
  },
}

export const MarkdownInput: Story = {
  args: {
    contentFormat: 'markdown',
    initialContent: `# Welcome to Markdown Mode

This is a **bold** statement and this is *italic*.

## Features

> This is a blockquote that can span multiple lines.
> It's great for highlighting important information.

- Unordered lists
- Multiple items
- Nested support

1. Ordered lists
2. Also supported
3. With numbers

[Link to example](https://example.com)

\`inline code\` and ~~strikethrough~~ text.`,
  },
}

export const MarkdownWithShortcuts: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div className="alert alert-info">
          <div className="text-sm">
            <strong>Markdown Shortcuts Enabled:</strong> Try typing these:
            <ul className="list-disc list-inside mt-2 grid grid-cols-2 gap-2">
              <li>
                <code># </code> for Heading 1
              </li>
              <li>
                <code>## </code> for Heading 2
              </li>
              <li>
                <code>&gt; </code> for blockquote
              </li>
              <li>
                <code>**text**</code> for bold
              </li>
              <li>
                <code>*text*</code> for italic
              </li>
              <li>
                <code>~~text~~</code> for strikethrough
              </li>
              <li>
                <code>`code`</code> for inline code
              </li>
              <li>
                <code>- </code> for bullet list
              </li>
              <li>
                <code>1. </code> for numbered list
              </li>
              <li>
                <code>[text](url)</code> for links
              </li>
            </ul>
          </div>
        </div>
        <RichTextEditor
          contentFormat="markdown"
          enableMarkdownShortcuts
          placeholder="Try typing markdown syntax..."
        />
      </div>
    )
  },
}

export const MarkdownOutputDemo: Story = {
  render: () => {
    const [markdown, setMarkdown] = useState('')

    return (
      <div className="space-y-4">
        <RichTextEditor
          contentFormat="markdown"
          onChange={setMarkdown}
          placeholder="Type something and see markdown output below..."
        />
        <div className="card card-bordered bg-base-200">
          <div className="card-body">
            <h3 className="card-title text-sm">Markdown Output:</h3>
            <pre className="text-xs overflow-auto max-h-[200px]">{markdown || '(empty)'}</pre>
          </div>
        </div>
      </div>
    )
  },
}

export const ShortcutsWithHtmlOutput: Story = {
  render: () => {
    const [html, setHtml] = useState('')

    return (
      <div className="space-y-4">
        <div className="alert alert-info">
          <div className="text-sm">
            <strong>Markdown Shortcuts with HTML Output:</strong>
            <p className="mt-2">
              This demonstrates that markdown shortcuts work independently of the output format. You
              can type markdown syntax but still get HTML output!
            </p>
          </div>
        </div>
        <RichTextEditor
          contentFormat="html"
          enableMarkdownShortcuts
          onChange={setHtml}
          placeholder="Try markdown shortcuts (e.g., # for heading, **bold**, - list)..."
        />
        <div className="card card-bordered bg-base-200">
          <div className="card-body">
            <h3 className="card-title text-sm">HTML Output:</h3>
            <pre className="text-xs overflow-auto max-h-[200px]">{html || '(empty)'}</pre>
          </div>
        </div>
      </div>
    )
  },
}

export const MarkdownComparison: Story = {
  render: () => {
    const [htmlContent, setHtmlContent] = useState('')
    const [markdownContent, setMarkdownContent] = useState('')

    const sampleMarkdown = `# Title

**Bold** and *italic* text.

- List item 1
- List item 2`

    const sampleHtml =
      '<h1>Title</h1><p><strong>Bold</strong> and <em>italic</em> text.</p><ul><li>List item 1</li><li>List item 2</li></ul>'

    return (
      <div className="space-y-6">
        <div className="alert">
          <div className="text-sm">
            <strong>Comparison:</strong> Both editors show the same content in WYSIWYG mode, but
            they output different formats. Edit either one to see the difference!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">HTML Mode</h3>
            <RichTextEditor
              initialContent={sampleHtml}
              onChange={setHtmlContent}
              contentFormat="html"
              editorClassName="min-h-[200px]"
            />
            <div className="mt-2 p-2 bg-base-200 rounded text-xs">
              <strong>Output:</strong>
              <pre className="mt-1 overflow-auto max-h-[100px]">{htmlContent || '(empty)'}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Markdown Mode</h3>
            <RichTextEditor
              initialContent={sampleMarkdown}
              onChange={setMarkdownContent}
              contentFormat="markdown"
              editorClassName="min-h-[200px]"
            />
            <div className="mt-2 p-2 bg-base-200 rounded text-xs">
              <strong>Output:</strong>
              <pre className="mt-1 overflow-auto max-h-[100px]">{markdownContent || '(empty)'}</pre>
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const AllMarkdownFeatures: Story = {
  render: () => {
    const [content, setContent] = useState('')

    return (
      <div className="space-y-4">
        <div className="alert alert-success">
          <div className="text-sm">
            <strong>All Markdown Features Demo:</strong>
            <p className="mt-2">
              This editor has both markdown input/output AND markdown shortcuts enabled. Try editing
              the content or typing new markdown syntax!
            </p>
          </div>
        </div>
        <RichTextEditor
          contentFormat="markdown"
          enableMarkdownShortcuts
          onChange={setContent}
          initialContent={`# Complete Markdown Example

## Text Formatting

This is **bold text** and this is *italic text*.
You can also use __bold__ and _italic_ with underscores.
Try ~~strikethrough~~ and \`inline code\`.

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

## Lists

### Unordered List
- First item
- Second item
- Third item

### Ordered List
1. First step
2. Second step
3. Third step

## Links

Check out [this example link](https://example.com) for more info.

## Try the Shortcuts!

Type markdown syntax to see it convert in real-time:
- Type "# " at the start of a line for a heading
- Type "**" around text for bold
- Type "- " at the start of a line for a bullet point`}
        />
        <div className="card card-bordered bg-base-200">
          <div className="card-body">
            <h3 className="card-title text-sm">Live Markdown Output:</h3>
            <pre className="text-xs overflow-auto max-h-[300px]">{content || '(empty)'}</pre>
          </div>
        </div>
      </div>
    )
  },
}

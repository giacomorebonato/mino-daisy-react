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
      description: 'Initial HTML content',
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

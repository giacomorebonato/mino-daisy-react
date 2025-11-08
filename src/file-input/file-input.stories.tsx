import type { Meta, StoryObj } from '@storybook/react'
import { FileInput } from './file-input'

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    ghost: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <FileInput />
      <FileInput variant="neutral" />
      <FileInput variant="primary" />
      <FileInput variant="secondary" />
      <FileInput variant="accent" />
      <FileInput variant="info" />
      <FileInput variant="success" />
      <FileInput variant="warning" />
      <FileInput variant="error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
      <FileInput size="xl" />
    </div>
  ),
}

export const Ghost: Story = {
  args: {
    ghost: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">
          Upload multiple files
        </label>
        <FileInput multiple variant="primary" />
      </div>
    </div>
  ),
}

export const WithAccept: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Images only</label>
        <FileInput accept="image/*" variant="primary" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">PDFs only</label>
        <FileInput accept=".pdf" variant="secondary" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          Documents (Word, PDF)
        </label>
        <FileInput accept=".doc,.docx,.pdf" variant="accent" />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Profile picture</label>
        <FileInput accept="image/*" variant="primary" />
        <p className="text-xs opacity-70 mt-1">PNG, JPG up to 10MB</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Upload resume</label>
        <FileInput accept=".pdf,.doc,.docx" variant="secondary" />
        <p className="text-xs opacity-70 mt-1">PDF or DOC format</p>
      </div>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
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
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type here',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary textarea',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Textarea placeholder="Default" />
      <Textarea variant="neutral" placeholder="Neutral" />
      <Textarea variant="primary" placeholder="Primary" />
      <Textarea variant="secondary" placeholder="Secondary" />
      <Textarea variant="accent" placeholder="Accent" />
      <Textarea variant="info" placeholder="Info" />
      <Textarea variant="success" placeholder="Success" />
      <Textarea variant="warning" placeholder="Warning" />
      <Textarea variant="error" placeholder="Error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Textarea size="xs" placeholder="Extra small" />
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
      <Textarea size="xl" placeholder="Extra large" />
    </div>
  ),
}

export const Ghost: Story = {
  args: {
    ghost: true,
    placeholder: 'Ghost textarea',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
    defaultValue: 'Cannot edit this content',
  },
}

export const WithRows: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Textarea rows={2} placeholder="2 rows" />
      <Textarea rows={4} placeholder="4 rows" />
      <Textarea rows={8} placeholder="8 rows" />
    </div>
  ),
}

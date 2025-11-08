import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    defaultChecked: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Checkbox defaultChecked />
      <Checkbox variant="neutral" defaultChecked />
      <Checkbox variant="primary" defaultChecked />
      <Checkbox variant="secondary" defaultChecked />
      <Checkbox variant="accent" defaultChecked />
      <Checkbox variant="info" defaultChecked />
      <Checkbox variant="success" defaultChecked />
      <Checkbox variant="warning" defaultChecked />
      <Checkbox variant="error" defaultChecked />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox size="xs" defaultChecked />
      <Checkbox size="sm" defaultChecked />
      <Checkbox size="md" defaultChecked />
      <Checkbox size="lg" defaultChecked />
      <Checkbox size="xl" defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox />
        <span>Remember me</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox variant="primary" defaultChecked />
        <span>I accept the terms</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox variant="secondary" />
        <span>Subscribe to newsletter</span>
      </label>
    </div>
  ),
}

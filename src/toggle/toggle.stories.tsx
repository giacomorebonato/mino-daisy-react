import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './toggle'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
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
} satisfies Meta<typeof Toggle>

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
      <Toggle defaultChecked />
      <Toggle variant="neutral" defaultChecked />
      <Toggle variant="primary" defaultChecked />
      <Toggle variant="secondary" defaultChecked />
      <Toggle variant="accent" defaultChecked />
      <Toggle variant="info" defaultChecked />
      <Toggle variant="success" defaultChecked />
      <Toggle variant="warning" defaultChecked />
      <Toggle variant="error" defaultChecked />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="xs" defaultChecked />
      <Toggle size="sm" defaultChecked />
      <Toggle size="md" defaultChecked />
      <Toggle size="lg" defaultChecked />
      <Toggle size="xl" defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <Toggle />
        <span>Enable notifications</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Toggle variant="primary" defaultChecked />
        <span>Dark mode</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Toggle variant="success" />
        <span>Two-factor authentication</span>
      </label>
    </div>
  ),
}

export const Settings: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="font-semibold text-lg">Settings</div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Email notifications</div>
          <div className="text-sm opacity-70">
            Receive emails about your account
          </div>
        </div>
        <Toggle variant="primary" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Auto-save</div>
          <div className="text-sm opacity-70">
            Automatically save your changes
          </div>
        </div>
        <Toggle variant="primary" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Show previews</div>
          <div className="text-sm opacity-70">Display content previews</div>
        </div>
        <Toggle variant="primary" defaultChecked />
      </div>
    </div>
  ),
}

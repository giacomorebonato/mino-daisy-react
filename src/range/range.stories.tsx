import type { Meta, StoryObj } from '@storybook/react'
import { Range } from './range'

const meta = {
  title: 'Components/Range',
  component: Range,
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
  },
} satisfies Meta<typeof Range>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 40,
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    defaultValue: 50,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Range defaultValue={40} />
      <Range variant="neutral" defaultValue={40} />
      <Range variant="primary" defaultValue={40} />
      <Range variant="secondary" defaultValue={40} />
      <Range variant="accent" defaultValue={40} />
      <Range variant="info" defaultValue={40} />
      <Range variant="success" defaultValue={40} />
      <Range variant="warning" defaultValue={40} />
      <Range variant="error" defaultValue={40} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Range size="xs" defaultValue={40} />
      <Range size="sm" defaultValue={40} />
      <Range size="md" defaultValue={40} />
      <Range size="lg" defaultValue={40} />
      <Range size="xl" defaultValue={40} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 70,
  },
}

export const CustomRange: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">
          Volume (0-100)
        </label>
        <Range variant="primary" min={0} max={100} defaultValue={50} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          Temperature (10-30°C)
        </label>
        <Range variant="secondary" min={10} max={30} defaultValue={20} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Price ($0-$1000)</label>
        <Range variant="accent" min={0} max={1000} step={50} defaultValue={500} />
      </div>
    </div>
  ),
}

export const WithSteps: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Step: 1</label>
        <Range variant="primary" step={1} defaultValue={50} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Step: 10</label>
        <Range variant="primary" step={10} defaultValue={50} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Step: 25</label>
        <Range variant="primary" step={25} defaultValue={50} />
      </div>
    </div>
  ),
}

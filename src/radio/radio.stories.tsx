import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>

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
      <Radio name="variant" defaultChecked />
      <Radio name="variant" variant="neutral" />
      <Radio name="variant" variant="primary" />
      <Radio name="variant" variant="secondary" />
      <Radio name="variant" variant="accent" />
      <Radio name="variant" variant="info" />
      <Radio name="variant" variant="success" />
      <Radio name="variant" variant="warning" />
      <Radio name="variant" variant="error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Radio name="size" size="xs" />
      <Radio name="size" size="sm" />
      <Radio name="size" size="md" defaultChecked />
      <Radio name="size" size="lg" />
      <Radio name="size" size="xl" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Radio disabled />
      <Radio disabled defaultChecked />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="option" defaultChecked />
        <span>Option 1</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="option" variant="primary" />
        <span>Option 2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="option" variant="secondary" />
        <span>Option 3</span>
      </label>
    </div>
  ),
}

export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="font-semibold">Choose your plan:</div>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="plan" variant="primary" defaultChecked />
        <div>
          <div className="font-medium">Basic</div>
          <div className="text-sm opacity-70">$10/month</div>
        </div>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="plan" variant="primary" />
        <div>
          <div className="font-medium">Pro</div>
          <div className="text-sm opacity-70">$25/month</div>
        </div>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="plan" variant="primary" />
        <div>
          <div className="font-medium">Enterprise</div>
          <div className="text-sm opacity-70">$50/month</div>
        </div>
      </label>
    </div>
  ),
}

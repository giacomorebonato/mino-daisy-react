import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'

const meta = {
  title: 'Components/Select',
  component: Select,
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
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <option>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  ),
}

export const Primary: Story = {
  render: () => (
    <Select variant="primary">
      <option>Primary select</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select>
        <option>Default</option>
      </Select>
      <Select variant="neutral">
        <option>Neutral</option>
      </Select>
      <Select variant="primary">
        <option>Primary</option>
      </Select>
      <Select variant="secondary">
        <option>Secondary</option>
      </Select>
      <Select variant="accent">
        <option>Accent</option>
      </Select>
      <Select variant="info">
        <option>Info</option>
      </Select>
      <Select variant="success">
        <option>Success</option>
      </Select>
      <Select variant="warning">
        <option>Warning</option>
      </Select>
      <Select variant="error">
        <option>Error</option>
      </Select>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select size="xs">
        <option>Extra small</option>
      </Select>
      <Select size="sm">
        <option>Small</option>
      </Select>
      <Select size="md">
        <option>Medium</option>
      </Select>
      <Select size="lg">
        <option>Large</option>
      </Select>
      <Select size="xl">
        <option>Extra large</option>
      </Select>
    </div>
  ),
}

export const Ghost: Story = {
  render: () => (
    <Select ghost>
      <option>Ghost select</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <option>Disabled</option>
      <option>Cannot select this</option>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <option>Select an option</option>
      <optgroup label="Fruits">
        <option>Apple</option>
        <option>Banana</option>
        <option>Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option>Carrot</option>
        <option>Lettuce</option>
        <option>Tomato</option>
      </optgroup>
    </Select>
  ),
}

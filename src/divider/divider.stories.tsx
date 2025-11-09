import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './divider'

const meta = {
  title: 'Visual & Media/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
    },
    vertical: {
      control: 'boolean',
    },
    horizontal: {
      control: 'boolean',
    },
    start: {
      control: 'boolean',
    },
    end: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
      <Divider />
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
      <Divider>OR</Divider>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex w-full">
      <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        content
      </div>
      <Divider vertical />
      <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        content
      </div>
    </div>
  ),
}

export const VerticalWithText: Story = {
  render: () => (
    <div className="flex w-full">
      <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        content
      </div>
      <Divider vertical>OR</Divider>
      <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        content
      </div>
    </div>
  ),
}

export const WithColors: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4">
      <div>
        <Divider variant="neutral">Neutral</Divider>
      </div>
      <div>
        <Divider variant="primary">Primary</Divider>
      </div>
      <div>
        <Divider variant="secondary">Secondary</Divider>
      </div>
      <div>
        <Divider variant="accent">Accent</Divider>
      </div>
      <div>
        <Divider variant="info">Info</Divider>
      </div>
      <div>
        <Divider variant="success">Success</Divider>
      </div>
      <div>
        <Divider variant="warning">Warning</Divider>
      </div>
      <div>
        <Divider variant="error">Error</Divider>
      </div>
    </div>
  ),
}

export const StartAligned: Story = {
  render: () => (
    <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
      <Divider start>Start Aligned</Divider>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    </div>
  ),
}

export const EndAligned: Story = {
  render: () => (
    <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
      <Divider end>End Aligned</Divider>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    </div>
  ),
}

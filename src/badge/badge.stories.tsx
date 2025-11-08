import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
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
      options: ['xs', 'sm', 'md', 'lg'],
    },
    outline: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Badge>Badge</Badge>,
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge>Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge outline>Neutral</Badge>
      <Badge variant="primary" outline>
        Primary
      </Badge>
      <Badge variant="secondary" outline>
        Secondary
      </Badge>
      <Badge variant="accent" outline>
        Accent
      </Badge>
      <Badge variant="info" outline>
        Info
      </Badge>
      <Badge variant="success" outline>
        Success
      </Badge>
      <Badge variant="warning" outline>
        Warning
      </Badge>
      <Badge variant="error" outline>
        Error
      </Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center flex-wrap">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button>
        Inbox <Badge size="sm">+99</Badge>
      </Button>
      <Button>
        Inbox{' '}
        <Badge size="sm" variant="secondary">
          +99
        </Badge>
      </Button>
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge size="xs" />
      <Badge size="sm" />
      <Badge size="md" />
      <Badge size="lg" />
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-4 w-4 stroke-current"
        >
          <title>Check</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Success
      </Badge>
      <Badge variant="error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-4 w-4 stroke-current"
        >
          <title>Error</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Error
      </Badge>
    </div>
  ),
}

export const StateIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="badge badge-neutral gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-4 w-4 stroke-current"
        >
          <title>Dot</title>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        Neutral
      </div>
      <div className="badge badge-primary gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-4 w-4 stroke-current"
        >
          <title>Dot</title>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        Primary
      </div>
      <div className="badge badge-secondary gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-4 w-4 stroke-current"
        >
          <title>Dot</title>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        Secondary
      </div>
      <div className="badge badge-accent gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-4 w-4 stroke-current"
        >
          <title>Dot</title>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        Accent
      </div>
    </div>
  ),
}

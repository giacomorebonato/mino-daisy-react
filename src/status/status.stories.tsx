import type { Meta, StoryObj } from '@storybook/react'
import { Status } from './status'

const meta = {
  title: 'Visual & Media/Status',
  component: Status,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Status aria-label="status" />,
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Status variant="neutral" aria-label="neutral" />
      <Status variant="primary" aria-label="primary" />
      <Status variant="secondary" aria-label="secondary" />
      <Status variant="accent" aria-label="accent" />
      <Status variant="info" aria-label="info" />
      <Status variant="success" aria-label="success" />
      <Status variant="warning" aria-label="warning" />
      <Status variant="error" aria-label="error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Status size="xs" aria-label="extra small" />
      <Status size="sm" aria-label="small" />
      <Status size="md" aria-label="medium" />
      <Status size="lg" aria-label="large" />
      <Status size="xl" aria-label="extra large" />
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Status variant="success" aria-label="online" />
        <span>Online</span>
      </div>
      <div className="flex items-center gap-2">
        <Status variant="error" aria-label="offline" />
        <span>Offline</span>
      </div>
      <div className="flex items-center gap-2">
        <Status variant="warning" aria-label="away" />
        <span>Away</span>
      </div>
      <div className="flex items-center gap-2">
        <Status variant="info" aria-label="busy" />
        <span>Busy</span>
      </div>
    </div>
  ),
}

export const InIndicator: Story = {
  render: () => (
    <div className="indicator">
      <span className="indicator-item status status-success" />
      <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
    </div>
  ),
}

export const OnAvatar: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="avatar indicator">
        <span className="indicator-item indicator-bottom indicator-end status status-success" />
        <div className="h-24 w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User avatar"
          />
        </div>
      </div>
      <div className="avatar indicator">
        <span className="indicator-item indicator-bottom indicator-end status status-error" />
        <div className="h-24 w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User avatar"
          />
        </div>
      </div>
    </div>
  ),
}

export const Animated: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Status variant="info" className="animate-bounce" aria-label="new" />
        <span>Unread messages</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="inline-grid *:[grid-area:1/1]">
          <Status variant="error" className="animate-ping" aria-label="alert" />
          <Status variant="error" aria-label="alert" />
        </div>
        <span>Server is down</span>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-6">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <div className="text-sm font-bold">{size.toUpperCase()}</div>
          {(
            [
              'neutral',
              'primary',
              'secondary',
              'accent',
              'info',
              'success',
              'warning',
              'error',
            ] as const
          ).map((variant) => (
            <div key={variant} className="flex items-center gap-2">
              <Status variant={variant} size={size} aria-label={`${variant} ${size}`} />
              <span className="text-xs">{variant}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}

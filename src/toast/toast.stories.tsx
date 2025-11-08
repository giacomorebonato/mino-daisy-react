import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../alert'
import { Toast } from './toast'

const meta = {
  title: 'Interactive & Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    horizontal: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    vertical: {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast>
        <Alert variant="info">New message received</Alert>
      </Toast>
    </div>
  ),
}

export const TopEnd: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="top" horizontal="end">
        <Alert variant="success">Success! Your changes have been saved.</Alert>
      </Toast>
    </div>
  ),
}

export const TopCenter: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="top" horizontal="center">
        <Alert variant="info">This is a centered toast notification</Alert>
      </Toast>
    </div>
  ),
}

export const TopStart: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="top" horizontal="start">
        <Alert variant="warning">Warning: Please review your settings</Alert>
      </Toast>
    </div>
  ),
}

export const BottomEnd: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="bottom" horizontal="end">
        <Alert variant="success">Task completed successfully</Alert>
      </Toast>
    </div>
  ),
}

export const BottomCenter: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="bottom" horizontal="center">
        <Alert variant="info">New update available</Alert>
      </Toast>
    </div>
  ),
}

export const BottomStart: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="bottom" horizontal="start">
        <Alert variant="error">Error: Failed to upload file</Alert>
      </Toast>
    </div>
  ),
}

export const MiddleEnd: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="middle" horizontal="end">
        <Alert variant="info">Notification in the middle</Alert>
      </Toast>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="top" horizontal="end">
        <Alert variant="success">First notification</Alert>
        <Alert variant="info">Second notification</Alert>
        <Alert variant="warning">Third notification</Alert>
      </Toast>
    </div>
  ),
}

export const AllCorners: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="top" horizontal="start">
        <Alert variant="info">Top Start</Alert>
      </Toast>
      <Toast vertical="top" horizontal="end">
        <Alert variant="success">Top End</Alert>
      </Toast>
      <Toast vertical="bottom" horizontal="start">
        <Alert variant="warning">Bottom Start</Alert>
      </Toast>
      <Toast vertical="bottom" horizontal="end">
        <Alert variant="error">Bottom End</Alert>
      </Toast>
    </div>
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <div className="relative h-screen">
      <Toast vertical="top" horizontal="end">
        <div className="alert alert-info">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-bold">New message</h3>
              <div className="text-xs">You have 1 unread message</div>
            </div>
          </div>
          <button type="button" className="btn btn-sm">
            View
          </button>
        </div>
      </Toast>
    </div>
  ),
}

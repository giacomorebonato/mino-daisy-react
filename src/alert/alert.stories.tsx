import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'

const meta = {
  title: 'Interactive & Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    alertStyle: {
      control: 'select',
      options: ['outline', 'dash', 'soft'],
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is an alert message',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Information: This is an informational alert',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success: Your operation completed successfully',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning: Please proceed with caution',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error: Something went wrong',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert>Default alert</Alert>
      <Alert variant="info">Info alert</Alert>
      <Alert variant="success">Success alert</Alert>
      <Alert variant="warning">Warning alert</Alert>
      <Alert variant="error">Error alert</Alert>
    </div>
  ),
}

export const Outline: Story = {
  args: {
    variant: 'info',
    alertStyle: 'outline',
    children: 'This is an outlined alert',
  },
}

export const Soft: Story = {
  args: {
    variant: 'success',
    alertStyle: 'soft',
    children: 'This is a soft styled alert',
  },
}

export const Dash: Story = {
  args: {
    variant: 'warning',
    alertStyle: 'dash',
    children: 'This is a dashed alert',
  },
}

export const Vertical: Story = {
  args: {
    variant: 'info',
    direction: 'vertical',
    children: (
      <>
        <span>⚠️</span>
        <span>Alert message with icon</span>
      </>
    ),
  },
}

export const Horizontal: Story = {
  args: {
    variant: 'success',
    direction: 'horizontal',
    children: (
      <>
        <span>✓</span>
        <span>Success message with icon</span>
      </>
    ),
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert variant="info">
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
        <span>Info alert with SVG icon</span>
      </Alert>
      <Alert variant="success">
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Success alert with SVG icon</span>
      </Alert>
    </div>
  ),
}

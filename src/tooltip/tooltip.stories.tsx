import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Tooltip, TooltipContent } from './tooltip'

const meta = {
  title: 'Interactive & Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tip: {
      control: 'text',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
    },
    open: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tip: 'Hello there!',
    children: <Button>Hover me</Button>,
  },
}

export const Positions: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <Tooltip tip="Tooltip on top" position="top">
        <Button>Top</Button>
      </Tooltip>
      <div className="flex gap-8 items-center">
        <Tooltip tip="Tooltip on left" position="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip tip="Tooltip on right" position="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
      <Tooltip tip="Tooltip on bottom" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip tip="Neutral tooltip" variant="neutral">
        <Button>Neutral</Button>
      </Tooltip>
      <Tooltip tip="Primary tooltip" variant="primary">
        <Button>Primary</Button>
      </Tooltip>
      <Tooltip tip="Secondary tooltip" variant="secondary">
        <Button>Secondary</Button>
      </Tooltip>
      <Tooltip tip="Accent tooltip" variant="accent">
        <Button>Accent</Button>
      </Tooltip>
      <Tooltip tip="Info tooltip" variant="info">
        <Button>Info</Button>
      </Tooltip>
      <Tooltip tip="Success tooltip" variant="success">
        <Button>Success</Button>
      </Tooltip>
      <Tooltip tip="Warning tooltip" variant="warning">
        <Button>Warning</Button>
      </Tooltip>
      <Tooltip tip="Error tooltip" variant="error">
        <Button>Error</Button>
      </Tooltip>
    </div>
  ),
}

export const AlwaysOpen: Story = {
  render: () => (
    <Tooltip tip="This tooltip is always visible" open>
      <Button>Always visible</Button>
    </Tooltip>
  ),
}

export const OnText: Story = {
  render: () => (
    <p className="text-lg">
      This is a paragraph with a{' '}
      <Tooltip tip="Additional information" variant="primary">
        <span className="underline cursor-help">tooltip on text</span>
      </Tooltip>{' '}
      that appears when you hover over it.
    </p>
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipContent>
        <div className="text-sm">
          <strong>Custom Tooltip</strong>
          <p>This is custom HTML content</p>
        </div>
      </TooltipContent>
      <Button>Hover for custom content</Button>
    </Tooltip>
  ),
}

export const LongText: Story = {
  render: () => (
    <Tooltip tip="This is a very long tooltip text that demonstrates how tooltips handle longer content. It will wrap appropriately.">
      <Button>Hover for long text</Button>
    </Tooltip>
  ),
}

export const OnIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip tip="Information" variant="info" position="top">
        <button type="button" className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </Tooltip>
      <Tooltip tip="Help" variant="success" position="top">
        <button type="button" className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </Tooltip>
      <Tooltip tip="Warning" variant="warning" position="top">
        <button type="button" className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </button>
      </Tooltip>
    </div>
  ),
}

export const ResponsiveExample: Story = {
  render: () => (
    <div className="text-center">
      <Tooltip tip="Only visible on large screens" className="lg:tooltip">
        <Button>Hover me (lg screens only)</Button>
      </Tooltip>
      <p className="text-sm mt-4 text-base-content/60">
        Tooltip only appears on large screens and above
      </p>
    </div>
  ),
}

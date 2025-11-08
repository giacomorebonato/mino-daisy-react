import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Swap, SwapOff, SwapOn } from './swap'

const meta = {
  title: 'Interactive & Feedback/Swap',
  component: Swap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
    },
    rotate: {
      control: 'boolean',
    },
    flip: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Swap>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Swap>
      <input type="checkbox" />
      <SwapOn>ON</SwapOn>
      <SwapOff>OFF</SwapOff>
    </Swap>
  ),
}

export const WithRotate: Story = {
  render: () => (
    <Swap rotate>
      <input type="checkbox" />
      <SwapOn>ON</SwapOn>
      <SwapOff>OFF</SwapOff>
    </Swap>
  ),
}

export const WithFlip: Story = {
  render: () => (
    <Swap flip>
      <input type="checkbox" />
      <SwapOn>ON</SwapOn>
      <SwapOff>OFF</SwapOff>
    </Swap>
  ),
}

export const ControlledSwap: Story = {
  render: () => {
    const [active, setActive] = useState(false)

    return (
      <div className="space-y-4">
        <Swap active={active}>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          <SwapOn>Active</SwapOn>
          <SwapOff>Inactive</SwapOff>
        </Swap>
        <div>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setActive(!active)}
          >
            Toggle: {active ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    )
  },
}

export const IconSwap: Story = {
  render: () => (
    <Swap rotate className="text-6xl">
      <input type="checkbox" />
      <SwapOn>😄</SwapOn>
      <SwapOff>😢</SwapOff>
    </Swap>
  ),
}

export const ThemeToggle: Story = {
  render: () => (
    <Swap rotate className="btn btn-ghost btn-circle">
      <input type="checkbox" />
      <SwapOn>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </SwapOn>
      <SwapOff>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </SwapOff>
    </Swap>
  ),
}

export const HamburgerMenu: Story = {
  render: () => (
    <Swap rotate className="btn btn-ghost btn-circle">
      <input type="checkbox" />
      <SwapOn>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </SwapOn>
      <SwapOff>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </SwapOff>
    </Swap>
  ),
}

export const PlayPause: Story = {
  render: () => (
    <Swap className="btn btn-circle btn-primary">
      <input type="checkbox" />
      <SwapOn>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      </SwapOn>
      <SwapOff>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </SwapOff>
    </Swap>
  ),
}

export const VolumeToggle: Story = {
  render: () => (
    <Swap className="btn btn-circle btn-ghost">
      <input type="checkbox" />
      <SwapOn>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      </SwapOn>
      <SwapOff>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      </SwapOff>
    </Swap>
  ),
}

export const LikeButton: Story = {
  render: () => {
    const [liked, setLiked] = useState(false)

    return (
      <Swap
        active={liked}
        className="text-4xl"
        onClick={() => setLiked(!liked)}
      >
        <SwapOn className="text-red-500">❤️</SwapOn>
        <SwapOff>🤍</SwapOff>
      </Swap>
    )
  },
}

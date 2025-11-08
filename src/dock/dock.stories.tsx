import type { Meta, StoryObj } from '@storybook/react'
import { Dock, DockItem } from './dock'

const meta = {
  title: 'Components/Dock',
  component: Dock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Dock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Dock className="w-full">
        <DockItem>
          <span role="img" aria-label="Home">
            🏠
          </span>
        </DockItem>
        <DockItem active>
          <span role="img" aria-label="Movies">
            🍿
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Settings">
            ⚙️
          </span>
        </DockItem>
      </Dock>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Dock className="w-full">
        <DockItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Home</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </DockItem>
        <DockItem active>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Search</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </DockItem>
        <DockItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Stats</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </DockItem>
      </Dock>
    </div>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Dock className="w-full">
        <DockItem>
          <span className="text-xs">Home</span>
        </DockItem>
        <DockItem active>
          <span className="text-xs">Movies</span>
        </DockItem>
        <DockItem>
          <span className="text-xs">Settings</span>
        </DockItem>
      </Dock>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Dock size="sm" className="w-full">
        <DockItem>
          <span role="img" aria-label="Home">
            🏠
          </span>
        </DockItem>
        <DockItem active>
          <span role="img" aria-label="Movies">
            🍿
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Settings">
            ⚙️
          </span>
        </DockItem>
      </Dock>
      <Dock size="md" className="w-full">
        <DockItem>
          <span role="img" aria-label="Home">
            🏠
          </span>
        </DockItem>
        <DockItem active>
          <span role="img" aria-label="Movies">
            🍿
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Settings">
            ⚙️
          </span>
        </DockItem>
      </Dock>
      <Dock size="lg" className="w-full">
        <DockItem>
          <span role="img" aria-label="Home">
            🏠
          </span>
        </DockItem>
        <DockItem active>
          <span role="img" aria-label="Movies">
            🍿
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Settings">
            ⚙️
          </span>
        </DockItem>
      </Dock>
    </div>
  ),
}

export const FiveItems: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Dock className="w-full">
        <DockItem>
          <span role="img" aria-label="Home">
            🏠
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Search">
            🔍
          </span>
        </DockItem>
        <DockItem active>
          <span role="img" aria-label="Movies">
            🍿
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Profile">
            👤
          </span>
        </DockItem>
        <DockItem>
          <span role="img" aria-label="Settings">
            ⚙️
          </span>
        </DockItem>
      </Dock>
    </div>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Dock className="w-full">
        <DockItem>
          <div className="relative">
            <span role="img" aria-label="Home">
              🏠
            </span>
          </div>
        </DockItem>
        <DockItem active>
          <div className="relative">
            <span role="img" aria-label="Messages">
              💬
            </span>
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-error text-[10px] text-error-content">
              5
            </span>
          </div>
        </DockItem>
        <DockItem>
          <div className="relative">
            <span role="img" aria-label="Settings">
              ⚙️
            </span>
          </div>
        </DockItem>
      </Dock>
    </div>
  ),
}

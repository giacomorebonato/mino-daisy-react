import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './menu'

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    horizontal: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menu className="bg-base-200 rounded-box w-56">
      <li>
        <a href="#item1">Item 1</a>
      </li>
      <li>
        <a href="#item2">Item 2</a>
      </li>
      <li>
        <a href="#item3">Item 3</a>
      </li>
    </Menu>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Menu horizontal className="bg-base-200 rounded-box">
      <li>
        <a href="#item1">Item 1</a>
      </li>
      <li>
        <a href="#item2">Item 2</a>
      </li>
      <li>
        <a href="#item3">Item 3</a>
      </li>
    </Menu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <Menu className="bg-base-200 rounded-box w-56">
      <li>
        <a href="#item1">Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul>
            <li>
              <a href="#submenu1">Submenu 1</a>
            </li>
            <li>
              <a href="#submenu2">Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="#item3">Item 3</a>
      </li>
    </Menu>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Menu className="bg-base-200 rounded-box w-56">
      <li>
        <a href="#home">
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
          Home
        </a>
      </li>
      <li>
        <a href="#files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Files</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Files
        </a>
      </li>
      <li>
        <a href="#settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Settings</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </a>
      </li>
    </Menu>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Menu size="xs" className="bg-base-200 rounded-box w-56">
        <li>
          <a href="#xs1">Extra Small Item</a>
        </li>
        <li>
          <a href="#xs2">Extra Small Item</a>
        </li>
      </Menu>
      <Menu size="sm" className="bg-base-200 rounded-box w-56">
        <li>
          <a href="#sm1">Small Item</a>
        </li>
        <li>
          <a href="#sm2">Small Item</a>
        </li>
      </Menu>
      <Menu size="md" className="bg-base-200 rounded-box w-56">
        <li>
          <a href="#md1">Medium Item</a>
        </li>
        <li>
          <a href="#md2">Medium Item</a>
        </li>
      </Menu>
      <Menu size="lg" className="bg-base-200 rounded-box w-56">
        <li>
          <a href="#lg1">Large Item</a>
        </li>
        <li>
          <a href="#lg2">Large Item</a>
        </li>
      </Menu>
    </div>
  ),
}

export const WithActiveItem: Story = {
  render: () => (
    <Menu className="bg-base-200 rounded-box w-56">
      <li>
        <a href="#item1">Item 1</a>
      </li>
      <li>
        <a href="#item2" className="active">
          Active Item
        </a>
      </li>
      <li>
        <a href="#item3">Item 3</a>
      </li>
    </Menu>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <Menu className="bg-base-200 rounded-box w-56">
      <li>
        <a href="#item1">Item 1</a>
      </li>
      <li className="disabled">
        <a href="#disabled">Disabled Item</a>
      </li>
      <li>
        <a href="#item3">Item 3</a>
      </li>
    </Menu>
  ),
}

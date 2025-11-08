import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './dropdown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Horizontal placement of dropdown',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Vertical/horizontal position of dropdown',
    },
    hover: {
      control: 'boolean',
      description: 'Open dropdown on hover instead of click',
    },
    forceOpen: {
      control: 'boolean',
      description: 'Force dropdown to stay open',
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const menuContent = (
  <ul className="menu bg-base-200 rounded-box z-1 w-52 p-2 shadow">
    <li>
      <button type="button">Item 1</button>
    </li>
    <li>
      <button type="button">Item 2</button>
    </li>
    <li>
      <button type="button">Item 3</button>
    </li>
  </ul>
)

export const Default: Story = {
  args: {
    trigger: <span className="btn">Click</span>,
    content: menuContent,
  },
}

export const End: Story = {
  args: {
    trigger: <span className="btn">Click</span>,
    content: menuContent,
    placement: 'end',
  },
}

export const Top: Story = {
  args: {
    trigger: <span className="btn">Click</span>,
    content: menuContent,
    position: 'top',
  },
}

export const Bottom: Story = {
  args: {
    trigger: <span className="btn">Click</span>,
    content: menuContent,
    position: 'bottom',
  },
}

export const Left: Story = {
  args: {
    trigger: <span className="btn">Click</span>,
    content: menuContent,
    position: 'left',
  },
}

export const Right: Story = {
  args: {
    trigger: <span className="btn">Click</span>,
    content: menuContent,
    position: 'right',
  },
}

export const Hover: Story = {
  args: {
    trigger: <span className="btn">Hover me</span>,
    content: menuContent,
    hover: true,
  },
}

export const ForceOpen: Story = {
  args: {
    trigger: <span className="btn">Always open</span>,
    content: menuContent,
    forceOpen: true,
  },
}

export const Card: Story = {
  args: {
    trigger: <span className="btn m-1">Card dropdown</span>,
    content: (
      <div className="card card-compact bg-primary text-primary-content z-1 w-64 shadow">
        <div className="card-body">
          <h3 className="card-title">Card title!</h3>
          <p>You can use any element as a dropdown.</p>
        </div>
      </div>
    ),
  },
}

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <button type="button" className="avatar">
        <div className="w-24 rounded">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Avatar"
          />
        </div>
      </button>
    ),
    content: (
      <ul className="menu bg-base-200 rounded-box z-1 w-52 p-2 shadow">
        <li>
          <button type="button">Profile</button>
        </li>
        <li>
          <button type="button">Settings</button>
        </li>
        <li>
          <button type="button">Logout</button>
        </li>
      </ul>
    ),
  },
}

export const Combined: Story = {
  args: {
    trigger: <span className="btn btn-primary">Top + End</span>,
    content: menuContent,
    position: 'top',
    placement: 'end',
  },
}

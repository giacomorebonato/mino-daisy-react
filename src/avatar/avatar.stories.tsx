import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './avatar'

const meta = {
  title: 'Visual & Media/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    online: {
      control: 'boolean',
    },
    offline: {
      control: 'boolean',
    },
    placeholder: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <div className="w-24 rounded">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Avatar" />
      </div>
    </Avatar>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <div className="w-24 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Avatar" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="Avatar"
          />
        </div>
      </Avatar>
    </div>
  ),
}

export const WithMask: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <div className="mask mask-squircle w-24">
          <img
            src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
            alt="Avatar"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="mask mask-hexagon w-24">
          <img
            src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp"
            alt="Avatar"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="mask mask-heart w-24">
          <img
            src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp"
            alt="Avatar"
          />
        </div>
      </Avatar>
    </div>
  ),
}

export const WithRing: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="Avatar"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="ring-secondary ring-offset-base-100 w-24 rounded-full ring-4 ring-offset-2">
          <img
            src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
            alt="Avatar"
          />
        </div>
      </Avatar>
    </div>
  ),
}

export const WithPresenceIndicator: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar online>
        <div className="w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            alt="Online Avatar"
          />
        </div>
      </Avatar>
      <Avatar offline>
        <div className="w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp"
            alt="Offline Avatar"
          />
        </div>
      </Avatar>
    </div>
  ),
}

export const Placeholder: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar placeholder>
        <div className="bg-neutral text-neutral-content w-24 rounded-full">
          <span className="text-3xl">A</span>
        </div>
      </Avatar>
      <Avatar placeholder>
        <div className="bg-neutral text-neutral-content w-16 rounded-full">
          <span className="text-xl">JD</span>
        </div>
      </Avatar>
      <Avatar placeholder>
        <div className="bg-neutral text-neutral-content w-12 rounded-full">
          <span>MX</span>
        </div>
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup className="-space-x-6">
      <Avatar>
        <div className="w-12">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="User 1" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="User 2"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
            alt="User 3"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
            alt="User 4"
          />
        </div>
      </Avatar>
    </AvatarGroup>
  ),
}

export const GroupWithCounter: Story = {
  render: () => (
    <AvatarGroup className="-space-x-6">
      <Avatar>
        <div className="w-12">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="User 1" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="User 2"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
            alt="User 3"
          />
        </div>
      </Avatar>
      <Avatar placeholder>
        <div className="bg-neutral text-neutral-content w-12">
          <span>+99</span>
        </div>
      </Avatar>
    </AvatarGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <div className="w-32 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Large" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-20 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Medium" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-16 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Small" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12 rounded">
          <img
            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            alt="Extra Small"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-8 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Tiny" />
        </div>
      </Avatar>
    </div>
  ),
}

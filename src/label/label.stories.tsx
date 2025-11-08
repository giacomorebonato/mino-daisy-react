import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../input'
import { Label } from './label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    floating: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Label htmlFor="email">
        <span className="label">Email address</span>
        <Input id="email" type="email" placeholder="you@example.com" />
      </Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4">
      <Label htmlFor="username">
        <span className="label">Username</span>
        <Input id="username" placeholder="Enter username" />
        <span className="label text-xs opacity-70">
          Choose a unique username
        </span>
      </Label>
      <Label htmlFor="password">
        <span className="label">Password</span>
        <Input id="password" type="password" placeholder="Enter password" />
        <span className="label text-xs opacity-70">
          Must be at least 8 characters
        </span>
      </Label>
    </div>
  ),
}

export const FloatingLabel: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4">
      <Label floating>
        <Input className="input" placeholder=" " />
        <span>Email address</span>
      </Label>
      <Label floating>
        <Input className="input" placeholder=" " />
        <span>Full name</span>
      </Label>
      <Label floating>
        <Input className="input" type="password" placeholder=" " />
        <span>Password</span>
      </Label>
    </div>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4">
      <Label>
        <span className="label">Primary Input</span>
        <Input variant="primary" placeholder="Primary input" />
      </Label>
      <Label>
        <span className="label">Secondary Input</span>
        <Input variant="secondary" placeholder="Secondary input" />
      </Label>
      <Label>
        <span className="label">Success Input</span>
        <Input variant="success" placeholder="Success input" />
        <span className="label text-xs text-success">Looks good!</span>
      </Label>
      <Label>
        <span className="label">Error Input</span>
        <Input variant="error" placeholder="Error input" />
        <span className="label text-xs text-error">This field is required</span>
      </Label>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="w-96 p-6 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="flex flex-col gap-4">
        <Label>
          <span className="label">Full Name</span>
          <Input placeholder="John Doe" />
        </Label>
        <Label>
          <span className="label">Email</span>
          <Input type="email" placeholder="john@example.com" />
        </Label>
        <Label>
          <span className="label">Password</span>
          <Input type="password" placeholder="Enter password" />
          <span className="label text-xs opacity-70">
            At least 8 characters with numbers and symbols
          </span>
        </Label>
        <Label>
          <span className="label">Confirm Password</span>
          <Input type="password" placeholder="Confirm password" />
        </Label>
        <button type="button" className="btn btn-primary mt-2">
          Create Account
        </button>
      </div>
    </div>
  ),
}

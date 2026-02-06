import type { Meta, StoryObj } from '@storybook/react'
import { PwdInput } from './pwd-input'

const meta = {
  title: 'Components/PwdInput',
  component: PwdInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof PwdInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter password',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Password',
    defaultValue: 'mysecretpassword',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PwdInput placeholder="Default" />
      <PwdInput className="input-bordered" placeholder="Bordered" />
      <PwdInput className="input-primary" placeholder="Primary" />
      <PwdInput className="input-secondary" placeholder="Secondary" />
      <PwdInput className="input-accent" placeholder="Accent" />
      <PwdInput className="input-error" placeholder="Error" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PwdInput className="input-xs" placeholder="Extra small" />
      <PwdInput className="input-sm" placeholder="Small" />
      <PwdInput className="input-md" placeholder="Medium" />
      <PwdInput className="input-lg" placeholder="Large" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
    defaultValue: 'Cannot edit',
  },
}

export const WithValidation: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <PwdInput
        className="input-bordered"
        placeholder="Password"
        required
        minLength={8}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must be at least 8 characters with uppercase, lowercase, and number"
      />
      <p className="text-xs opacity-60">
        Must be at least 8 characters with uppercase, lowercase, and number
      </p>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input } from '../input'
import { FormControl, Hint, Legend } from './form-control'

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FormControl className="w-80">
      <Legend>Email</Legend>
      <Input type="email" placeholder="you@example.com" />
      <Hint>We'll never share your email</Hint>
    </FormControl>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormControl className="w-80">
      <Legend>Email</Legend>
      <Input type="email" className="input-error" placeholder="you@example.com" />
      <Hint className="text-error">Invalid email format</Hint>
    </FormControl>
  ),
}

export const ReservedSpace: Story = {
  render: () => {
    const [error, setError] = useState<string | null>(null)

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        setError('This field is required')
      } else if (!e.target.value.includes('@')) {
        setError('Invalid email format')
      } else {
        setError(null)
      }
    }

    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm opacity-70">
          The error text reserves space to prevent layout shifts. Try focusing and blurring the
          input.
        </p>
        <FormControl className="w-80">
          <Legend>Email</Legend>
          <Input
            type="email"
            className={error ? 'input-error' : ''}
            placeholder="you@example.com"
            onBlur={handleBlur}
          />
          <Hint reserveSpace className={error ? 'text-error' : ''}>
            {error || ''}
          </Hint>
        </FormControl>
        <FormControl className="w-80">
          <Legend>Username</Legend>
          <Input placeholder="Choose a username" />
          <Hint reserveSpace>This text is always visible</Hint>
        </FormControl>
      </div>
    )
  },
}

export const WithValidatorHint: Story = {
  render: () => (
    <FormControl className="w-80">
      <Legend>Username</Legend>
      <Input className="validator" required minLength={3} placeholder="Enter username" />
      <Hint className="validator-hint">Must be at least 3 characters</Hint>
    </FormControl>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FormControl className="w-80" disabled>
      <Legend>Locked Field</Legend>
      <Input placeholder="Cannot edit" />
      <Hint>This field is disabled</Hint>
    </FormControl>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="w-96 p-6 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="flex flex-col gap-2">
        <FormControl>
          <Legend>Full Name</Legend>
          <Input placeholder="John Doe" />
          <Hint reserveSpace />
        </FormControl>
        <FormControl>
          <Legend>Email</Legend>
          <Input type="email" placeholder="john@example.com" />
          <Hint reserveSpace />
        </FormControl>
        <FormControl>
          <Legend>Password</Legend>
          <Input type="password" placeholder="Enter password" />
          <Hint reserveSpace>At least 8 characters</Hint>
        </FormControl>
        <FormControl>
          <Legend>Confirm Password</Legend>
          <Input type="password" placeholder="Confirm password" />
          <Hint reserveSpace />
        </FormControl>
        <button type="button" className="btn btn-primary mt-2">
          Create Account
        </button>
      </div>
    </div>
  ),
}

export const MultipleInputs: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <FormControl>
        <Legend>Primary Styled</Legend>
        <Input className="input-primary" placeholder="Primary input" />
        <Hint>Primary style hint</Hint>
      </FormControl>
      <FormControl>
        <Legend>Success State</Legend>
        <Input className="input-success" placeholder="Success input" />
        <Hint className="text-success">Looks good!</Hint>
      </FormControl>
      <FormControl>
        <Legend>Error State</Legend>
        <Input className="input-error" placeholder="Error input" />
        <Hint className="text-error">This field is required</Hint>
      </FormControl>
    </div>
  ),
}

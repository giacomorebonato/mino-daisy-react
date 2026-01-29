import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { Select } from '../select'
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

export const AllInputTypesWithErrors: Story = {
  render: () => (
    <div className="w-96 p-6 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Form with Various Input Types</h2>
      <div className="flex flex-col gap-2">
        <FormControl>
          <Legend>Email (text)</Legend>
          <Input
            type="email"
            className="input-error"
            placeholder="you@example.com"
            defaultValue="invalid-email"
          />
          <Hint className="text-error">Please enter a valid email address</Hint>
        </FormControl>

        <FormControl>
          <Legend>Birth Date</Legend>
          <Input type="date" className="input-error" defaultValue="2025-01-01" />
          <Hint className="text-error">You must be at least 18 years old</Hint>
        </FormControl>

        <FormControl>
          <Legend>Quantity</Legend>
          <Input type="number" className="input-error" placeholder="0" defaultValue="-5" min="0" />
          <Hint className="text-error">Quantity must be a positive number</Hint>
        </FormControl>

        <FormControl>
          <Legend>Country</Legend>
          <Select className="select-error w-full">
            <option disabled selected>
              Select your country
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Other</option>
          </Select>
          <Hint className="text-error">Please select a country</Hint>
        </FormControl>

        <FormControl>
          <Legend>Terms and Conditions</Legend>
          <label className="label cursor-pointer justify-start gap-2">
            <input type="checkbox" className="checkbox checkbox-error" />
            <span className="label-text whitespace-break-spaces">
              I agree to the terms and conditions. I agree to the terms and conditions. I agree to
              the terms and conditions
            </span>
          </label>
          <Hint className="text-error">You must accept the terms and conditions</Hint>
        </FormControl>

        <Button type="button" className="btn btn-primary mt-2">
          Submit
        </Button>
      </div>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Validator, ValidatorHint } from './validator'

const meta = {
  title: 'Utilities & Special/Validator',
  component: Validator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Validator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Validator
        type="text"
        required
        placeholder="Username"
        pattern="[A-Za-z][A-Za-z0-9\\-]*"
        minLength={3}
        maxLength={30}
        title="Only letters, numbers or dash"
        hint={
          <>
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </>
        }
      />
    </div>
  ),
}

export const EmailValidation: Story = {
  render: () => (
    <div className="w-80">
      <Validator
        type="email"
        required
        placeholder="email@example.com"
        hint="Must be a valid email address"
      />
    </div>
  ),
}

export const URLValidation: Story = {
  render: () => (
    <div className="w-80">
      <Validator
        type="url"
        required
        placeholder="https://"
        defaultValue="https://"
        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\\-].*[a-zA-Z0-9])?\\.)+[a-zA-Z].*$"
        title="Must be valid URL"
        hint="Must be a valid URL"
      />
    </div>
  ),
}

export const PasswordValidation: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <Validator
          type="password"
          required
          minLength={8}
          placeholder="Password"
          hint="Must be at least 8 characters"
        />
      </div>
      <div>
        <Validator
          type="password"
          required
          minLength={8}
          placeholder="Confirm password"
          hint="Passwords must match"
        />
      </div>
    </div>
  ),
}

export const NumberValidation: Story = {
  render: () => (
    <div className="w-80">
      <Validator
        type="number"
        required
        min={18}
        max={120}
        placeholder="Age"
        hint="Must be between 18 and 120"
      />
    </div>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="label">
          <span className="label-text">Primary</span>
        </label>
        <Validator
          variant="primary"
          type="text"
          required
          placeholder="Username"
          hint="Required field"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Success</span>
        </label>
        <Validator
          variant="success"
          type="email"
          required
          placeholder="email@example.com"
          defaultValue="valid@email.com"
          hint="Valid email address"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Error</span>
        </label>
        <Validator
          variant="error"
          type="text"
          required
          placeholder="Username"
          hint="This field is required"
        />
      </div>
    </div>
  ),
}

export const WithSizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Validator size="xs" placeholder="Extra small" hint="xs size" />
      <Validator size="sm" placeholder="Small" hint="sm size" />
      <Validator size="md" placeholder="Medium (default)" hint="md size" />
      <Validator size="lg" placeholder="Large" hint="lg size" />
    </div>
  ),
}

export const ComplexForm: Story = {
  render: () => (
    <form className="w-96 space-y-4">
      <div>
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <Validator
          type="text"
          required
          minLength={2}
          placeholder="John Doe"
          hint="At least 2 characters"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <Validator
          type="email"
          required
          placeholder="john@example.com"
          hint="We'll never share your email"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <Validator
          type="tel"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          hint="Format: 123-456-7890"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Website</span>
        </label>
        <Validator type="url" placeholder="https://example.com" hint="Optional: Your website URL" />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  ),
}

export const SeparateHintComponent: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Validator
        type="text"
        required
        placeholder="Username"
        pattern="[A-Za-z][A-Za-z0-9\\-]*"
        minLength={3}
        maxLength={30}
      />
      <ValidatorHint>
        Must start with a letter
        <br />
        Can contain letters, numbers, and dashes
        <br />
        Must be 3-30 characters long
      </ValidatorHint>
    </div>
  ),
}

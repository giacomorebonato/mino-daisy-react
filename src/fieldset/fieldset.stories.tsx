import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../checkbox'
import { Input } from '../input'
import { Label } from '../label'
import { Radio } from '../radio'
import { Fieldset, FieldsetLegend } from './fieldset'

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Fieldset>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Personal Information</FieldsetLegend>
      <div className="flex flex-col gap-4 w-80">
        <Label>
          <span className="label">First Name</span>
          <Input placeholder="John" />
        </Label>
        <Label>
          <span className="label">Last Name</span>
          <Input placeholder="Doe" />
        </Label>
      </div>
      <p className="label text-sm opacity-70 mt-2">Please provide your full legal name</p>
    </Fieldset>
  ),
}

export const WithRadioButtons: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Choose a plan</FieldsetLegend>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <Radio name="plan" defaultChecked />
          <div>
            <div className="font-medium">Free</div>
            <div className="text-sm opacity-70">Basic features</div>
          </div>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Radio name="plan" />
          <div>
            <div className="font-medium">Pro - $10/month</div>
            <div className="text-sm opacity-70">Advanced features</div>
          </div>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Radio name="plan" />
          <div>
            <div className="font-medium">Enterprise - $50/month</div>
            <div className="text-sm opacity-70">All features</div>
          </div>
        </label>
      </div>
      <p className="label text-sm opacity-70 mt-2">You can change your plan at any time</p>
    </Fieldset>
  ),
}

export const WithCheckboxes: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Preferences</FieldsetLegend>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox defaultChecked />
          <span>Email notifications</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox />
          <span>SMS notifications</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox defaultChecked />
          <span>Push notifications</span>
        </label>
      </div>
      <p className="label text-sm opacity-70 mt-2">Select how you want to be notified</p>
    </Fieldset>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Fieldset disabled>
      <FieldsetLegend>Disabled Fieldset</FieldsetLegend>
      <div className="flex flex-col gap-4 w-80">
        <Label>
          <span className="label">Username</span>
          <Input placeholder="Cannot edit" />
        </Label>
        <Label>
          <span className="label">Email</span>
          <Input placeholder="Cannot edit" />
        </Label>
      </div>
      <p className="label text-sm opacity-70 mt-2">This section is currently disabled</p>
    </Fieldset>
  ),
}

export const NestedFieldsets: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Fieldset>
        <FieldsetLegend>Account Details</FieldsetLegend>
        <div className="flex flex-col gap-4">
          <Label>
            <span className="label">Email</span>
            <Input type="email" placeholder="you@example.com" />
          </Label>
          <Label>
            <span className="label">Password</span>
            <Input type="password" placeholder="Enter password" />
          </Label>
        </div>
      </Fieldset>

      <Fieldset>
        <FieldsetLegend>Billing Information</FieldsetLegend>
        <div className="flex flex-col gap-4">
          <Label>
            <span className="label">Card Number</span>
            <Input placeholder="1234 5678 9012 3456" />
          </Label>
          <div className="flex gap-4">
            <Label className="flex-1">
              <span className="label">Expiry</span>
              <Input placeholder="MM/YY" />
            </Label>
            <Label className="flex-1">
              <span className="label">CVV</span>
              <Input placeholder="123" />
            </Label>
          </div>
        </div>
      </Fieldset>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="w-[600px] p-6 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Registration Form</h2>

      <div className="flex flex-col gap-6">
        <Fieldset>
          <FieldsetLegend>Personal Information</FieldsetLegend>
          <div className="grid grid-cols-2 gap-4">
            <Label>
              <span className="label">First Name</span>
              <Input placeholder="John" />
            </Label>
            <Label>
              <span className="label">Last Name</span>
              <Input placeholder="Doe" />
            </Label>
          </div>
          <Label>
            <span className="label">Email Address</span>
            <Input type="email" placeholder="john.doe@example.com" />
          </Label>
        </Fieldset>

        <Fieldset>
          <FieldsetLegend>Account Type</FieldsetLegend>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio name="account-type" defaultChecked />
              <span>Personal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio name="account-type" />
              <span>Business</span>
            </label>
          </div>
        </Fieldset>

        <Fieldset>
          <FieldsetLegend>Notifications</FieldsetLegend>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox defaultChecked />
              <span>Email updates</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox defaultChecked />
              <span>Newsletter</span>
            </label>
          </div>
          <p className="label text-sm opacity-70 mt-2">You can unsubscribe at any time</p>
        </Fieldset>

        <button type="button" className="btn btn-primary">
          Create Account
        </button>
      </div>
    </div>
  ),
}

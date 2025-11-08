import type { Meta, StoryObj } from '@storybook/react'
import { Step, Steps } from './steps'

const meta = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Steps>
      <Step>Register</Step>
      <Step>Choose plan</Step>
      <Step>Purchase</Step>
      <Step>Receive Product</Step>
    </Steps>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <Steps>
      <Step variant="primary">Register</Step>
      <Step variant="primary">Choose plan</Step>
      <Step>Purchase</Step>
      <Step>Receive Product</Step>
    </Steps>
  ),
}

export const WithDataContent: Story = {
  render: () => (
    <Steps>
      <Step dataContent="?" variant="neutral">
        Step 1
      </Step>
      <Step dataContent="!" variant="neutral">
        Step 2
      </Step>
      <Step dataContent="✓" variant="neutral">
        Step 3
      </Step>
      <Step dataContent="✕" variant="neutral">
        Step 4
      </Step>
      <Step dataContent="★" variant="neutral">
        Step 5
      </Step>
    </Steps>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Steps vertical>
      <Step variant="primary">Register</Step>
      <Step variant="primary">Choose plan</Step>
      <Step>Purchase</Step>
      <Step>Receive Product</Step>
    </Steps>
  ),
}

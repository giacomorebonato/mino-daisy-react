import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from './submit-button'

const meta = {
  title: 'Components/SubmitButton',
  component: SubmitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Submit',
  },
}

export const Loading: Story = {
  args: {
    children: 'Submitting...',
    isLoading: true,
    className: 'btn-primary',
  },
}

export const Primary: Story = {
  args: {
    children: 'Submit',
    className: 'btn-primary',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <SubmitButton className="btn-primary" isLoading>
        Primary
      </SubmitButton>
      <SubmitButton className="btn-secondary" isLoading>
        Secondary
      </SubmitButton>
      <SubmitButton className="btn-accent" isLoading>
        Accent
      </SubmitButton>
      <SubmitButton className="btn-error" isLoading>
        Error
      </SubmitButton>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    children: 'Submit',
    disabled: true,
    className: 'btn-primary',
  },
}

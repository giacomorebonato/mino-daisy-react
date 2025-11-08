import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-56">
      <Progress value={0} />
      <Progress value={10} />
      <Progress value={40} />
      <Progress value={70} />
      <Progress value={100} />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-56">
      <Progress variant="neutral" value={70} />
      <Progress variant="primary" value={70} />
      <Progress variant="secondary" value={70} />
      <Progress variant="accent" value={70} />
      <Progress variant="info" value={70} />
      <Progress variant="success" value={70} />
      <Progress variant="warning" value={70} />
      <Progress variant="error" value={70} />
    </div>
  ),
}

export const Indeterminate: Story = {
  render: () => <Progress className="w-56" />,
}

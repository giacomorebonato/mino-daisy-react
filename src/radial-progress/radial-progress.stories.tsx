import type { Meta, StoryObj } from '@storybook/react'
import { RadialProgress } from './radial-progress'

const meta = {
  title: 'Components/RadialProgress',
  component: RadialProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadialProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <RadialProgress value={70} />,
}

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-4">
      <RadialProgress value={0} />
      <RadialProgress value={20} />
      <RadialProgress value={60} />
      <RadialProgress value={80} />
      <RadialProgress value={100} />
    </div>
  ),
}

export const WithColor: Story = {
  render: () => (
    <div className="flex gap-4">
      <RadialProgress value={70} className="text-primary" />
      <RadialProgress value={70} className="text-secondary" />
      <RadialProgress value={70} className="text-accent" />
    </div>
  ),
}

export const CustomSize: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <RadialProgress value={70} size="6rem" thickness="2px" />
      <RadialProgress value={70} size="12rem" thickness="2rem" />
    </div>
  ),
}

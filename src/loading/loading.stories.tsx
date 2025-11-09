import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from './loading'

const meta = {
  title: 'Utilities & Special/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Loading />,
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading type="spinner" />
      <Loading type="dots" />
      <Loading type="ring" />
      <Loading type="ball" />
      <Loading type="bars" />
      <Loading type="infinity" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </div>
  ),
}

export const WithColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading className="text-primary" />
      <Loading className="text-secondary" />
      <Loading className="text-accent" />
      <Loading className="text-neutral" />
      <Loading className="text-info" />
      <Loading className="text-success" />
      <Loading className="text-warning" />
      <Loading className="text-error" />
    </div>
  ),
}

export const DotsVariant: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading type="dots" size="xs" />
      <Loading type="dots" size="sm" />
      <Loading type="dots" size="md" />
      <Loading type="dots" size="lg" />
    </div>
  ),
}

export const RingVariant: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading type="ring" size="xs" />
      <Loading type="ring" size="sm" />
      <Loading type="ring" size="md" />
      <Loading type="ring" size="lg" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <button type="button" className="btn">
        <Loading size="sm" />
        Loading
      </button>
      <button type="button" className="btn btn-primary">
        <Loading type="dots" size="sm" className="text-primary-content" />
        Processing
      </button>
      <button type="button" className="btn btn-square">
        <Loading size="sm" />
      </button>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body items-center text-center">
        <Loading size="lg" className="text-primary" />
        <h2 className="card-title mt-4">Loading Content</h2>
        <p>Please wait while we fetch your data...</p>
      </div>
    </div>
  ),
}

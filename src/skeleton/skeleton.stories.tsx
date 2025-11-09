import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta = {
  title: 'Utilities & Special/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Square: Story = {
  render: () => <Skeleton className="h-32 w-32" />,
}

export const Circle: Story = {
  render: () => <Skeleton className="h-16 w-16 rounded-full" />,
}

export const Rectangle: Story = {
  render: () => <Skeleton className="h-32 w-full max-w-md" />,
}

export const TextLines: Story = {
  render: () => (
    <div className="flex w-52 flex-col gap-4">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 shrink-0 rounded-full" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
      <Skeleton className="h-32 w-full" />
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="card bg-base-100 w-96 shadow-xl">
      <Skeleton className="h-48 w-full" />
      <div className="card-body">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="card-actions justify-end mt-4">
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  ),
}

export const List: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Table: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((i) => (
            <tr key={i}>
              <td>
                <Skeleton className="h-4 w-32" />
              </td>
              <td>
                <Skeleton className="h-4 w-48" />
              </td>
              <td>
                <Skeleton className="h-4 w-24" />
              </td>
              <td>
                <Skeleton className="h-6 w-16 rounded-full" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-32 mt-2" />
        </div>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-32 mt-2" />
        </div>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-32 mt-2" />
        </div>
      </div>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Filter, FilterItem, FilterReset } from './filter'

const meta = {
  title: 'Interactive & Feedback/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Filter name="default-filter">
      <FilterReset name="default-filter" />
      <FilterItem name="default-filter" aria-label="All" defaultChecked />
      <FilterItem name="default-filter" aria-label="Active" />
      <FilterItem name="default-filter" aria-label="Completed" />
      <FilterItem name="default-filter" aria-label="Archived" />
    </Filter>
  ),
}

export const AsForm: Story = {
  render: () => (
    <Filter name="form-filter" asForm>
      <FilterReset name="form-filter" asReset />
      <FilterItem name="form-filter" aria-label="All" defaultChecked />
      <FilterItem name="form-filter" aria-label="Active" />
      <FilterItem name="form-filter" aria-label="Completed" />
      <FilterItem name="form-filter" aria-label="Archived" />
    </Filter>
  ),
}

export const Categories: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 font-semibold">Product Categories</h3>
        <Filter name="categories">
          <FilterReset name="categories" />
          <FilterItem name="categories" aria-label="All Products" defaultChecked />
          <FilterItem name="categories" aria-label="Electronics" />
          <FilterItem name="categories" aria-label="Clothing" />
          <FilterItem name="categories" aria-label="Books" />
          <FilterItem name="categories" aria-label="Home & Garden" />
        </Filter>
      </div>
    </div>
  ),
}

export const Status: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 font-semibold">Order Status</h3>
        <Filter name="status">
          <FilterReset name="status" />
          <FilterItem name="status" aria-label="All Orders" defaultChecked />
          <FilterItem name="status" aria-label="Pending" />
          <FilterItem name="status" aria-label="Processing" />
          <FilterItem name="status" aria-label="Shipped" />
          <FilterItem name="status" aria-label="Delivered" />
          <FilterItem name="status" aria-label="Cancelled" />
        </Filter>
      </div>
    </div>
  ),
}

export const Priority: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 font-semibold">Task Priority</h3>
        <Filter name="priority">
          <FilterReset name="priority" />
          <FilterItem name="priority" aria-label="All Tasks" defaultChecked />
          <FilterItem name="priority" aria-label="Low" />
          <FilterItem name="priority" aria-label="Medium" />
          <FilterItem name="priority" aria-label="High" />
          <FilterItem name="priority" aria-label="Urgent" />
        </Filter>
      </div>
    </div>
  ),
}

export const WithButtonVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 font-semibold">Styled Filters</h3>
        <Filter name="styled">
          <FilterReset name="styled" />
          <FilterItem name="styled" aria-label="All" className="btn-primary" defaultChecked />
          <FilterItem name="styled" aria-label="Active" className="btn-secondary" />
          <FilterItem name="styled" aria-label="Pending" className="btn-accent" />
          <FilterItem name="styled" aria-label="Completed" className="btn-success" />
        </Filter>
      </div>
    </div>
  ),
}

export const MultipleFilters: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 font-semibold">Filter by Type</h3>
        <Filter name="type">
          <FilterReset name="type" />
          <FilterItem name="type" aria-label="All Types" defaultChecked />
          <FilterItem name="type" aria-label="Bug" />
          <FilterItem name="type" aria-label="Feature" />
          <FilterItem name="type" aria-label="Enhancement" />
        </Filter>
      </div>

      <div>
        <h3 className="mb-2 font-semibold">Filter by Status</h3>
        <Filter name="multi-status">
          <FilterReset name="multi-status" />
          <FilterItem name="multi-status" aria-label="All" defaultChecked />
          <FilterItem name="multi-status" aria-label="Open" />
          <FilterItem name="multi-status" aria-label="In Progress" />
          <FilterItem name="multi-status" aria-label="Closed" />
        </Filter>
      </div>
    </div>
  ),
}

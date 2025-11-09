import type { Meta, StoryObj } from '@storybook/react'
import { Join } from './join'

const meta = {
  title: 'Utilities & Special/Join',
  component: Join,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Join>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Join>
      <button type="button" className="btn join-item">
        Button
      </button>
      <button type="button" className="btn join-item">
        Button
      </button>
      <button type="button" className="btn join-item">
        Button
      </button>
    </Join>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Join orientation="vertical">
      <button type="button" className="btn join-item">
        Button
      </button>
      <button type="button" className="btn join-item">
        Button
      </button>
      <button type="button" className="btn join-item">
        Button
      </button>
    </Join>
  ),
}

export const RadioButtons: Story = {
  render: () => (
    <Join>
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
    </Join>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <Join>
      <button type="button" className="btn join-item">
        Normal
      </button>
      <button type="button" className="btn btn-primary join-item">
        Primary
      </button>
      <button type="button" className="btn btn-secondary join-item">
        Secondary
      </button>
      <button type="button" className="btn btn-accent join-item">
        Accent
      </button>
    </Join>
  ),
}

export const SearchForm: Story = {
  render: () => (
    <Join>
      <div>
        <div>
          <input className="input join-item" placeholder="Search" />
        </div>
      </div>
      <select className="select join-item">
        <option disabled selected>
          Filter
        </option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">new</span>
        <button type="button" className="btn join-item">
          Search
        </button>
      </div>
    </Join>
  ),
}

export const InputGroup: Story = {
  render: () => (
    <Join>
      <input className="input input-bordered join-item" placeholder="Email" />
      <button type="button" className="btn btn-primary join-item">
        Subscribe
      </button>
    </Join>
  ),
}

export const Pagination: Story = {
  render: () => (
    <Join>
      <button type="button" className="join-item btn">
        1
      </button>
      <button type="button" className="join-item btn btn-active">
        2
      </button>
      <button type="button" className="join-item btn">
        3
      </button>
      <button type="button" className="join-item btn">
        4
      </button>
    </Join>
  ),
}

export const ButtonGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <Join>
        <button type="button" className="btn join-item">
          Prev
        </button>
        <button type="button" className="btn join-item">
          1
        </button>
        <button type="button" className="btn join-item">
          2
        </button>
        <button type="button" className="btn join-item">
          Next
        </button>
      </Join>
      <Join>
        <button type="button" className="btn btn-sm join-item">
          Small
        </button>
        <button type="button" className="btn btn-sm join-item">
          Small
        </button>
        <button type="button" className="btn btn-sm join-item">
          Small
        </button>
      </Join>
      <Join>
        <button type="button" className="btn btn-lg join-item">
          Large
        </button>
        <button type="button" className="btn btn-lg join-item">
          Large
        </button>
        <button type="button" className="btn btn-lg join-item">
          Large
        </button>
      </Join>
    </div>
  ),
}

export const SegmentedControl: Story = {
  render: () => (
    <div className="space-y-4">
      <Join>
        <input
          className="join-item btn btn-sm"
          type="radio"
          name="view"
          aria-label="List"
          defaultChecked
        />
        <input className="join-item btn btn-sm" type="radio" name="view" aria-label="Grid" />
        <input className="join-item btn btn-sm" type="radio" name="view" aria-label="Map" />
      </Join>
      <Join orientation="vertical">
        <input className="join-item btn" type="radio" name="align" aria-label="Left" />
        <input className="join-item btn" type="radio" name="align" aria-label="Center" />
        <input className="join-item btn" type="radio" name="align" aria-label="Right" />
      </Join>
    </div>
  ),
}

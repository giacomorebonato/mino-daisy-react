import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Pagination } from './pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination>
      <Button className="join-item">1</Button>
      <Button className="join-item">2</Button>
      <Button className="join-item btn-active">3</Button>
      <Button className="join-item">4</Button>
    </Pagination>
  ),
}

export const WithArrows: Story = {
  render: () => (
    <Pagination>
      <Button className="join-item">«</Button>
      <Button className="join-item">Page 22</Button>
      <Button className="join-item">»</Button>
    </Pagination>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <Pagination>
      <Button className="join-item">Previous</Button>
      <Button className="join-item btn-active">1</Button>
      <Button className="join-item">Next</Button>
    </Pagination>
  ),
}

export const MultiPage: Story = {
  render: () => (
    <Pagination>
      <Button className="join-item">«</Button>
      <Button className="join-item">1</Button>
      <Button className="join-item">2</Button>
      <Button className="join-item btn-active">3</Button>
      <Button className="join-item">4</Button>
      <Button className="join-item">5</Button>
      <Button className="join-item">»</Button>
    </Pagination>
  ),
}

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <Button className="join-item">«</Button>
      <Button className="join-item">1</Button>
      <Button className="join-item btn-disabled">...</Button>
      <Button className="join-item btn-active">10</Button>
      <Button className="join-item btn-disabled">...</Button>
      <Button className="join-item">20</Button>
      <Button className="join-item">»</Button>
    </Pagination>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Pagination>
        <Button size="xs" className="join-item">
          1
        </Button>
        <Button size="xs" className="join-item">
          2
        </Button>
        <Button size="xs" className="join-item btn-active">
          3
        </Button>
        <Button size="xs" className="join-item">
          4
        </Button>
      </Pagination>
      <Pagination>
        <Button size="sm" className="join-item">
          1
        </Button>
        <Button size="sm" className="join-item">
          2
        </Button>
        <Button size="sm" className="join-item btn-active">
          3
        </Button>
        <Button size="sm" className="join-item">
          4
        </Button>
      </Pagination>
      <Pagination>
        <Button className="join-item">1</Button>
        <Button className="join-item">2</Button>
        <Button className="join-item btn-active">3</Button>
        <Button className="join-item">4</Button>
      </Pagination>
      <Pagination>
        <Button size="lg" className="join-item">
          1
        </Button>
        <Button size="lg" className="join-item">
          2
        </Button>
        <Button size="lg" className="join-item btn-active">
          3
        </Button>
        <Button size="lg" className="join-item">
          4
        </Button>
      </Pagination>
    </div>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Pagination>
        <Button variant="primary" className="join-item">
          1
        </Button>
        <Button variant="primary" className="join-item">
          2
        </Button>
        <Button variant="primary" className="join-item btn-active">
          3
        </Button>
        <Button variant="primary" className="join-item">
          4
        </Button>
      </Pagination>
      <Pagination>
        <Button variant="secondary" className="join-item">
          1
        </Button>
        <Button variant="secondary" className="join-item">
          2
        </Button>
        <Button variant="secondary" className="join-item btn-active">
          3
        </Button>
        <Button variant="secondary" className="join-item">
          4
        </Button>
      </Pagination>
      <Pagination>
        <Button variant="accent" className="join-item">
          1
        </Button>
        <Button variant="accent" className="join-item">
          2
        </Button>
        <Button variant="accent" className="join-item btn-active">
          3
        </Button>
        <Button variant="accent" className="join-item">
          4
        </Button>
      </Pagination>
    </div>
  ),
}

export const WithInput: Story = {
  render: () => (
    <Pagination>
      <Button className="join-item">«</Button>
      <div className="join-item flex items-center px-4">
        Page
        <input
          type="text"
          className="input input-bordered w-16 mx-2"
          defaultValue="22"
        />
        of 100
      </div>
      <Button className="join-item">»</Button>
    </Pagination>
  ),
}

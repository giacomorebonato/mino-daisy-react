import type { Meta, StoryObj } from '@storybook/react'
import { Fab, FabClose, FabMainAction } from './fab'

const meta = {
  title: 'Components/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    flower: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Fab>

export default meta
type Story = StoryObj<typeof meta>

// SVG Icons for examples
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>Plus</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
)

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>Edit</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
)

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>Share</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>Close</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

export const Default: Story = {
  render: () => (
    <div className="h-96 w-96 relative">
      <Fab>
        <button type="button" className="btn btn-lg btn-circle btn-primary">
          <PlusIcon />
        </button>
      </Fab>
    </div>
  ),
}

export const VerticalSpeedDial: Story = {
  render: () => (
    <div className="h-96 w-96 relative">
      <Fab>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-primary"
        >
          <PlusIcon />
        </div>
        <button type="button" className="btn btn-lg btn-circle">
          <EditIcon />
        </button>
        <button type="button" className="btn btn-lg btn-circle">
          <ShareIcon />
        </button>
      </Fab>
    </div>
  ),
}

export const FlowerLayout: Story = {
  render: () => (
    <div className="h-96 w-96 relative">
      <Fab flower>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-primary"
        >
          <PlusIcon />
        </div>
        <button type="button" className="btn btn-lg btn-circle">
          <EditIcon />
        </button>
        <button type="button" className="btn btn-lg btn-circle">
          <ShareIcon />
        </button>
      </Fab>
    </div>
  ),
}

export const WithCloseButton: Story = {
  render: () => (
    <div className="h-96 w-96 relative">
      <Fab>
        <FabClose>
          <button type="button" className="btn btn-lg btn-circle btn-primary">
            <CloseIcon />
          </button>
        </FabClose>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-primary"
        >
          <PlusIcon />
        </div>
        <button type="button" className="btn btn-lg btn-circle">
          <EditIcon />
        </button>
        <button type="button" className="btn btn-lg btn-circle">
          <ShareIcon />
        </button>
      </Fab>
    </div>
  ),
}

export const WithMainAction: Story = {
  render: () => (
    <div className="h-96 w-96 relative">
      <Fab>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-primary"
        >
          <PlusIcon />
        </div>
        <FabMainAction className="btn btn-lg btn-circle btn-secondary">
          <EditIcon />
        </FabMainAction>
        <button type="button" className="btn btn-lg btn-circle">
          <ShareIcon />
        </button>
      </Fab>
    </div>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="h-64 w-64 relative">
        <Fab>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-lg btn-circle btn-primary"
          >
            <PlusIcon />
          </div>
          <button type="button" className="btn btn-lg btn-circle">
            <EditIcon />
          </button>
        </Fab>
      </div>
      <div className="h-64 w-64 relative">
        <Fab>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-lg btn-circle btn-secondary"
          >
            <PlusIcon />
          </div>
          <button type="button" className="btn btn-lg btn-circle">
            <EditIcon />
          </button>
        </Fab>
      </div>
      <div className="h-64 w-64 relative">
        <Fab>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-lg btn-circle btn-accent"
          >
            <PlusIcon />
          </div>
          <button type="button" className="btn btn-lg btn-circle">
            <EditIcon />
          </button>
        </Fab>
      </div>
    </div>
  ),
}

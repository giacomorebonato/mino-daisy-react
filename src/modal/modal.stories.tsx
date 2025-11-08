import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import { Modal, ModalAction, ModalBackdrop, ModalBox } from './modal'

const meta = {
  title: 'Interactive & Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    placement: {
      control: 'select',
      options: ['top', 'middle', 'bottom', 'start', 'end'],
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClick={() => setOpen(false)}>
          <ModalBox>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
            <ModalAction>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </ModalAction>
          </ModalBox>
          <ModalBackdrop />
        </Modal>
      </>
    )
  },
}

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClick={() => setOpen(false)}>
          <ModalBox>
            <h3 className="font-bold text-lg">Confirm Action</h3>
            <p className="py-4">Are you sure you want to proceed?</p>
            <ModalAction>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </ModalAction>
          </ModalBox>
          <ModalBackdrop />
        </Modal>
      </>
    )
  },
}

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Top Modal</Button>
        <Modal open={open} placement="top" onClick={() => setOpen(false)}>
          <ModalBox>
            <h3 className="font-bold text-lg">Top Modal</h3>
            <p className="py-4">This modal appears at the top</p>
            <ModalAction>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </ModalAction>
          </ModalBox>
          <ModalBackdrop />
        </Modal>
      </>
    )
  },
}

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Modal</Button>
        <Modal open={open} placement="bottom" onClick={() => setOpen(false)}>
          <ModalBox>
            <h3 className="font-bold text-lg">Bottom Modal</h3>
            <p className="py-4">This modal appears at the bottom</p>
            <ModalAction>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </ModalAction>
          </ModalBox>
          <ModalBackdrop />
        </Modal>
      </>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClick={() => setOpen(false)}>
          <ModalBox>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="py-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
            </div>
            <ModalAction>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Login
              </Button>
            </ModalAction>
          </ModalBox>
          <ModalBackdrop />
        </Modal>
      </>
    )
  },
}

export const WithCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClick={() => setOpen(false)}>
          <ModalBox>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Modal with Close Button</h3>
            <p className="py-4">Click the X button to close</p>
          </ModalBox>
          <ModalBackdrop />
        </Modal>
      </>
    )
  },
}

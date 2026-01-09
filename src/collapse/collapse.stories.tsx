import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Collapse, CollapseCheckbox, CollapseContent, CollapseTitle } from './collapse'

const meta = {
  title: 'Interactive & Feedback/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    checkbox: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Collapse>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Collapse className="bg-base-200">
        <CollapseTitle>Click to expand</CollapseTitle>
        <CollapseContent>
          <p>This is the collapsible content area.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <div className="w-96">
      <Collapse className="collapse-arrow bg-base-200">
        <CollapseTitle>Click to expand</CollapseTitle>
        <CollapseContent>
          <p>This collapse has an arrow icon.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const WithPlus: Story = {
  render: () => (
    <div className="w-96">
      <Collapse className="collapse-plus bg-base-200">
        <CollapseTitle>Click to expand</CollapseTitle>
        <CollapseContent>
          <p>This collapse has a plus icon.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const Open: Story = {
  render: () => (
    <div className="w-96">
      <Collapse className="collapse-arrow bg-base-200" open>
        <CollapseTitle>This is open by default</CollapseTitle>
        <CollapseContent>
          <p>The content is visible initially.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const Closed: Story = {
  render: () => (
    <div className="w-96">
      <Collapse className="collapse-arrow bg-base-200" open={false}>
        <CollapseTitle>This is closed</CollapseTitle>
        <CollapseContent>
          <p>The content is hidden.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="w-96">
      <Collapse checkbox className="collapse-arrow bg-base-200">
        <CollapseCheckbox />
        <CollapseTitle>Click to expand (checkbox controlled)</CollapseTitle>
        <CollapseContent>
          <p>This collapse is controlled by a checkbox input.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <button type="button" className="btn btn-primary" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'} Collapse
        </button>
        <Collapse className="collapse-arrow bg-base-200" open={open}>
          <CollapseTitle>Controlled Collapse</CollapseTitle>
          <CollapseContent>
            <p>This collapse is controlled by external state.</p>
          </CollapseContent>
        </Collapse>
      </div>
    )
  },
}

export const Multiple: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Collapse className="collapse-arrow bg-base-200">
        <CollapseTitle>Section 1</CollapseTitle>
        <CollapseContent>
          <p>Content for section 1</p>
        </CollapseContent>
      </Collapse>
      <Collapse className="collapse-arrow bg-base-200">
        <CollapseTitle>Section 2</CollapseTitle>
        <CollapseContent>
          <p>Content for section 2</p>
        </CollapseContent>
      </Collapse>
      <Collapse className="collapse-arrow bg-base-200">
        <CollapseTitle>Section 3</CollapseTitle>
        <CollapseContent>
          <p>Content for section 3</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

export const Styled: Story = {
  render: () => (
    <div className="w-96">
      <Collapse className="collapse-plus border border-base-300 bg-base-100 rounded-box">
        <CollapseTitle className="text-xl font-medium">Styled Collapse</CollapseTitle>
        <CollapseContent>
          <p>This collapse has custom styling applied.</p>
          <p className="mt-2">You can add borders, backgrounds, and other styles.</p>
        </CollapseContent>
      </Collapse>
    </div>
  ),
}

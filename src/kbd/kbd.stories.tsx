import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './kbd'

const meta = {
  title: 'Utilities & Special/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Kbd>K</Kbd>,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Kbd size="xs">Xs</Kbd>
      <Kbd size="sm">Sm</Kbd>
      <Kbd size="md">Md</Kbd>
      <Kbd size="lg">Lg</Kbd>
    </div>
  ),
}

export const InText: Story = {
  render: () => (
    <p>
      Press <Kbd size="sm">F</Kbd> to pay respects.
    </p>
  ),
}

export const KeyCombination: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd>ctrl</Kbd>+<Kbd>shift</Kbd>+<Kbd>del</Kbd>
    </div>
  ),
}

export const FunctionKeys: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
    </div>
  ),
}

export const ArrowKeys: Story = {
  render: () => (
    <div className="space-y-1">
      <div className="flex w-full justify-center">
        <Kbd>▲</Kbd>
      </div>
      <div className="flex w-full justify-center gap-12">
        <Kbd>◀︎</Kbd>
        <Kbd>▶︎</Kbd>
      </div>
      <div className="flex w-full justify-center">
        <Kbd>▼</Kbd>
      </div>
    </div>
  ),
}

export const KeyboardLayout: Story = {
  render: () => (
    <div className="space-y-1">
      <div className="flex w-full justify-center gap-1">
        <Kbd>q</Kbd>
        <Kbd>w</Kbd>
        <Kbd>e</Kbd>
        <Kbd>r</Kbd>
        <Kbd>t</Kbd>
        <Kbd>y</Kbd>
        <Kbd>u</Kbd>
        <Kbd>i</Kbd>
        <Kbd>o</Kbd>
        <Kbd>p</Kbd>
      </div>
      <div className="flex w-full justify-center gap-1">
        <Kbd>a</Kbd>
        <Kbd>s</Kbd>
        <Kbd>d</Kbd>
        <Kbd>f</Kbd>
        <Kbd>g</Kbd>
        <Kbd>h</Kbd>
        <Kbd>j</Kbd>
        <Kbd>k</Kbd>
        <Kbd>l</Kbd>
      </div>
      <div className="flex w-full justify-center gap-1">
        <Kbd>z</Kbd>
        <Kbd>x</Kbd>
        <Kbd>c</Kbd>
        <Kbd>v</Kbd>
        <Kbd>b</Kbd>
        <Kbd>n</Kbd>
        <Kbd>m</Kbd>
        <Kbd>/</Kbd>
      </div>
    </div>
  ),
}

export const CommonShortcuts: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between w-64">
        <span>Copy</span>
        <div className="flex items-center gap-1">
          <Kbd size="sm">⌘</Kbd>+<Kbd size="sm">C</Kbd>
        </div>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Paste</span>
        <div className="flex items-center gap-1">
          <Kbd size="sm">⌘</Kbd>+<Kbd size="sm">V</Kbd>
        </div>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Undo</span>
        <div className="flex items-center gap-1">
          <Kbd size="sm">⌘</Kbd>+<Kbd size="sm">Z</Kbd>
        </div>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Select All</span>
        <div className="flex items-center gap-1">
          <Kbd size="sm">⌘</Kbd>+<Kbd size="sm">A</Kbd>
        </div>
      </div>
    </div>
  ),
}

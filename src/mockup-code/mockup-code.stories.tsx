import type { Meta, StoryObj } from '@storybook/react'
import { MockupCode } from './mockup-code'

const meta = {
  title: 'Mockups & Prototyping/MockupCode',
  component: MockupCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MockupCode>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre data-prefix="$">
        <code>npm i daisyui</code>
      </pre>
    </MockupCode>
  ),
}

export const MultipleLines: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre data-prefix="$">
        <code>npm i daisyui</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>installing...</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>Done!</code>
      </pre>
    </MockupCode>
  ),
}

export const WithoutPrefix: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre>
        <code>without prefix</code>
      </pre>
    </MockupCode>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <MockupCode className="bg-primary text-primary-content w-full max-w-2xl">
      <pre>
        <code>can be any color!</code>
      </pre>
    </MockupCode>
  ),
}

export const HighlightedLine: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre data-prefix="1">
        <code>npm i daisyui</code>
      </pre>
      <pre data-prefix="2">
        <code>installing...</code>
      </pre>
      <pre data-prefix="3" className="bg-warning text-warning-content">
        <code>Error!</code>
      </pre>
    </MockupCode>
  ),
}

export const LongLine: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre data-prefix="~">
        <code>
          Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore
          ratione.
        </code>
      </pre>
    </MockupCode>
  ),
}

export const GitCommands: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre data-prefix="$">
        <code>git status</code>
      </pre>
      <pre data-prefix=">" className="text-info">
        <code>On branch main</code>
      </pre>
      <pre data-prefix=">" className="text-info">
        <code>Your branch is up to date with 'origin/main'</code>
      </pre>
      <pre data-prefix="$">
        <code>git add .</code>
      </pre>
      <pre data-prefix="$">
        <code>git commit -m "Update components"</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>[main abc123] Update components</code>
      </pre>
    </MockupCode>
  ),
}

export const PythonCode: Story = {
  render: () => (
    <MockupCode className="w-full max-w-2xl">
      <pre data-prefix=">>>">
        <code>print("Hello, World!")</code>
      </pre>
      <pre>
        <code>Hello, World!</code>
      </pre>
      <pre data-prefix=">>>">
        <code>x = 5 + 3</code>
      </pre>
      <pre data-prefix=">>>">
        <code>print(x)</code>
      </pre>
      <pre>
        <code>8</code>
      </pre>
    </MockupCode>
  ),
}

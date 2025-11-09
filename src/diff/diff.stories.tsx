import type { Meta, StoryObj } from '@storybook/react'
import { Diff, DiffItem, DiffResizer } from './diff'

const meta = {
  title: 'Visual & Media/Diff',
  component: Diff,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Diff>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Diff className="aspect-16/9">
      <DiffItem item={1}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
          alt="Before"
        />
      </DiffItem>
      <DiffItem item={2}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
          alt="After"
        />
      </DiffItem>
      <DiffResizer />
    </Diff>
  ),
}

export const TextComparison: Story = {
  render: () => (
    <Diff className="aspect-16/9">
      <DiffItem
        item={1}
        className="bg-primary text-primary-content grid place-content-center text-9xl font-black"
      >
        DAISY
      </DiffItem>
      <DiffItem item={2} className="bg-base-200 grid place-content-center text-9xl font-black">
        DAISY
      </DiffItem>
      <DiffResizer />
    </Diff>
  ),
}

export const ColorComparison: Story = {
  render: () => (
    <Diff className="aspect-16/9">
      <DiffItem item={1} className="bg-warning grid place-content-center" />
      <DiffItem item={2} className="bg-info grid place-content-center" />
      <DiffResizer />
    </Diff>
  ),
}

export const ImageGallery: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Diff className="aspect-video">
        <DiffItem item={1}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
            alt="Original"
          />
        </DiffItem>
        <DiffItem item={2}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
            alt="Blurred"
          />
        </DiffItem>
        <DiffResizer />
      </Diff>
      <div className="text-center text-sm">
        <p className="font-semibold">Original vs. Blurred</p>
      </div>
    </div>
  ),
}

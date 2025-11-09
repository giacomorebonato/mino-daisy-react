import type { Meta, StoryObj } from '@storybook/react'
import { Mask } from './mask'

const meta = {
  title: 'Visual & Media/Mask',
  component: Mask,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: [
        'squircle',
        'heart',
        'hexagon',
        'hexagon-2',
        'decagon',
        'pentagon',
        'diamond',
        'square',
        'circle',
        'parallelogram',
        'parallelogram-2',
        'parallelogram-3',
        'parallelogram-4',
        'star',
        'star-2',
        'triangle',
        'triangle-2',
        'triangle-3',
        'triangle-4',
      ],
    },
    half: {
      control: 'select',
      options: ['half-1', 'half-2'],
    },
  },
} satisfies Meta<typeof Mask>

export default meta
type Story = StoryObj<typeof meta>

export const Circle: Story = {
  render: () => (
    <Mask
      shape="circle"
      src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
      alt="Circle mask"
    />
  ),
}

export const Squircle: Story = {
  render: () => (
    <Mask
      shape="squircle"
      src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
      alt="Squircle mask"
    />
  ),
}

export const Heart: Story = {
  render: () => (
    <Mask
      shape="heart"
      src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
      alt="Heart mask"
    />
  ),
}

export const AllShapes: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="squircle"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Squircle"
        />
        <span className="text-xs">squircle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="heart"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Heart"
        />
        <span className="text-xs">heart</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="hexagon"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Hexagon"
        />
        <span className="text-xs">hexagon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="hexagon-2"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Hexagon 2"
        />
        <span className="text-xs">hexagon-2</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="decagon"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Decagon"
        />
        <span className="text-xs">decagon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="pentagon"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Pentagon"
        />
        <span className="text-xs">pentagon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="diamond"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Diamond"
        />
        <span className="text-xs">diamond</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="square"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Square"
        />
        <span className="text-xs">square</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="circle"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Circle"
        />
        <span className="text-xs">circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="parallelogram"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Parallelogram"
        />
        <span className="text-xs">parallelogram</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="star"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Star"
        />
        <span className="text-xs">star</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="star-2"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Star 2"
        />
        <span className="text-xs">star-2</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="triangle"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Triangle"
        />
        <span className="text-xs">triangle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="triangle-2"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Triangle 2"
        />
        <span className="text-xs">triangle-2</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="triangle-3"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Triangle 3"
        />
        <span className="text-xs">triangle-3</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="triangle-4"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Triangle 4"
        />
        <span className="text-xs">triangle-4</span>
      </div>
    </div>
  ),
}

export const HalfMasks: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="star-2"
          half="half-1"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Half 1"
        />
        <span className="text-xs">mask-half-1</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Mask
          shape="star-2"
          half="half-2"
          className="w-24"
          src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          alt="Half 2"
        />
        <span className="text-xs">mask-half-2</span>
      </div>
    </div>
  ),
}

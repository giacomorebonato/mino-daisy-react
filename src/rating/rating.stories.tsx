import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Rating, RatingItem } from './rating'

const meta = {
  title: 'Interactive & Feedback/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    half: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Rating>
      <RatingItem mask="mask-star" />
      <RatingItem mask="mask-star" />
      <RatingItem mask="mask-star" defaultChecked />
      <RatingItem mask="mask-star" />
      <RatingItem mask="mask-star" />
    </Rating>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Rating size="xs">
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
      </Rating>
      <Rating size="sm">
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
      </Rating>
      <Rating size="md">
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
      </Rating>
      <Rating size="lg">
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
      </Rating>
      <Rating size="xl">
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
      </Rating>
    </div>
  ),
}

export const Half: Story = {
  render: () => (
    <Rating half size="lg">
      <RatingItem mask="mask-star-2 mask-half-1" />
      <RatingItem mask="mask-star-2 mask-half-2" />
      <RatingItem mask="mask-star-2 mask-half-1" />
      <RatingItem mask="mask-star-2 mask-half-2" />
      <RatingItem mask="mask-star-2 mask-half-1" />
      <RatingItem mask="mask-star-2 mask-half-2" defaultChecked />
      <RatingItem mask="mask-star-2 mask-half-1" />
      <RatingItem mask="mask-star-2 mask-half-2" />
      <RatingItem mask="mask-star-2 mask-half-1" />
      <RatingItem mask="mask-star-2 mask-half-2" />
    </Rating>
  ),
}

export const WithHiddenDefault: Story = {
  render: () => (
    <Rating>
      <RatingItem hidden />
      <RatingItem mask="mask-star" />
      <RatingItem mask="mask-star" />
      <RatingItem mask="mask-star" defaultChecked />
      <RatingItem mask="mask-star" />
      <RatingItem mask="mask-star" />
    </Rating>
  ),
}

export const DifferentShapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Rating size="lg">
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
      </Rating>
      <Rating size="lg">
        <RatingItem mask="mask-heart" />
        <RatingItem mask="mask-heart" />
        <RatingItem mask="mask-heart" defaultChecked />
        <RatingItem mask="mask-heart" />
        <RatingItem mask="mask-heart" />
      </Rating>
      <Rating size="lg">
        <RatingItem className="bg-orange-400" mask="mask-star-2" />
        <RatingItem className="bg-orange-400" mask="mask-star-2" />
        <RatingItem className="bg-orange-400" mask="mask-star-2" defaultChecked />
        <RatingItem className="bg-orange-400" mask="mask-star-2" />
        <RatingItem className="bg-orange-400" mask="mask-star-2" />
      </Rating>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [rating, setRating] = useState(3)

    return (
      <div className="space-y-4">
        <Rating size="lg">
          {[1, 2, 3, 4, 5].map((value) => (
            <RatingItem
              key={value}
              mask="mask-star"
              checked={rating === value}
              onChange={() => setRating(value)}
            />
          ))}
        </Rating>
        <p className="text-lg">Current rating: {rating}</p>
      </div>
    )
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-lg font-semibold">Rate this product:</span>
      <Rating>
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" />
        <RatingItem mask="mask-star" defaultChecked />
        <RatingItem mask="mask-star" />
      </Rating>
      <span className="text-sm text-base-content/60">(4.0)</span>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span>Quality</span>
        <Rating>
          <RatingItem name="quality" mask="mask-star" />
          <RatingItem name="quality" mask="mask-star" />
          <RatingItem name="quality" mask="mask-star" />
          <RatingItem name="quality" mask="mask-star" defaultChecked />
          <RatingItem name="quality" mask="mask-star" />
        </Rating>
      </div>
      <div className="flex items-center justify-between">
        <span>Price</span>
        <Rating>
          <RatingItem name="price" mask="mask-star" />
          <RatingItem name="price" mask="mask-star" />
          <RatingItem name="price" mask="mask-star" defaultChecked />
          <RatingItem name="price" mask="mask-star" />
          <RatingItem name="price" mask="mask-star" />
        </Rating>
      </div>
      <div className="flex items-center justify-between">
        <span>Service</span>
        <Rating>
          <RatingItem name="service" mask="mask-star" />
          <RatingItem name="service" mask="mask-star" />
          <RatingItem name="service" mask="mask-star" />
          <RatingItem name="service" mask="mask-star" />
          <RatingItem name="service" mask="mask-star" defaultChecked />
        </Rating>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Rating>
      <RatingItem mask="mask-star" disabled />
      <RatingItem mask="mask-star" disabled />
      <RatingItem mask="mask-star" disabled defaultChecked />
      <RatingItem mask="mask-star" disabled />
      <RatingItem mask="mask-star" disabled />
    </Rating>
  ),
}

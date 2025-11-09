import type { Meta, StoryObj } from '@storybook/react'
import { HoverGallery } from './hover-gallery'

const meta = {
  title: 'Visual & Media/HoverGallery',
  component: HoverGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asFigure: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof HoverGallery>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverGallery className="max-w-60">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        alt="Product view 1"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        alt="Product view 2"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        alt="Product view 3"
      />
    </HoverGallery>
  ),
}

export const TwoImages: Story = {
  render: () => (
    <HoverGallery className="max-w-60">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Product view 1"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
        alt="Product view 2"
      />
    </HoverGallery>
  ),
}

export const FourImages: Story = {
  render: () => (
    <HoverGallery className="max-w-60">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        alt="Product view 1"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        alt="Product view 2"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        alt="Product view 3"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
        alt="Product view 4"
      />
    </HoverGallery>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div className="card bg-base-100 w-96 shadow-xl">
      <HoverGallery className="w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes - Front view"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Shoes - Side view"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Shoes - Back view"
        />
      </HoverGallery>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>Hover over the image to see different views</p>
        <div className="card-actions justify-end">
          <button type="button" className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  ),
}

export const AsDiv: Story = {
  render: () => (
    <HoverGallery asFigure={false} className="max-w-60">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        alt="Gallery item 1"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        alt="Gallery item 2"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        alt="Gallery item 3"
      />
    </HoverGallery>
  ),
}

export const MultipleGalleries: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <HoverGallery className="max-w-60">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Product 1 - View 1"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Product 1 - View 2"
        />
      </HoverGallery>
      <HoverGallery className="max-w-60">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Product 2 - View 1"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Product 2 - View 2"
        />
      </HoverGallery>
      <HoverGallery className="max-w-60">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Product 3 - View 1"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Product 3 - View 2"
        />
      </HoverGallery>
    </div>
  ),
}

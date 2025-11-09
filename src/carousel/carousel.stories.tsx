import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselItem } from './carousel'

const meta = {
  title: 'Visual & Media/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      control: 'boolean',
    },
    center: {
      control: 'boolean',
    },
    end: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Carousel className="w-full">
      <CarouselItem className="w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          alt="Slide 1"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          alt="Slide 2"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          alt="Slide 3"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          alt="Slide 4"
          className="w-full"
        />
      </CarouselItem>
    </Carousel>
  ),
}

export const Center: Story = {
  render: () => (
    <Carousel center className="rounded-box max-w-md space-x-4 bg-neutral p-4">
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Slide 1"
          className="rounded-box"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Slide 2"
          className="rounded-box"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Slide 3"
          className="rounded-box"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Slide 4"
          className="rounded-box"
        />
      </CarouselItem>
    </Carousel>
  ),
}

export const End: Story = {
  render: () => (
    <Carousel end className="rounded-box max-w-md space-x-4 bg-neutral p-4">
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Slide 1"
          className="rounded-box"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Slide 2"
          className="rounded-box"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Slide 3"
          className="rounded-box"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Slide 4"
          className="rounded-box"
        />
      </CarouselItem>
    </Carousel>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Carousel vertical className="rounded-box h-96">
      <CarouselItem className="h-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Slide 1"
        />
      </CarouselItem>
      <CarouselItem className="h-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Slide 2"
        />
      </CarouselItem>
      <CarouselItem className="h-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Slide 3"
        />
      </CarouselItem>
      <CarouselItem className="h-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Slide 4"
        />
      </CarouselItem>
    </Carousel>
  ),
}

export const HalfWidth: Story = {
  render: () => (
    <Carousel className="w-64">
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Slide 1"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Slide 2"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Slide 3"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Slide 4"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          alt="Slide 5"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Slide 6"
          className="w-full"
        />
      </CarouselItem>
      <CarouselItem className="w-1/2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Slide 7"
          className="w-full"
        />
      </CarouselItem>
    </Carousel>
  ),
}

export const WithIndicators: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center gap-2">
      <Carousel className="w-full">
        <CarouselItem id="slide1" className="relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            alt="Slide 1"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </CarouselItem>
        <CarouselItem id="slide2" className="relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            alt="Slide 2"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </CarouselItem>
        <CarouselItem id="slide3" className="relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            alt="Slide 3"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </CarouselItem>
        <CarouselItem id="slide4" className="relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            alt="Slide 4"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </CarouselItem>
      </Carousel>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  ),
}

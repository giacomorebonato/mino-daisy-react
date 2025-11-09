import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardBody } from '../card'
import { Stack } from './stack'

const meta = {
  title: 'Visual & Media/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    top: {
      control: 'boolean',
    },
    bottom: {
      control: 'boolean',
    },
    start: {
      control: 'boolean',
    },
    end: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Stack className="h-20 w-32">
      <div className="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
      <div className="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
      <div className="bg-secondary text-secondary-content grid place-content-center rounded-box">
        3
      </div>
    </Stack>
  ),
}

export const Cards: Story = {
  render: () => (
    <Stack className="size-28">
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>A</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>B</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>C</CardBody>
      </Card>
    </Stack>
  ),
}

export const CardsWithShadow: Story = {
  render: () => (
    <Stack>
      <Card className="bg-base-200 text-center shadow-md">
        <CardBody>A</CardBody>
      </Card>
      <Card className="bg-base-200 text-center shadow">
        <CardBody>B</CardBody>
      </Card>
      <Card className="bg-base-200 text-center shadow-sm">
        <CardBody>C</CardBody>
      </Card>
    </Stack>
  ),
}

export const Images: Story = {
  render: () => (
    <Stack className="w-48">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        alt="Stacked item 1"
        className="rounded-box"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        alt="Stacked item 2"
        className="rounded-box"
      />
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        alt="Stacked item 3"
        className="rounded-box"
      />
    </Stack>
  ),
}

export const AlignedTop: Story = {
  render: () => (
    <Stack top className="size-28">
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>A</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>B</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>C</CardBody>
      </Card>
    </Stack>
  ),
}

export const AlignedBottom: Story = {
  render: () => (
    <Stack bottom className="size-28">
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>A</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>B</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>C</CardBody>
      </Card>
    </Stack>
  ),
}

export const AlignedStart: Story = {
  render: () => (
    <Stack start className="size-28">
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>A</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>B</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>C</CardBody>
      </Card>
    </Stack>
  ),
}

export const AlignedEnd: Story = {
  render: () => (
    <Stack end className="size-28">
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>A</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>B</CardBody>
      </Card>
      <Card className="border-base-content bg-base-100 border text-center">
        <CardBody>C</CardBody>
      </Card>
    </Stack>
  ),
}

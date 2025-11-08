import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../badge'
import { Button } from '../button'
import { Card, CardActions, CardBody, CardTitle } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    compact: {
      control: 'boolean',
    },
    side: {
      control: 'boolean',
    },
    bordered: {
      control: 'boolean',
    },
    imageFull: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="bg-base-100 w-96 shadow-sm">
      <CardBody>
        <CardTitle>Card title!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button>Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className="bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button variant="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <CardBody>
        <CardTitle>
          Card Title
          <Badge variant="secondary">NEW</Badge>
        </CardTitle>
        <p>
          A card component has a figure, a body part, and inside body there are title and actions
          parts
        </p>
        <CardActions className="justify-end">
          <Badge outline>Fashion</Badge>
          <Badge outline>Products</Badge>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const Compact: Story = {
  render: () => (
    <Card compact className="bg-base-100 w-96 shadow-sm">
      <CardBody>
        <CardTitle>Card title!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button>Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const Side: Story = {
  render: () => (
    <Card side className="bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
          className="w-48"
        />
      </figure>
      <CardBody>
        <CardTitle>New movie is released!</CardTitle>
        <p>Click the button to watch on Jetflix app.</p>
        <CardActions className="justify-end">
          <Button variant="primary">Watch</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const Bordered: Story = {
  render: () => (
    <Card bordered className="bg-base-100 w-96">
      <CardBody>
        <CardTitle>Card title!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button>Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const ImageOverlay: Story = {
  render: () => (
    <Card imageFull className="bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button variant="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Card className="bg-base-100 w-96 shadow-sm">
      <CardBody>
        <CardTitle>Card with multiple actions</CardTitle>
        <p>Reiciendis voluptatibus maiores alias consequatur aut.</p>
        <CardActions className="justify-end">
          <Button variant="ghost">Decline</Button>
          <Button variant="primary">Accept</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

export const CenteredContent: Story = {
  render: () => (
    <Card className="bg-base-100 w-96 shadow-sm">
      <CardBody className="items-center text-center">
        <CardTitle>Card with centered content</CardTitle>
        <p>Reiciendis voluptatibus maiores alias consequatur aut.</p>
        <CardActions>
          <Button variant="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
}

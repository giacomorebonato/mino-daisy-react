import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../avatar'
import { Badge } from '../badge'
import { Button } from '../button'
import { Indicator, IndicatorItem } from './indicator'

const meta = {
  title: 'Visual & Media/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Indicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Indicator>
      <IndicatorItem className="badge badge-secondary">new</IndicatorItem>
      <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
    </Indicator>
  ),
}

export const Empty: Story = {
  render: () => (
    <Indicator>
      <IndicatorItem className="badge badge-primary" />
      <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
    </Indicator>
  ),
}

export const OnButton: Story = {
  render: () => (
    <Indicator>
      <IndicatorItem className="badge badge-secondary">99+</IndicatorItem>
      <Button>inbox</Button>
    </Indicator>
  ),
}

export const OnAvatar: Story = {
  render: () => (
    <Indicator>
      <IndicatorItem>
        <Badge variant="secondary">Justice</Badge>
      </IndicatorItem>
      <Avatar>
        <div className="h-20 w-20 rounded-lg">
          <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Avatar" />
        </div>
      </Avatar>
    </Indicator>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <Indicator>
        <IndicatorItem horizontal="start" vertical="top" className="badge badge-secondary">
          top start
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="center" vertical="top" className="badge badge-secondary">
          top center
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="end" vertical="top" className="badge badge-secondary">
          top end
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="start" vertical="middle" className="badge badge-secondary">
          middle start
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="center" vertical="middle" className="badge badge-secondary">
          middle center
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="end" vertical="middle" className="badge badge-secondary">
          middle end
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="start" vertical="bottom" className="badge badge-secondary">
          bottom start
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="center" vertical="bottom" className="badge badge-secondary">
          bottom center
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>

      <Indicator>
        <IndicatorItem horizontal="end" vertical="bottom" className="badge badge-secondary">
          bottom end
        </IndicatorItem>
        <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
      </Indicator>
    </div>
  ),
}

export const MultipleIndicators: Story = {
  render: () => (
    <Indicator>
      <IndicatorItem horizontal="start" vertical="top" className="badge badge-primary">
        top+start
      </IndicatorItem>
      <IndicatorItem horizontal="end" vertical="bottom" className="badge badge-secondary">
        bottom+end
      </IndicatorItem>
      <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
    </Indicator>
  ),
}

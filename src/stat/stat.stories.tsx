import type { Meta, StoryObj } from '@storybook/react'
import { Stat, StatDesc, StatFigure, Stats, StatTitle, StatValue } from './stat'

const meta = {
  title: 'Components/Stat',
  component: Stats,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stats>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Stats className="shadow">
      <Stat>
        <StatTitle>Total Page Views</StatTitle>
        <StatValue>89,400</StatValue>
        <StatDesc>21% more than last month</StatDesc>
      </Stat>
    </Stats>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Stats className="shadow">
      <Stat>
        <StatTitle>Downloads</StatTitle>
        <StatValue>31K</StatValue>
        <StatDesc>Jan 1st - Feb 1st</StatDesc>
      </Stat>
      <Stat>
        <StatTitle>New Users</StatTitle>
        <StatValue>4,200</StatValue>
        <StatDesc>↗︎ 400 (22%)</StatDesc>
      </Stat>
      <Stat>
        <StatTitle>New Registers</StatTitle>
        <StatValue>1,200</StatValue>
        <StatDesc>↘︎ 90 (14%)</StatDesc>
      </Stat>
    </Stats>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stats vertical className="shadow">
      <Stat>
        <StatTitle>Downloads</StatTitle>
        <StatValue>31K</StatValue>
        <StatDesc>Jan 1st - Feb 1st</StatDesc>
      </Stat>
      <Stat>
        <StatTitle>New Users</StatTitle>
        <StatValue>4,200</StatValue>
        <StatDesc>↗︎ 400 (22%)</StatDesc>
      </Stat>
      <Stat>
        <StatTitle>New Registers</StatTitle>
        <StatValue>1,200</StatValue>
        <StatDesc>↘︎ 90 (14%)</StatDesc>
      </Stat>
    </Stats>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Stats className="shadow">
      <Stat>
        <StatFigure className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <title>Info</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </StatFigure>
        <StatTitle>Downloads</StatTitle>
        <StatValue>31K</StatValue>
        <StatDesc>Jan 1st - Feb 1st</StatDesc>
      </Stat>
      <Stat>
        <StatFigure className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <title>Users</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </StatFigure>
        <StatTitle>New Users</StatTitle>
        <StatValue>4,200</StatValue>
        <StatDesc>↗︎ 400 (22%)</StatDesc>
      </Stat>
    </Stats>
  ),
}

export const WithColors: Story = {
  render: () => (
    <Stats className="bg-primary text-primary-content">
      <Stat>
        <StatTitle>Account balance</StatTitle>
        <StatValue>$89,400</StatValue>
        <StatDesc>21% more than last month</StatDesc>
      </Stat>
    </Stats>
  ),
}

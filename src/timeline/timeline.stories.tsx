import type { Meta, StoryObj } from '@storybook/react'
import {
  Timeline,
  TimelineBox,
  TimelineEnd,
  TimelineItem,
  TimelineMiddle,
  TimelineStart,
} from './timeline'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineStart>1984</TimelineStart>
        <TimelineMiddle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <title>Check</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </TimelineMiddle>
        <TimelineEnd>
          <TimelineBox>First Macintosh computer</TimelineBox>
        </TimelineEnd>
        <hr />
      </TimelineItem>
      <TimelineItem>
        <hr />
        <TimelineStart>1998</TimelineStart>
        <TimelineMiddle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <title>Check</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </TimelineMiddle>
        <TimelineEnd>
          <TimelineBox>iMac</TimelineBox>
        </TimelineEnd>
        <hr />
      </TimelineItem>
      <TimelineItem>
        <hr />
        <TimelineStart>2001</TimelineStart>
        <TimelineMiddle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <title>Check</title>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </TimelineMiddle>
        <TimelineEnd>
          <TimelineBox>iPod</TimelineBox>
        </TimelineEnd>
      </TimelineItem>
    </Timeline>
  ),
}

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Timeline,
  TimelineBox,
  TimelineEnd,
  TimelineItem,
  TimelineMiddle,
  TimelineStart,
} from './timeline'

describe('Timeline', () => {
  it('renders children correctly', () => {
    render(<Timeline>Timeline content</Timeline>)
    expect(screen.getByText('Timeline content')).toBeInTheDocument()
  })

  it('applies timeline class', () => {
    const { container } = render(<Timeline>Content</Timeline>)
    expect(container.querySelector('ul')).toHaveClass('timeline')
  })
})

describe('TimelineItem', () => {
  it('renders children correctly', () => {
    render(<TimelineItem>Item content</TimelineItem>)
    expect(screen.getByText('Item content')).toBeInTheDocument()
  })
})

describe('TimelineStart', () => {
  it('renders children correctly', () => {
    render(<TimelineStart>Start</TimelineStart>)
    expect(screen.getByText('Start')).toBeInTheDocument()
  })

  it('applies timeline-start class', () => {
    const { container } = render(<TimelineStart>Start</TimelineStart>)
    expect(container.querySelector('div')).toHaveClass('timeline-start')
  })
})

describe('TimelineMiddle', () => {
  it('renders children correctly', () => {
    render(<TimelineMiddle>Middle</TimelineMiddle>)
    expect(screen.getByText('Middle')).toBeInTheDocument()
  })

  it('applies timeline-middle class', () => {
    const { container } = render(<TimelineMiddle>Middle</TimelineMiddle>)
    expect(container.querySelector('div')).toHaveClass('timeline-middle')
  })
})

describe('TimelineEnd', () => {
  it('renders children correctly', () => {
    render(<TimelineEnd>End</TimelineEnd>)
    expect(screen.getByText('End')).toBeInTheDocument()
  })

  it('applies timeline-end class', () => {
    const { container } = render(<TimelineEnd>End</TimelineEnd>)
    expect(container.querySelector('div')).toHaveClass('timeline-end')
  })
})

describe('TimelineBox', () => {
  it('renders children correctly', () => {
    render(<TimelineBox>Box</TimelineBox>)
    expect(screen.getByText('Box')).toBeInTheDocument()
  })

  it('applies timeline-box class', () => {
    const { container } = render(<TimelineBox>Box</TimelineBox>)
    expect(container.querySelector('div')).toHaveClass('timeline-box')
  })
})

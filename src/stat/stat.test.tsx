import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stat, StatDesc, StatFigure, Stats, StatTitle, StatValue } from './stat'

describe('Stats', () => {
  it('renders children correctly', () => {
    render(<Stats>Stats content</Stats>)
    expect(screen.getByText('Stats content')).toBeInTheDocument()
  })

  it('applies stats class', () => {
    const { container } = render(<Stats>Content</Stats>)
    expect(container.querySelector('div')).toHaveClass('stats')
  })

  it('applies vertical class when vertical prop is true', () => {
    const { container } = render(<Stats vertical>Content</Stats>)
    expect(container.querySelector('div')).toHaveClass('stats-vertical')
  })

  it('applies horizontal class when horizontal prop is true', () => {
    const { container } = render(<Stats horizontal>Content</Stats>)
    expect(container.querySelector('div')).toHaveClass('stats-horizontal')
  })
})

describe('Stat', () => {
  it('renders children correctly', () => {
    render(<Stat>Stat content</Stat>)
    expect(screen.getByText('Stat content')).toBeInTheDocument()
  })

  it('applies stat class', () => {
    const { container } = render(<Stat>Content</Stat>)
    expect(container.querySelector('div')).toHaveClass('stat')
  })
})

describe('StatTitle', () => {
  it('renders children correctly', () => {
    render(<StatTitle>Title</StatTitle>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('applies stat-title class', () => {
    const { container } = render(<StatTitle>Title</StatTitle>)
    expect(container.querySelector('div')).toHaveClass('stat-title')
  })
})

describe('StatValue', () => {
  it('renders children correctly', () => {
    render(<StatValue>Value</StatValue>)
    expect(screen.getByText('Value')).toBeInTheDocument()
  })

  it('applies stat-value class', () => {
    const { container } = render(<StatValue>Value</StatValue>)
    expect(container.querySelector('div')).toHaveClass('stat-value')
  })
})

describe('StatDesc', () => {
  it('renders children correctly', () => {
    render(<StatDesc>Description</StatDesc>)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('applies stat-desc class', () => {
    const { container} = render(<StatDesc>Description</StatDesc>)
    expect(container.querySelector('div')).toHaveClass('stat-desc')
  })
})

describe('StatFigure', () => {
  it('renders children correctly', () => {
    render(<StatFigure>Figure</StatFigure>)
    expect(screen.getByText('Figure')).toBeInTheDocument()
  })

  it('applies stat-figure class', () => {
    const { container } = render(<StatFigure>Figure</StatFigure>)
    expect(container.querySelector('div')).toHaveClass('stat-figure')
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Card, CardActions, CardBody, CardTitle } from './card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies card class', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('card')
  })

  it('applies compact class when compact prop is true', () => {
    const { container } = render(<Card compact>Content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('card-compact')
  })

  it('applies side class when side prop is true', () => {
    const { container } = render(<Card side>Content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('card-side')
  })

  it('applies bordered class when bordered prop is true', () => {
    const { container } = render(<Card bordered>Content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('card-bordered')
  })

  it('applies image-full class when imageFull prop is true', () => {
    const { container } = render(<Card imageFull>Content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('image-full')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Card className="custom-class">Content</Card>)
    const card = container.querySelector('div')
    expect(card).toHaveClass('card')
    expect(card).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(<Card data-testid="card-element">Content</Card>)
    expect(container.querySelector('div')).toHaveAttribute('data-testid', 'card-element')
  })
})

describe('CardBody', () => {
  it('renders children correctly', () => {
    render(<CardBody>Body content</CardBody>)
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })

  it('applies card-body class', () => {
    const { container } = render(<CardBody>Content</CardBody>)
    const body = container.querySelector('div')
    expect(body).toHaveClass('card-body')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<CardBody className="custom">Content</CardBody>)
    const body = container.querySelector('div')
    expect(body).toHaveClass('card-body')
    expect(body).toHaveClass('custom')
  })
})

describe('CardTitle', () => {
  it('renders children correctly', () => {
    render(<CardTitle>Title text</CardTitle>)
    expect(screen.getByText('Title text')).toBeInTheDocument()
  })

  it('applies card-title class', () => {
    const { container } = render(<CardTitle>Title</CardTitle>)
    const title = container.querySelector('h2')
    expect(title).toHaveClass('card-title')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<CardTitle className="custom">Title</CardTitle>)
    const title = container.querySelector('h2')
    expect(title).toHaveClass('card-title')
    expect(title).toHaveClass('custom')
  })

  it('renders as h2 element', () => {
    const { container } = render(<CardTitle>Title</CardTitle>)
    expect(container.querySelector('h2')).toBeInTheDocument()
  })
})

describe('CardActions', () => {
  it('renders children correctly', () => {
    render(<CardActions>Actions content</CardActions>)
    expect(screen.getByText('Actions content')).toBeInTheDocument()
  })

  it('applies card-actions class', () => {
    const { container } = render(<CardActions>Content</CardActions>)
    const actions = container.querySelector('div')
    expect(actions).toHaveClass('card-actions')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<CardActions className="custom">Content</CardActions>)
    const actions = container.querySelector('div')
    expect(actions).toHaveClass('card-actions')
    expect(actions).toHaveClass('custom')
  })
})

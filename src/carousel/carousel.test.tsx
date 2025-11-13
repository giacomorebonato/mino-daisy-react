import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Carousel, CarouselItem } from './carousel'

describe('Carousel', () => {
  it('renders children correctly', () => {
    render(
      <Carousel>
        <div>Carousel Content</div>
      </Carousel>,
    )
    expect(screen.getByText('Carousel Content')).toBeInTheDocument()
  })

  it('applies base carousel class', () => {
    const { container } = render(<Carousel>Content</Carousel>)
    expect(container.firstChild).toHaveClass('carousel')
  })

  it('applies carousel-vertical class when vertical prop is true', () => {
    const { container } = render(<Carousel vertical>Content</Carousel>)
    expect(container.firstChild).toHaveClass('carousel', 'carousel-vertical')
  })

  it('applies carousel-center class when center prop is true', () => {
    const { container } = render(<Carousel center>Content</Carousel>)
    expect(container.firstChild).toHaveClass('carousel', 'carousel-center')
  })

  it('applies carousel-end class when end prop is true', () => {
    const { container } = render(<Carousel end>Content</Carousel>)
    expect(container.firstChild).toHaveClass('carousel', 'carousel-end')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Carousel className="custom-class">Content</Carousel>)
    expect(container.firstChild).toHaveClass('carousel', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Carousel data-testid="carousel">Content</Carousel>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'carousel')
  })
})

describe('CarouselItem', () => {
  it('renders children correctly', () => {
    render(
      <CarouselItem>
        <div>Item Content</div>
      </CarouselItem>,
    )
    expect(screen.getByText('Item Content')).toBeInTheDocument()
  })

  it('applies base carousel-item class', () => {
    const { container } = render(<CarouselItem>Content</CarouselItem>)
    expect(container.firstChild).toHaveClass('carousel-item')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<CarouselItem className="custom-class">Content</CarouselItem>)
    expect(container.firstChild).toHaveClass('carousel-item', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<CarouselItem data-testid="item">Content</CarouselItem>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'item')
  })
})

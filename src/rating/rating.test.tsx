import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Rating, RatingItem } from './rating'

describe('Rating', () => {
  it('renders children correctly', () => {
    render(
      <Rating>
        <RatingItem data-testid="rating-1" />
        <RatingItem data-testid="rating-2" />
      </Rating>,
    )
    expect(screen.getByTestId('rating-1')).toBeInTheDocument()
    expect(screen.getByTestId('rating-2')).toBeInTheDocument()
  })

  it('applies size classes', () => {
    render(
      <Rating size="lg">
        <RatingItem data-testid="rating-item" />
      </Rating>,
    )
    const rating = screen.getByTestId('rating-item').parentElement
    expect(rating).toHaveClass('rating-lg')
  })

  it('applies half class when half prop is true', () => {
    render(
      <Rating half>
        <RatingItem data-testid="rating-item" />
      </Rating>,
    )
    const rating = screen.getByTestId('rating-item').parentElement
    expect(rating).toHaveClass('rating-half')
  })

  it('merges custom className', () => {
    render(
      <Rating className="custom">
        <RatingItem data-testid="rating-item" />
      </Rating>,
    )
    const rating = screen.getByTestId('rating-item').parentElement
    expect(rating).toHaveClass('rating')
    expect(rating).toHaveClass('custom')
  })
})

describe('RatingItem', () => {
  it('renders as radio input', () => {
    render(<RatingItem data-testid="rating-item" />)
    const item = screen.getByTestId('rating-item')
    expect(item).toBeInTheDocument()
    expect(item).toHaveAttribute('type', 'radio')
  })

  it('applies default name attribute', () => {
    render(<RatingItem data-testid="rating-item" />)
    expect(screen.getByTestId('rating-item')).toHaveAttribute('name', 'rating')
  })

  it('applies custom name attribute', () => {
    render(<RatingItem name="custom-rating" data-testid="rating-item" />)
    expect(screen.getByTestId('rating-item')).toHaveAttribute('name', 'custom-rating')
  })

  it('applies mask classes', () => {
    render(<RatingItem mask="mask-star" data-testid="rating-item" />)
    const item = screen.getByTestId('rating-item')
    expect(item).toHaveClass('mask')
    expect(item).toHaveClass('mask-star')
  })

  it('applies hidden class when hidden prop is true', () => {
    render(<RatingItem hidden data-testid="rating-item" />)
    expect(screen.getByTestId('rating-item')).toHaveClass('rating-hidden')
  })

  it('merges custom className', () => {
    render(<RatingItem className="custom" data-testid="rating-item" />)
    const item = screen.getByTestId('rating-item')
    expect(item).toHaveClass('custom')
  })

  it('applies checked state', () => {
    render(<RatingItem defaultChecked data-testid="rating-item" />)
    expect(screen.getByTestId('rating-item')).toBeChecked()
  })
})

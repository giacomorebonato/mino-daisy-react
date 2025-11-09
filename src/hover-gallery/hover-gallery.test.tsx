import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HoverGallery } from './hover-gallery'

describe('HoverGallery', () => {
  it('renders children correctly', () => {
    render(
      <HoverGallery>
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    const img = screen.getByAltText('Test')
    expect(img).toBeInTheDocument()
  })

  it('applies base hover-gallery class', () => {
    const { container } = render(
      <HoverGallery>
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    expect(container.firstChild).toHaveClass('hover-gallery')
  })

  it('renders as figure element by default', () => {
    const { container } = render(
      <HoverGallery>
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    expect(container.firstChild?.nodeName).toBe('FIGURE')
  })

  it('renders as div when asFigure is false', () => {
    const { container } = render(
      <HoverGallery asFigure={false}>
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <HoverGallery className="custom-class">
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    expect(container.firstChild).toHaveClass('hover-gallery', 'custom-class')
  })

  it('passes additional props to figure element', () => {
    const { container } = render(
      <HoverGallery data-testid="gallery">
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'gallery')
  })

  it('passes additional props to div element when asFigure is false', () => {
    const { container } = render(
      <HoverGallery asFigure={false} data-testid="gallery">
        <img src="test.jpg" alt="Test" />
      </HoverGallery>,
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'gallery')
  })
})

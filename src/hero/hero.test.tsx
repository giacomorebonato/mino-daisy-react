import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero, HeroContent, HeroOverlay } from './hero'

describe('Hero', () => {
  it('renders children correctly', () => {
    render(
      <Hero>
        <div>Test content</div>
      </Hero>,
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies hero class', () => {
    const { container } = render(<Hero>Content</Hero>)
    expect(container.firstChild).toHaveClass('hero')
  })

  it('renders as div element', () => {
    const { container } = render(<Hero>Content</Hero>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Hero className="min-h-screen">Content</Hero>)
    expect(container.firstChild).toHaveClass('hero', 'min-h-screen')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Hero data-testid="hero">Content</Hero>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'hero')
  })
})

describe('HeroContent', () => {
  it('renders children correctly', () => {
    render(<HeroContent>Content text</HeroContent>)
    expect(screen.getByText('Content text')).toBeInTheDocument()
  })

  it('applies hero-content class', () => {
    const { container } = render(<HeroContent>Content</HeroContent>)
    expect(container.firstChild).toHaveClass('hero-content')
  })

  it('renders as div element', () => {
    const { container } = render(<HeroContent>Content</HeroContent>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<HeroContent className="text-center">Content</HeroContent>)
    expect(container.firstChild).toHaveClass('hero-content', 'text-center')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<HeroContent data-testid="hero-content">Content</HeroContent>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'hero-content')
  })
})

describe('HeroOverlay', () => {
  it('applies hero-overlay class', () => {
    const { container } = render(<HeroOverlay />)
    expect(container.firstChild).toHaveClass('hero-overlay')
  })

  it('renders as div element', () => {
    const { container } = render(<HeroOverlay />)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<HeroOverlay className="bg-opacity-60" />)
    expect(container.firstChild).toHaveClass('hero-overlay', 'bg-opacity-60')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<HeroOverlay data-testid="overlay" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'overlay')
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer, FooterTitle } from './footer'

describe('Footer', () => {
  it('renders children correctly', () => {
    render(<Footer>Footer content</Footer>)
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('applies footer class', () => {
    const { container } = render(<Footer>Content</Footer>)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('footer')
  })

  it('applies footer-horizontal class when horizontal prop is true', () => {
    const { container } = render(<Footer horizontal>Content</Footer>)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('footer-horizontal')
  })

  it('applies footer-center class when center prop is true', () => {
    const { container } = render(<Footer center>Content</Footer>)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('footer-center')
  })

  it('applies both horizontal and center classes', () => {
    const { container } = render(
      <Footer horizontal center>
        Content
      </Footer>,
    )
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('footer-horizontal')
    expect(footer).toHaveClass('footer-center')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Footer className="custom-class">Content</Footer>,
    )
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('footer')
    expect(footer).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Footer data-testid="footer-element">Content</Footer>,
    )
    expect(container.querySelector('footer')).toHaveAttribute(
      'data-testid',
      'footer-element',
    )
  })

  it('renders as footer element', () => {
    const { container } = render(<Footer>Content</Footer>)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})

describe('FooterTitle', () => {
  it('renders children correctly', () => {
    render(<FooterTitle>Title text</FooterTitle>)
    expect(screen.getByText('Title text')).toBeInTheDocument()
  })

  it('applies footer-title class', () => {
    const { container } = render(<FooterTitle>Title</FooterTitle>)
    const title = container.querySelector('h6')
    expect(title).toHaveClass('footer-title')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <FooterTitle className="custom">Title</FooterTitle>,
    )
    const title = container.querySelector('h6')
    expect(title).toHaveClass('footer-title')
    expect(title).toHaveClass('custom')
  })

  it('renders as h6 element', () => {
    const { container } = render(<FooterTitle>Title</FooterTitle>)
    expect(container.querySelector('h6')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from './pagination'

describe('Pagination', () => {
  it('renders children correctly', () => {
    render(
      <Pagination>
        <button type="button" className="join-item btn">
          1
        </button>
        <button type="button" className="join-item btn">
          2
        </button>
        <button type="button" className="join-item btn">
          3
        </button>
      </Pagination>,
    )
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('applies join class', () => {
    const { container } = render(
      <Pagination>
        <button type="button" className="join-item btn">
          1
        </button>
      </Pagination>,
    )
    const pagination = container.querySelector('div')
    expect(pagination).toHaveClass('join')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Pagination className="custom-class">
        <button type="button" className="join-item btn">
          1
        </button>
      </Pagination>,
    )
    const pagination = container.querySelector('div')
    expect(pagination).toHaveClass('join')
    expect(pagination).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Pagination data-testid="pagination-element">
        <button type="button" className="join-item btn">
          1
        </button>
      </Pagination>,
    )
    expect(container.querySelector('div')).toHaveAttribute('data-testid', 'pagination-element')
  })

  it('renders as div element', () => {
    const { container } = render(
      <Pagination>
        <button type="button" className="join-item btn">
          1
        </button>
      </Pagination>,
    )
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders multiple pagination items', () => {
    const { container } = render(
      <Pagination>
        <button type="button" className="join-item btn">
          1
        </button>
        <button type="button" className="join-item btn">
          2
        </button>
        <button type="button" className="join-item btn">
          3
        </button>
      </Pagination>,
    )
    const buttons = container.querySelectorAll('button')
    expect(buttons).toHaveLength(3)
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from './breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders children correctly', () => {
    render(
      <Breadcrumbs>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#docs">Documents</a>
        </li>
        <li>Add Document</li>
      </Breadcrumbs>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Documents')).toBeInTheDocument()
    expect(screen.getByText('Add Document')).toBeInTheDocument()
  })

  it('applies breadcrumbs class', () => {
    const { container } = render(
      <Breadcrumbs>
        <li>Item</li>
      </Breadcrumbs>,
    )
    const breadcrumbs = container.querySelector('div')
    expect(breadcrumbs).toHaveClass('breadcrumbs')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(
      <Breadcrumbs className="custom-class">
        <li>Item</li>
      </Breadcrumbs>,
    )
    const breadcrumbs = container.querySelector('div')
    expect(breadcrumbs).toHaveClass('breadcrumbs')
    expect(breadcrumbs).toHaveClass('custom-class')
  })

  it('wraps children in ul element', () => {
    const { container } = render(
      <Breadcrumbs>
        <li>Item</li>
      </Breadcrumbs>,
    )
    expect(container.querySelector('ul')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    const { container } = render(
      <Breadcrumbs data-testid="breadcrumbs-element">
        <li>Item</li>
      </Breadcrumbs>,
    )
    expect(container.querySelector('div')).toHaveAttribute('data-testid', 'breadcrumbs-element')
  })

  it('renders multiple breadcrumb items', () => {
    const { container } = render(
      <Breadcrumbs>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </Breadcrumbs>,
    )
    const items = container.querySelectorAll('li')
    expect(items).toHaveLength(3)
  })
})

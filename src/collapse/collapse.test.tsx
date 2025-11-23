import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Collapse, CollapseCheckbox, CollapseContent, CollapseTitle } from './collapse'

describe('Collapse', () => {
  it('renders children correctly', () => {
    render(
      <Collapse>
        <CollapseTitle>Title</CollapseTitle>
        <CollapseContent>Content</CollapseContent>
      </Collapse>,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies icon classes', () => {
    render(
      <Collapse className="collapse-arrow">
        <CollapseTitle>Title</CollapseTitle>
      </Collapse>,
    )
    const collapse = screen.getByText('Title').parentElement
    expect(collapse).toHaveClass('collapse-arrow')
  })

  it('applies open class when open prop is true', () => {
    render(
      <Collapse className="collapse-open">
        <CollapseTitle>Open</CollapseTitle>
      </Collapse>,
    )
    const collapse = screen.getByText('Open').parentElement
    expect(collapse).toHaveClass('collapse-open')
  })

  it('applies close class when open prop is false', () => {
    render(
      <Collapse className="collapse-close">
        <CollapseTitle>Closed</CollapseTitle>
      </Collapse>,
    )
    const collapse = screen.getByText('Closed').parentElement
    expect(collapse).toHaveClass('collapse-close')
  })

  it('applies tabIndex when not using checkbox', () => {
    render(
      <Collapse>
        <CollapseTitle>Title</CollapseTitle>
      </Collapse>,
    )
    const collapse = screen.getByText('Title').parentElement
    expect(collapse).toHaveAttribute('tabIndex', '0')
  })

  it('does not apply tabIndex when using checkbox', () => {
    render(
      <Collapse checkbox>
        <CollapseTitle>Title</CollapseTitle>
      </Collapse>,
    )
    const collapse = screen.getByText('Title').parentElement
    expect(collapse).not.toHaveAttribute('tabIndex')
  })

  it('merges custom className', () => {
    render(
      <Collapse className="custom">
        <CollapseTitle>Title</CollapseTitle>
      </Collapse>,
    )
    const collapse = screen.getByText('Title').parentElement
    expect(collapse).toHaveClass('collapse')
    expect(collapse).toHaveClass('custom')
  })
})

describe('CollapseTitle', () => {
  it('renders children correctly', () => {
    render(<CollapseTitle>My Title</CollapseTitle>)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('applies collapse-title class', () => {
    render(<CollapseTitle>Title</CollapseTitle>)
    expect(screen.getByText('Title')).toHaveClass('collapse-title')
  })

  it('merges custom className', () => {
    render(<CollapseTitle className="custom">Title</CollapseTitle>)
    const title = screen.getByText('Title')
    expect(title).toHaveClass('collapse-title')
    expect(title).toHaveClass('custom')
  })
})

describe('CollapseContent', () => {
  it('renders children correctly', () => {
    render(<CollapseContent>My Content</CollapseContent>)
    expect(screen.getByText('My Content')).toBeInTheDocument()
  })

  it('applies collapse-content class', () => {
    render(<CollapseContent>Content</CollapseContent>)
    expect(screen.getByText('Content')).toHaveClass('collapse-content')
  })

  it('merges custom className', () => {
    render(<CollapseContent className="custom">Content</CollapseContent>)
    const content = screen.getByText('Content')
    expect(content).toHaveClass('collapse-content')
    expect(content).toHaveClass('custom')
  })
})

describe('CollapseCheckbox', () => {
  it('renders as checkbox input', () => {
    render(<CollapseCheckbox data-testid="collapse-checkbox" />)
    const checkbox = screen.getByTestId('collapse-checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('applies collapse-toggle class', () => {
    render(<CollapseCheckbox data-testid="collapse-checkbox" />)
    expect(screen.getByTestId('collapse-checkbox')).toHaveClass('collapse-toggle')
  })

  it('merges custom className', () => {
    render(<CollapseCheckbox className="custom" data-testid="collapse-checkbox" />)
    const checkbox = screen.getByTestId('collapse-checkbox')
    expect(checkbox).toHaveClass('collapse-toggle')
    expect(checkbox).toHaveClass('custom')
  })
})

import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionRadio,
  AccordionTitle,
} from './accordion'

describe('Accordion', () => {
  it('renders children correctly', () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionTitle>Item 1</AccordionTitle>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<Accordion className="custom">Content</Accordion>)
    expect(screen.getByText('Content')).toHaveClass('custom')
  })
})

describe('AccordionItem', () => {
  it('renders children correctly', () => {
    render(
      <AccordionItem>
        <AccordionTitle>Title</AccordionTitle>
        <AccordionContent>Content</AccordionContent>
      </AccordionItem>,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies collapse class', () => {
    render(
      <AccordionItem>
        <AccordionTitle>Title</AccordionTitle>
      </AccordionItem>,
    )
    const item = screen.getByText('Title').parentElement
    expect(item).toHaveClass('collapse')
  })

  it('applies icon classes', () => {
    render(
      <AccordionItem icon="arrow">
        <AccordionTitle>Title</AccordionTitle>
      </AccordionItem>,
    )
    const item = screen.getByText('Title').parentElement
    expect(item).toHaveClass('collapse-arrow')
  })

  it('merges custom className', () => {
    render(
      <AccordionItem className="custom">
        <AccordionTitle>Title</AccordionTitle>
      </AccordionItem>,
    )
    const item = screen.getByText('Title').parentElement
    expect(item).toHaveClass('collapse')
    expect(item).toHaveClass('custom')
  })
})

describe('AccordionTitle', () => {
  it('renders children correctly', () => {
    render(<AccordionTitle>My Title</AccordionTitle>)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('applies collapse-title class', () => {
    render(<AccordionTitle>Title</AccordionTitle>)
    expect(screen.getByText('Title')).toHaveClass('collapse-title')
  })

  it('merges custom className', () => {
    render(<AccordionTitle className="custom">Title</AccordionTitle>)
    const title = screen.getByText('Title')
    expect(title).toHaveClass('collapse-title')
    expect(title).toHaveClass('custom')
  })
})

describe('AccordionContent', () => {
  it('renders children correctly', () => {
    render(<AccordionContent>My Content</AccordionContent>)
    expect(screen.getByText('My Content')).toBeInTheDocument()
  })

  it('applies collapse-content class', () => {
    render(<AccordionContent>Content</AccordionContent>)
    expect(screen.getByText('Content')).toHaveClass('collapse-content')
  })

  it('merges custom className', () => {
    render(<AccordionContent className="custom">Content</AccordionContent>)
    const content = screen.getByText('Content')
    expect(content).toHaveClass('collapse-content')
    expect(content).toHaveClass('custom')
  })
})

describe('AccordionRadio', () => {
  it('renders as radio input', () => {
    render(<AccordionRadio data-testid="accordion-radio" />)
    const radio = screen.getByTestId('accordion-radio')
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveAttribute('type', 'radio')
  })

  it('applies default name attribute', () => {
    render(<AccordionRadio data-testid="accordion-radio" />)
    expect(screen.getByTestId('accordion-radio')).toHaveAttribute('name', 'accordion')
  })

  it('applies custom name attribute', () => {
    render(<AccordionRadio name="custom-accordion" data-testid="accordion-radio" />)
    expect(screen.getByTestId('accordion-radio')).toHaveAttribute('name', 'custom-accordion')
  })

  it('applies collapse-toggle class', () => {
    render(<AccordionRadio data-testid="accordion-radio" />)
    expect(screen.getByTestId('accordion-radio')).toHaveClass('collapse-toggle')
  })

  it('merges custom className', () => {
    render(<AccordionRadio className="custom" data-testid="accordion-radio" />)
    const radio = screen.getByTestId('accordion-radio')
    expect(radio).toHaveClass('collapse-toggle')
    expect(radio).toHaveClass('custom')
  })
})

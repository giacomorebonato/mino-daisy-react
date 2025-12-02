import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  BottomSheet,
  BottomSheetActions,
  BottomSheetBackdrop,
  BottomSheetContent,
} from './bottom-sheet'

describe('BottomSheet', () => {
  it('renders children correctly', () => {
    render(
      <BottomSheet open>
        <BottomSheetContent>Sheet content</BottomSheetContent>
      </BottomSheet>,
    )
    expect(screen.getByText('Sheet content')).toBeInTheDocument()
  })

  it('applies opacity-100 and pointer-events-auto when open is true', () => {
    render(
      <BottomSheet open data-testid="sheet">
        <BottomSheetContent>Open sheet</BottomSheetContent>
      </BottomSheet>,
    )
    const sheet = screen.getByTestId('sheet')
    expect(sheet).toHaveClass('opacity-100')
    expect(sheet).toHaveClass('pointer-events-auto')
  })

  it('applies opacity-0 and pointer-events-none when open is false', () => {
    render(
      <BottomSheet open={false} data-testid="sheet">
        <BottomSheetContent>Closed sheet</BottomSheetContent>
      </BottomSheet>,
    )
    const sheet = screen.getByTestId('sheet')
    expect(sheet).toHaveClass('opacity-0')
    expect(sheet).toHaveClass('pointer-events-none')
  })

  it('merges custom className with component classes', () => {
    render(
      <BottomSheet open className="custom-class" data-testid="sheet">
        <BottomSheetContent>Custom</BottomSheetContent>
      </BottomSheet>,
    )
    const sheet = screen.getByTestId('sheet')
    expect(sheet).toHaveClass('fixed')
    expect(sheet).toHaveClass('custom-class')
  })

  it('forwards HTML attributes', () => {
    render(
      <BottomSheet open data-testid="sheet" aria-label="Bottom sheet">
        <BottomSheetContent>Content</BottomSheetContent>
      </BottomSheet>,
    )
    expect(screen.getByTestId('sheet')).toHaveAttribute('aria-label', 'Bottom sheet')
  })
})

describe('BottomSheetContent', () => {
  it('renders children correctly', () => {
    render(<BottomSheetContent>Content text</BottomSheetContent>)
    expect(screen.getByText('Content text')).toBeInTheDocument()
  })

  it('applies base positioning classes', () => {
    render(<BottomSheetContent data-testid="content">Content</BottomSheetContent>)
    const content = screen.getByTestId('content')
    expect(content).toHaveClass('fixed')
    expect(content).toHaveClass('bottom-0')
    expect(content).toHaveClass('rounded-t-2xl')
  })

  it('merges custom className', () => {
    render(
      <BottomSheetContent className="translate-y-0" data-testid="content">
        Content
      </BottomSheetContent>,
    )
    const content = screen.getByTestId('content')
    expect(content).toHaveClass('fixed')
    expect(content).toHaveClass('translate-y-0')
  })
})

describe('BottomSheetBackdrop', () => {
  it('renders with correct backdrop classes', () => {
    render(<BottomSheetBackdrop data-testid="backdrop" />)
    const backdrop = screen.getByTestId('backdrop')
    expect(backdrop).toHaveClass('fixed')
    expect(backdrop).toHaveClass('inset-0')
  })

  it('forwards click handler', () => {
    const handleClick = () => {}
    render(<BottomSheetBackdrop onClick={handleClick} data-testid="backdrop" />)
    expect(screen.getByTestId('backdrop')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<BottomSheetBackdrop className="custom-backdrop" data-testid="backdrop" />)
    const backdrop = screen.getByTestId('backdrop')
    expect(backdrop).toHaveClass('fixed')
    expect(backdrop).toHaveClass('custom-backdrop')
  })
})

describe('BottomSheetActions', () => {
  it('renders children correctly', () => {
    render(<BottomSheetActions>Action buttons</BottomSheetActions>)
    expect(screen.getByText('Action buttons')).toBeInTheDocument()
  })

  it('applies flex column layout classes', () => {
    render(<BottomSheetActions data-testid="actions">Actions</BottomSheetActions>)
    const actions = screen.getByTestId('actions')
    expect(actions).toHaveClass('flex')
    expect(actions).toHaveClass('flex-col')
    expect(actions).toHaveClass('gap-2')
  })

  it('merges custom className', () => {
    render(
      <BottomSheetActions className="gap-4" data-testid="actions">
        Actions
      </BottomSheetActions>,
    )
    const actions = screen.getByTestId('actions')
    expect(actions).toHaveClass('flex')
    expect(actions).toHaveClass('gap-4')
  })
})

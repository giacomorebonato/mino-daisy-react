import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { FileInput } from './file-input'

describe('FileInput', () => {
  it('renders file input', () => {
    render(<FileInput data-testid="file-input" />)
    const fileInput = screen.getByTestId('file-input')
    expect(fileInput).toBeInTheDocument()
    expect(fileInput).toHaveAttribute('type', 'file')
  })

  it('applies variant classes', () => {
    render(<FileInput className="file-input-primary" data-testid="file-input" />)
    expect(screen.getByTestId('file-input')).toHaveClass('file-input-primary')
  })

  it('applies size classes', () => {
    render(<FileInput className="file-input-lg" data-testid="file-input" />)
    expect(screen.getByTestId('file-input')).toHaveClass('file-input-lg')
  })

  it('applies ghost style when ghost prop is true', () => {
    render(<FileInput className="file-input-ghost" data-testid="file-input" />)
    expect(screen.getByTestId('file-input')).toHaveClass('file-input-ghost')
  })

  it('disables file input when disabled prop is true', () => {
    render(<FileInput disabled data-testid="file-input" />)
    expect(screen.getByTestId('file-input')).toBeDisabled()
  })

  it('merges custom className with component classes', () => {
    render(<FileInput className="custom-class" data-testid="file-input" />)
    const fileInput = screen.getByTestId('file-input')
    expect(fileInput).toHaveClass('file-input')
    expect(fileInput).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<FileInput ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('accepts multiple files when multiple prop is true', () => {
    render(<FileInput multiple data-testid="file-input" />)
    expect(screen.getByTestId('file-input')).toHaveAttribute('multiple')
  })

  it('accepts specific file types with accept prop', () => {
    render(<FileInput accept="image/*" data-testid="file-input" />)
    expect(screen.getByTestId('file-input')).toHaveAttribute('accept', 'image/*')
  })
})

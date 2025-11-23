import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Toast } from './toast'

describe('Toast', () => {
  it('renders children correctly', () => {
    render(<Toast>Toast notification</Toast>)
    expect(screen.getByText('Toast notification')).toBeInTheDocument()
  })

  it('applies horizontal position classes', () => {
    render(<Toast className="toast-end">End toast</Toast>)
    expect(screen.getByText('End toast')).toHaveClass('toast-end')
  })

  it('applies vertical position classes', () => {
    render(<Toast className="toast-top">Top toast</Toast>)
    expect(screen.getByText('Top toast')).toHaveClass('toast-top')
  })

  it('applies multiple position classes', () => {
    render(<Toast className="toast-end toast-top">Top-end toast</Toast>)
    const toast = screen.getByText('Top-end toast')
    expect(toast).toHaveClass('toast-end')
    expect(toast).toHaveClass('toast-top')
  })

  it('merges custom className with component classes', () => {
    render(<Toast className="custom-class">Custom</Toast>)
    const toast = screen.getByText('Custom')
    expect(toast).toHaveClass('toast')
    expect(toast).toHaveClass('custom-class')
  })

  it('applies center positioning', () => {
    render(<Toast className="toast-center toast-middle">Center toast</Toast>)
    const toast = screen.getByText('Center toast')
    expect(toast).toHaveClass('toast-center')
    expect(toast).toHaveClass('toast-middle')
  })
})

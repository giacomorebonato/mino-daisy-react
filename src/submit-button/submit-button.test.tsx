import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { SubmitButton } from './submit-button'

describe('SubmitButton', () => {
  it('renders children correctly', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('has type="submit" by default', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('applies btn base class', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByRole('button')).toHaveClass('btn')
  })

  it('merges custom className', () => {
    render(<SubmitButton className="btn-primary">Submit</SubmitButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-primary')
  })

  it('shows spinner when isLoading is true', () => {
    render(<SubmitButton isLoading>Submit</SubmitButton>)
    expect(screen.getByRole('button').querySelector('svg')).toBeTruthy()
  })

  it('does not show spinner when isLoading is false', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByRole('button').querySelector('svg')).toBeNull()
  })

  it('is disabled when isLoading is true', () => {
    render(<SubmitButton isLoading>Submit</SubmitButton>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when disabled prop is true', () => {
    render(<SubmitButton disabled>Submit</SubmitButton>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('passes through HTML attributes', () => {
    render(<SubmitButton aria-label="Save form">Submit</SubmitButton>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Save form')
  })
})

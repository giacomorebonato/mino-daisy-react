import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PwdInput } from './pwd-input'

describe('PwdInput', () => {
  it('renders with placeholder', () => {
    render(<PwdInput placeholder="Enter password" />)
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument()
  })

  it('has type password by default', () => {
    render(<PwdInput placeholder="Password" />)
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')
  })

  it('toggles to text type when eye button is clicked', async () => {
    const user = userEvent.setup()
    render(<PwdInput placeholder="Password" />)

    const input = screen.getByPlaceholderText('Password')
    const toggleButton = screen.getByRole('button', { name: 'Show password' })

    expect(input).toHaveAttribute('type', 'password')

    await user.click(toggleButton)
    expect(input).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: 'Hide password' })).toBeInTheDocument()
  })

  it('toggles back to password type when clicked again', async () => {
    const user = userEvent.setup()
    render(<PwdInput placeholder="Password" />)

    const input = screen.getByPlaceholderText('Password')
    const toggleButton = screen.getByRole('button', { name: 'Show password' })

    await user.click(toggleButton)
    expect(input).toHaveAttribute('type', 'text')

    await user.click(screen.getByRole('button', { name: 'Hide password' }))
    expect(input).toHaveAttribute('type', 'password')
  })

  it('applies input class to label wrapper', () => {
    render(<PwdInput placeholder="Password" />)
    const label = screen.getByPlaceholderText('Password').closest('label')
    expect(label).toHaveClass('input')
  })

  it('merges custom className with input class', () => {
    render(<PwdInput className="input-bordered input-primary" placeholder="Password" />)
    const label = screen.getByPlaceholderText('Password').closest('label')
    expect(label).toHaveClass('input')
    expect(label).toHaveClass('input-bordered')
    expect(label).toHaveClass('input-primary')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<PwdInput ref={ref} placeholder="Password" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('passes through HTML attributes', () => {
    render(<PwdInput placeholder="Password" disabled required />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeDisabled()
    expect(input).toBeRequired()
  })
})

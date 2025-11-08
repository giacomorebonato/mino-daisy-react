import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert } from './alert'

describe('Alert', () => {
  it('renders children correctly', () => {
    render(<Alert>Test alert message</Alert>)
    expect(screen.getByText('Test alert message')).toBeInTheDocument()
  })

  it('applies alert role', () => {
    render(<Alert>Alert</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Alert variant="success">Success alert</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('alert-success')
  })

  it('applies style classes', () => {
    render(<Alert alertStyle="outline">Outline alert</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('alert-outline')
  })

  it('applies direction classes', () => {
    render(<Alert direction="vertical">Vertical alert</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('alert-vertical')
  })

  it('merges custom className with component classes', () => {
    render(<Alert className="custom-class">Custom</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('custom-class')
  })

  it('applies multiple modifiers together', () => {
    render(
      <Alert variant="info" alertStyle="soft" direction="horizontal">
        Combined alert
      </Alert>,
    )
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('alert-info')
    expect(alert).toHaveClass('alert-soft')
    expect(alert).toHaveClass('alert-horizontal')
  })
})

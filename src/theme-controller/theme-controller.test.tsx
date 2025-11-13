import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { ThemeController } from './theme-controller'

describe('ThemeController', () => {
  it('renders checkbox input', () => {
    render(<ThemeController theme="dark" data-testid="theme-controller" />)
    const input = screen.getByTestId('theme-controller')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'checkbox')
  })

  it('applies theme-controller class', () => {
    render(<ThemeController theme="dark" data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toHaveClass('theme-controller')
  })

  it('sets theme value attribute', () => {
    render(<ThemeController theme="synthwave" data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toHaveAttribute('value', 'synthwave')
  })

  it('applies checkbox style by default', () => {
    render(<ThemeController theme="dark" data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toHaveClass('checkbox')
  })

  it.skip('applies toggle style when specified', () => {
    // render(<ThemeController theme="dark" style="toggle" data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toHaveClass('toggle')
  })

  it.skip('applies swap style when specified', () => {
    // render(<ThemeController theme="dark" style="swap" data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toHaveClass('swap')
  })

  it('merges custom className with component classes', () => {
    render(<ThemeController theme="dark" className="custom-class" data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toHaveClass(
      'theme-controller',
      'checkbox',
      'custom-class',
    )
  })

  it('forwards ref to input element', () => {
    const ref = { current: null }
    render(<ThemeController theme="dark" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('passes additional props to input element', () => {
    render(
      <ThemeController theme="dark" data-testid="theme-controller" aria-label="Toggle theme" />,
    )
    expect(screen.getByTestId('theme-controller')).toHaveAttribute('aria-label', 'Toggle theme')
  })

  it('can be checked by default', () => {
    render(<ThemeController theme="dark" defaultChecked data-testid="theme-controller" />)
    expect(screen.getByTestId('theme-controller')).toBeChecked()
  })
})

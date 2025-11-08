import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RadialProgress } from './radial-progress'

describe('RadialProgress', () => {
  it('applies radial-progress class', () => {
    const { container } = render(<RadialProgress value={70} />)
    expect(container.querySelector('div')).toHaveClass('radial-progress')
  })

  it('sets value as CSS variable', () => {
    const { container } = render(<RadialProgress value={70} />)
    const div = container.querySelector('div')
    expect(div?.style.getPropertyValue('--value')).toBe('70')
  })

  it('renders value as default children', () => {
    const { container } = render(<RadialProgress value={70} />)
    expect(container.textContent).toBe('70%')
  })

  it('renders custom children', () => {
    const { container } = render(<RadialProgress value={70}>Custom</RadialProgress>)
    expect(container.textContent).toBe('Custom')
  })
})

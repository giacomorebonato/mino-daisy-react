import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarGroup } from './avatar'

describe('Avatar', () => {
  it('renders children correctly', () => {
    render(
      <Avatar>
        <div>Avatar Content</div>
      </Avatar>,
    )
    expect(screen.getByText('Avatar Content')).toBeInTheDocument()
  })

  it('applies base avatar class', () => {
    const { container } = render(<Avatar>Content</Avatar>)
    expect(container.firstChild).toHaveClass('avatar')
  })

  it('applies avatar-online class when online prop is true', () => {
    const { container } = render(<Avatar className="avatar-online">Content</Avatar>)
    expect(container.firstChild).toHaveClass('avatar', 'avatar-online')
  })

  it('applies avatar-offline class when offline prop is true', () => {
    const { container } = render(<Avatar className="avatar-offline">Content</Avatar>)
    expect(container.firstChild).toHaveClass('avatar', 'avatar-offline')
  })

  it('applies avatar-placeholder class when placeholder prop is true', () => {
    const { container } = render(<Avatar className="avatar-placeholder">Content</Avatar>)
    expect(container.firstChild).toHaveClass('avatar', 'avatar-placeholder')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Avatar className="custom-class">Content</Avatar>)
    expect(container.firstChild).toHaveClass('avatar', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Avatar data-testid="avatar">Content</Avatar>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'avatar')
  })
})

describe('AvatarGroup', () => {
  it('renders children correctly', () => {
    render(
      <AvatarGroup>
        <div>Group Content</div>
      </AvatarGroup>,
    )
    expect(screen.getByText('Group Content')).toBeInTheDocument()
  })

  it('applies base avatar-group class', () => {
    const { container } = render(<AvatarGroup>Content</AvatarGroup>)
    expect(container.firstChild).toHaveClass('avatar-group')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<AvatarGroup className="custom-class">Content</AvatarGroup>)
    expect(container.firstChild).toHaveClass('avatar-group', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<AvatarGroup data-testid="group">Content</AvatarGroup>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'group')
  })
})

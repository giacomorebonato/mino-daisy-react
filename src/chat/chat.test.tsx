import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Chat, ChatBubble, ChatFooter, ChatHeader, ChatImage } from './chat'

describe('Chat', () => {
  it('renders children correctly', () => {
    render(
      <Chat>
        <div>Chat Content</div>
      </Chat>,
    )
    expect(screen.getByText('Chat Content')).toBeInTheDocument()
  })

  it('applies base chat class', () => {
    const { container } = render(<Chat>Content</Chat>)
    expect(container.firstChild).toHaveClass('chat')
  })

  it('applies chat-start class when start prop is true', () => {
    const { container } = render(<Chat start>Content</Chat>)
    expect(container.firstChild).toHaveClass('chat', 'chat-start')
  })

  it('applies chat-end class when end prop is true', () => {
    const { container } = render(<Chat end>Content</Chat>)
    expect(container.firstChild).toHaveClass('chat', 'chat-end')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<Chat className="custom-class">Content</Chat>)
    expect(container.firstChild).toHaveClass('chat', 'custom-class')
  })

  it('passes additional props to div element', () => {
    const { container } = render(<Chat data-testid="chat">Content</Chat>)
    expect(container.firstChild).toHaveAttribute('data-testid', 'chat')
  })
})

describe('ChatImage', () => {
  it('renders children correctly', () => {
    render(
      <ChatImage>
        <div>Image Content</div>
      </ChatImage>,
    )
    expect(screen.getByText('Image Content')).toBeInTheDocument()
  })

  it('applies base chat-image class', () => {
    const { container } = render(<ChatImage>Content</ChatImage>)
    expect(container.firstChild).toHaveClass('chat-image')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<ChatImage className="custom-class">Content</ChatImage>)
    expect(container.firstChild).toHaveClass('chat-image', 'custom-class')
  })
})

describe('ChatHeader', () => {
  it('renders children correctly', () => {
    render(
      <ChatHeader>
        <div>Header Content</div>
      </ChatHeader>,
    )
    expect(screen.getByText('Header Content')).toBeInTheDocument()
  })

  it('applies base chat-header class', () => {
    const { container } = render(<ChatHeader>Content</ChatHeader>)
    expect(container.firstChild).toHaveClass('chat-header')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<ChatHeader className="custom-class">Content</ChatHeader>)
    expect(container.firstChild).toHaveClass('chat-header', 'custom-class')
  })
})

describe('ChatFooter', () => {
  it('renders children correctly', () => {
    render(
      <ChatFooter>
        <div>Footer Content</div>
      </ChatFooter>,
    )
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('applies base chat-footer class', () => {
    const { container } = render(<ChatFooter>Content</ChatFooter>)
    expect(container.firstChild).toHaveClass('chat-footer')
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<ChatFooter className="custom-class">Content</ChatFooter>)
    expect(container.firstChild).toHaveClass('chat-footer', 'custom-class')
  })
})

describe('ChatBubble', () => {
  it('renders children correctly', () => {
    render(
      <ChatBubble>
        <div>Bubble Content</div>
      </ChatBubble>,
    )
    expect(screen.getByText('Bubble Content')).toBeInTheDocument()
  })

  it('applies base chat-bubble class', () => {
    const { container } = render(<ChatBubble>Content</ChatBubble>)
    expect(container.firstChild).toHaveClass('chat-bubble')
  })

  it('applies variant classes correctly', () => {
    const variants: Array<
      'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    > = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']

    for (const variant of variants) {
      const { container } = render(<ChatBubble variant={variant}>Content</ChatBubble>)
      expect(container.firstChild).toHaveClass('chat-bubble', `chat-bubble-${variant}`)
    }
  })

  it('merges custom className with component classes', () => {
    const { container } = render(<ChatBubble className="custom-class">Content</ChatBubble>)
    expect(container.firstChild).toHaveClass('chat-bubble', 'custom-class')
  })
})

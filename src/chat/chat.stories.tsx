import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../avatar'
import { Chat, ChatBubble, ChatFooter, ChatHeader, ChatImage } from './chat'

const meta = {
  title: 'Visual & Media/Chat',
  component: Chat,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    start: {
      control: 'boolean',
    },
    end: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Chat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Chat start>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatBubble>It&apos;s over Anakin, I have the high ground.</ChatBubble>
      </Chat>
      <Chat end>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatBubble>You underestimate my power!</ChatBubble>
      </Chat>
    </div>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Chat start>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatHeader>
          Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
        </ChatHeader>
        <ChatBubble>You were the Chosen One!</ChatBubble>
      </Chat>
    </div>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Chat start>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatHeader>
          Obi-Wan Kenobi <time className="text-xs opacity-50">2 hours ago</time>
        </ChatHeader>
        <ChatBubble>You were the Chosen One!</ChatBubble>
        <ChatFooter className="opacity-50">Seen at 12:46</ChatFooter>
      </Chat>
    </div>
  ),
}

export const WithColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Chat start>
        <ChatBubble variant="primary">What kind of nonsense is this</ChatBubble>
      </Chat>
      <Chat start>
        <ChatBubble variant="secondary">
          Put me on the Council and not make me a Master!??
        </ChatBubble>
      </Chat>
      <Chat start>
        <ChatBubble variant="accent">
          That&apos;s never been done in the history of the Jedi. It&apos;s insulting!
        </ChatBubble>
      </Chat>
      <Chat end>
        <ChatBubble variant="info">Calm down, Anakin.</ChatBubble>
      </Chat>
      <Chat end>
        <ChatBubble variant="success">You have been given a great honor.</ChatBubble>
      </Chat>
      <Chat end>
        <ChatBubble variant="warning">To be on the Council at your age.</ChatBubble>
      </Chat>
      <Chat end>
        <ChatBubble variant="error">It&apos;s never happened before.</ChatBubble>
      </Chat>
    </div>
  ),
}

export const Conversation: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Chat start>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatHeader>
          Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
        </ChatHeader>
        <ChatBubble>It&apos;s over Anakin, I have the high ground.</ChatBubble>
        <ChatFooter className="opacity-50">Delivered</ChatFooter>
      </Chat>
      <Chat end>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatHeader>
          Anakin <time className="text-xs opacity-50">12:46</time>
        </ChatHeader>
        <ChatBubble>You underestimate my power!</ChatBubble>
        <ChatFooter className="opacity-50">Seen at 12:46</ChatFooter>
      </Chat>
      <Chat start>
        <ChatImage>
          <Avatar>
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                alt="User avatar"
              />
            </div>
          </Avatar>
        </ChatImage>
        <ChatBubble>Don&apos;t try it!</ChatBubble>
      </Chat>
    </div>
  ),
}

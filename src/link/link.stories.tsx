import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'

const meta = {
  title: 'Utilities & Special/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error'],
    },
    hover: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Link href="#">I'm a simple link</Link>,
}

export const InParagraph: Story = {
  render: () => (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Add "link" class to make it look like a <Link href="#">normal link</Link> again.
    </p>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" variant="neutral">
        Neutral
      </Link>
      <Link href="#" variant="primary">
        Primary
      </Link>
      <Link href="#" variant="secondary">
        Secondary
      </Link>
      <Link href="#" variant="accent">
        Accent
      </Link>
      <Link href="#" variant="info">
        Info
      </Link>
      <Link href="#" variant="success">
        Success
      </Link>
      <Link href="#" variant="warning">
        Warning
      </Link>
      <Link href="#" variant="error">
        Error
      </Link>
    </div>
  ),
}

export const HoverUnderline: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" hover>
        I show underline only on hover
      </Link>
      <Link href="#" hover variant="primary">
        Primary hover link
      </Link>
      <Link href="#" hover variant="secondary">
        Secondary hover link
      </Link>
    </div>
  ),
}

export const InNavigation: Story = {
  render: () => (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="#" className="text-xl font-bold">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  ),
}

export const InFooter: Story = {
  render: () => (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="#" className="link-hover">
          Branding
        </Link>
        <Link href="#" className="link-hover">
          Design
        </Link>
        <Link href="#" className="link-hover">
          Marketing
        </Link>
        <Link href="#" className="link-hover">
          Advertisement
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="#" className="link-hover">
          About us
        </Link>
        <Link href="#" className="link-hover">
          Contact
        </Link>
        <Link href="#" className="link-hover">
          Jobs
        </Link>
        <Link href="#" className="link-hover">
          Press kit
        </Link>
      </nav>
    </footer>
  ),
}

export const ExternalLinks: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        GitHub
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" variant="info">
        Twitter
      </Link>
      <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" variant="error">
        YouTube
      </Link>
    </div>
  ),
}

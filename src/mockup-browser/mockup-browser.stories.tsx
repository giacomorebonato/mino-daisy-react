import type { Meta, StoryObj } from '@storybook/react'
import { MockupBrowser, MockupBrowserToolbar } from './mockup-browser'

const meta = {
  title: 'Mockups & Prototyping/MockupBrowser',
  component: MockupBrowser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MockupBrowser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MockupBrowser className="border border-base-300 w-full max-w-2xl">
      <MockupBrowserToolbar>
        <div className="input">https://daisyui.com</div>
      </MockupBrowserToolbar>
      <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
    </MockupBrowser>
  ),
}

export const WithBorder: Story = {
  render: () => (
    <MockupBrowser className="border-base-300 border w-full max-w-2xl">
      <MockupBrowserToolbar>
        <div className="input">https://daisyui.com</div>
      </MockupBrowserToolbar>
      <div className="grid place-content-center h-80">Hello!</div>
    </MockupBrowser>
  ),
}

export const WithContent: Story = {
  render: () => (
    <MockupBrowser className="border border-base-300 w-full max-w-2xl">
      <MockupBrowserToolbar>
        <div className="input">https://example.com</div>
      </MockupBrowserToolbar>
      <div className="p-8 border-t border-base-300">
        <h1 className="text-3xl font-bold mb-4">Welcome to Example</h1>
        <p className="mb-4">
          This is a mockup browser displaying example content. It's perfect for showcasing web
          applications and websites in your designs.
        </p>
        <button type="button" className="btn btn-primary">
          Learn More
        </button>
      </div>
    </MockupBrowser>
  ),
}

export const CustomURL: Story = {
  render: () => (
    <MockupBrowser className="border border-base-300 w-full max-w-2xl">
      <MockupBrowserToolbar>
        <div className="input">https://github.com/username/repository</div>
      </MockupBrowserToolbar>
      <div className="grid place-content-center border-t border-base-300 h-64 bg-base-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Repository Page</h2>
          <p className="text-base-content/70">Mock GitHub interface</p>
        </div>
      </div>
    </MockupBrowser>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <MockupBrowser className="border border-base-300 w-full max-w-4xl">
      <MockupBrowserToolbar>
        <div className="input">https://app.example.com/dashboard</div>
      </MockupBrowserToolbar>
      <div className="p-6 border-t border-base-300 bg-base-200">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-sm">Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-sm">Revenue</h3>
              <p className="text-3xl font-bold">$12.3K</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-sm">Orders</h3>
              <p className="text-3xl font-bold">567</p>
            </div>
          </div>
        </div>
      </div>
    </MockupBrowser>
  ),
}

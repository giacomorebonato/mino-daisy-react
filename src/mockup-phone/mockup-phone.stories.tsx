import type { Meta, StoryObj } from '@storybook/react'
import { MockupPhone, MockupPhoneCamera, MockupPhoneDisplay } from './mockup-phone'

const meta = {
  title: 'Mockups & Prototyping/MockupPhone',
  component: MockupPhone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MockupPhone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MockupPhone>
      <MockupPhoneCamera />
      <MockupPhoneDisplay className="text-white grid place-content-center bg-neutral-900">
        It's Glowtime.
      </MockupPhoneDisplay>
    </MockupPhone>
  ),
}

export const WithWallpaper: Story = {
  render: () => (
    <MockupPhone>
      <MockupPhoneCamera />
      <MockupPhoneDisplay>
        <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp" />
      </MockupPhoneDisplay>
    </MockupPhone>
  ),
}

export const CustomBorderColor: Story = {
  render: () => (
    <MockupPhone className="border-[#ff8938]">
      <MockupPhoneCamera />
      <MockupPhoneDisplay>
        <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp" />
      </MockupPhoneDisplay>
    </MockupPhone>
  ),
}

export const AppInterface: Story = {
  render: () => (
    <MockupPhone>
      <MockupPhoneCamera />
      <MockupPhoneDisplay className="bg-base-200 p-4">
        <div className="flex flex-col h-full">
          <div className="navbar bg-base-100 rounded-box mb-4">
            <div className="flex-1">
              <span className="text-xl font-bold">My App</span>
            </div>
          </div>
          <div className="flex-1 grid gap-4">
            <div className="card bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Welcome</h2>
                <p>This is a mobile app interface mockup</p>
              </div>
            </div>
          </div>
          <div className="btm-nav">
            <button type="button">
              <span className="text-xs">Home</span>
            </button>
            <button type="button">
              <span className="text-xs">Search</span>
            </button>
            <button type="button">
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </MockupPhoneDisplay>
    </MockupPhone>
  ),
}

export const LockScreen: Story = {
  render: () => (
    <MockupPhone>
      <MockupPhoneCamera />
      <MockupPhoneDisplay className="bg-gradient-to-br from-purple-500 to-pink-500 text-white flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-light mb-2">12:00</div>
          <div className="text-xl">Monday, November 9</div>
        </div>
      </MockupPhoneDisplay>
    </MockupPhone>
  ),
}

export const MultiplePhones: Story = {
  render: () => (
    <div className="flex gap-8">
      <MockupPhone>
        <MockupPhoneCamera />
        <MockupPhoneDisplay className="bg-neutral-900 text-white grid place-content-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <div>Phone 1</div>
          </div>
        </MockupPhoneDisplay>
      </MockupPhone>
      <MockupPhone>
        <MockupPhoneCamera />
        <MockupPhoneDisplay className="bg-base-200 grid place-content-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <div>Phone 2</div>
          </div>
        </MockupPhoneDisplay>
      </MockupPhone>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { ThemeController } from './theme-controller'

const meta = {
  title: 'Utilities & Special/ThemeController',
  component: ThemeController,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeController>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <ThemeController theme="synthwave" style="checkbox" id="theme-checkbox" />
      <label htmlFor="theme-checkbox">Enable Synthwave Theme</label>
    </div>
  ),
}

export const Toggle: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <label htmlFor="theme-toggle">Dark Mode</label>
      <ThemeController theme="dark" style="toggle" id="theme-toggle" />
    </div>
  ),
}

export const SwapWithIcons: Story = {
  render: () => (
    <label className="swap swap-rotate">
      <ThemeController theme="synthwave" style="swap" />

      {/* sun icon */}
      <svg
        className="swap-off h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>Sun Icon</title>
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>Moon Icon</title>
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  ),
}

export const MultipleThemes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <ThemeController theme="light" style="checkbox" id="theme-light" name="theme-group" />
        <label htmlFor="theme-light">Light Theme</label>
      </div>
      <div className="flex items-center gap-2">
        <ThemeController theme="dark" style="checkbox" id="theme-dark" name="theme-group" />
        <label htmlFor="theme-dark">Dark Theme</label>
      </div>
      <div className="flex items-center gap-2">
        <ThemeController
          theme="synthwave"
          style="checkbox"
          id="theme-synthwave"
          name="theme-group"
        />
        <label htmlFor="theme-synthwave">Synthwave Theme</label>
      </div>
      <div className="flex items-center gap-2">
        <ThemeController theme="retro" style="checkbox" id="theme-retro" name="theme-group" />
        <label htmlFor="theme-retro">Retro Theme</label>
      </div>
      <div className="flex items-center gap-2">
        <ThemeController
          theme="cyberpunk"
          style="checkbox"
          id="theme-cyberpunk"
          name="theme-group"
        />
        <label htmlFor="theme-cyberpunk">Cyberpunk Theme</label>
      </div>
    </div>
  ),
}

export const ToggleList: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span>Light</span>
        <ThemeController theme="light" style="toggle" />
      </div>
      <div className="flex items-center justify-between">
        <span>Dark</span>
        <ThemeController theme="dark" style="toggle" />
      </div>
      <div className="flex items-center justify-between">
        <span>Cupcake</span>
        <ThemeController theme="cupcake" style="toggle" />
      </div>
      <div className="flex items-center justify-between">
        <span>Bumblebee</span>
        <ThemeController theme="bumbleblebee" style="toggle" />
      </div>
    </div>
  ),
}

export const InNavbar: Story = {
  render: () => (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="#home">
          daisyUI
        </a>
      </div>
      <div className="flex-none gap-2">
        <label className="swap swap-rotate">
          <ThemeController theme="dark" style="swap" />

          {/* sun icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Sun Icon</title>
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Moon Icon</title>
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  ),
}

export const DefaultChecked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <ThemeController theme="dark" style="toggle" id="theme-toggle-default" defaultChecked />
      <label htmlFor="theme-toggle-default">Dark Mode (Default On)</label>
    </div>
  ),
}

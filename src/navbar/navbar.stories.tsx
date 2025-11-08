import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Dropdown } from '../dropdown'
import { Navbar, NavbarCenter, NavbarEnd, NavbarStart } from './navbar'

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Navbar className="bg-base-100 shadow-sm">
      <NavbarStart>
        <Button variant="ghost" className="text-xl">
          daisyUI
        </Button>
      </NavbarStart>
      <NavbarCenter className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </NavbarCenter>
      <NavbarEnd>
        <Button>Get Started</Button>
      </NavbarEnd>
    </Navbar>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Navbar className="bg-base-100 shadow-sm">
      <div className="flex-none">
        <Button variant="ghost" shape="square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <title>Menu</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
      <div className="flex-1">
        <Button variant="ghost" className="text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Button variant="ghost" shape="square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <title>More</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </Button>
      </div>
    </Navbar>
  ),
}

export const WithDropdown: Story = {
  render: () => (
    <Navbar className="bg-base-100 shadow-sm">
      <div className="flex-1">
        <Button variant="ghost" className="text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#link">Link</a>
          </li>
          <li>
            <Dropdown label="Parent">
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="#link1">Link 1</a>
                </li>
                <li>
                  <a href="#link2">Link 2</a>
                </li>
              </ul>
            </Dropdown>
          </li>
        </ul>
      </div>
    </Navbar>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Navbar className="bg-base-100 shadow-sm">
      <NavbarStart>
        <Dropdown label="">
          <Button variant="ghost" className="lg:hidden" shape="square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a href="#item1">Item 1</a>
            </li>
            <li>
              <a href="#parent">Parent</a>
              <ul className="p-2">
                <li>
                  <a href="#submenu1">Submenu 1</a>
                </li>
                <li>
                  <a href="#submenu2">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#item3">Item 3</a>
            </li>
          </ul>
        </Dropdown>
        <Button variant="ghost" className="text-xl">
          daisyUI
        </Button>
      </NavbarStart>
      <NavbarCenter className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#item1">Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a href="#submenu1">Submenu 1</a>
                </li>
                <li>
                  <a href="#submenu2">Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#item3">Item 3</a>
          </li>
        </ul>
      </NavbarCenter>
      <NavbarEnd>
        <Button>Button</Button>
      </NavbarEnd>
    </Navbar>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <Navbar className="bg-base-100 shadow-sm">
      <NavbarStart>
        <Button variant="ghost" className="text-xl">
          daisyUI
        </Button>
      </NavbarStart>
      <NavbarCenter>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </NavbarCenter>
      <NavbarEnd>
        <Button variant="ghost" shape="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Search</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </NavbarEnd>
    </Navbar>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Navbar className="bg-neutral text-neutral-content">
        <Button variant="ghost" className="text-xl">
          Neutral Navbar
        </Button>
      </Navbar>
      <Navbar className="bg-primary text-primary-content">
        <Button variant="ghost" className="text-xl">
          Primary Navbar
        </Button>
      </Navbar>
      <Navbar className="bg-secondary text-secondary-content">
        <Button variant="ghost" className="text-xl">
          Secondary Navbar
        </Button>
      </Navbar>
    </div>
  ),
}

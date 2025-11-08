import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Menu } from '../menu'
import { Drawer, DrawerContent, DrawerOverlay, DrawerSide, DrawerToggle } from './drawer'

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    end: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerToggle id="my-drawer" />
      <DrawerContent className="flex flex-col">
        <div className="p-4">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-4">Main Content Area</h2>
          <p>This is the main content area of your page.</p>
        </div>
      </DrawerContent>
      <DrawerSide>
        <DrawerOverlay htmlFor="my-drawer" />
        <Menu className="bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a href="#item1">Sidebar Item 1</a>
          </li>
          <li>
            <a href="#item2">Sidebar Item 2</a>
          </li>
        </Menu>
      </DrawerSide>
    </Drawer>
  ),
}

export const End: Story = {
  render: () => (
    <Drawer end>
      <DrawerToggle id="my-drawer-4" />
      <DrawerContent>
        <div className="p-4">
          <label htmlFor="my-drawer-4" className="btn btn-primary drawer-button">
            Open drawer (right)
          </label>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-4">Main Content Area</h2>
          <p>This drawer opens from the right side.</p>
        </div>
      </DrawerContent>
      <DrawerSide>
        <DrawerOverlay htmlFor="my-drawer-4" />
        <Menu className="bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a href="#item1">Sidebar Item 1</a>
          </li>
          <li>
            <a href="#item2">Sidebar Item 2</a>
          </li>
        </Menu>
      </DrawerSide>
    </Drawer>
  ),
}

export const WithNavbar: Story = {
  render: () => (
    <Drawer>
      <DrawerToggle id="my-drawer-2" />
      <DrawerContent className="flex flex-col">
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <title>Menu</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
          <div className="hidden flex-none lg:block">
            <Menu horizontal>
              <li>
                <a href="#navbar1">Navbar Item 1</a>
              </li>
              <li>
                <a href="#navbar2">Navbar Item 2</a>
              </li>
            </Menu>
          </div>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-4">Page Content</h2>
          <p>
            This is a responsive layout with a navbar. On small screens, the hamburger menu opens
            the drawer. On large screens, the navbar items are visible.
          </p>
        </div>
      </DrawerContent>
      <DrawerSide>
        <DrawerOverlay htmlFor="my-drawer-2" />
        <Menu className="bg-base-200 min-h-full w-80 p-4">
          <li>
            <a href="#sidebar1">Sidebar Item 1</a>
          </li>
          <li>
            <a href="#sidebar2">Sidebar Item 2</a>
          </li>
        </Menu>
      </DrawerSide>
    </Drawer>
  ),
}

export const WithMenuItems: Story = {
  render: () => (
    <Drawer>
      <DrawerToggle id="my-drawer-3" />
      <DrawerContent>
        <div className="p-4">
          <label htmlFor="my-drawer-3" className="btn btn-primary drawer-button">
            Open menu
          </label>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Users</div>
              <div className="stat-value">89,400</div>
            </div>
          </div>
        </div>
      </DrawerContent>
      <DrawerSide>
        <DrawerOverlay htmlFor="my-drawer-3" />
        <Menu className="bg-base-200 min-h-full w-80 p-4">
          <li>
            <a href="#analytics">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Analytics</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Analytics
            </a>
          </li>
          <li>
            <a href="#users">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Users</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Users
            </a>
          </li>
          <li>
            <a href="#settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Settings</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </li>
        </Menu>
      </DrawerSide>
    </Drawer>
  ),
}

export const WithButton: Story = {
  render: () => (
    <Drawer>
      <DrawerToggle id="my-drawer-5" />
      <DrawerContent>
        <div className="flex h-screen items-center justify-center">
          <Button variant="primary">
            <label htmlFor="my-drawer-5" className="cursor-pointer">
              Open Drawer
            </label>
          </Button>
        </div>
      </DrawerContent>
      <DrawerSide>
        <DrawerOverlay htmlFor="my-drawer-5" />
        <div className="bg-base-200 text-base-content min-h-full w-80 p-4">
          <h3 className="font-bold text-lg mb-4">Drawer Menu</h3>
          <Menu>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </Menu>
        </div>
      </DrawerSide>
    </Drawer>
  ),
}

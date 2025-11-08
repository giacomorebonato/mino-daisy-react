import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './breadcrumbs'

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumbs className="text-sm">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#documents">Documents</a>
      </li>
      <li>Add Document</li>
    </Breadcrumbs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs className="text-sm">
      <li>
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <title>Folder</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Home
        </a>
      </li>
      <li>
        <a href="#documents">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <title>Documents</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Documents
        </a>
      </li>
      <li>
        <span className="inline-flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <title>Add Document</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Add Document
        </span>
      </li>
    </Breadcrumbs>
  ),
}

export const MaxWidth: Story = {
  render: () => (
    <Breadcrumbs className="max-w-xs text-sm">
      <li>
        <a href="#long1">Long text 1</a>
      </li>
      <li>
        <a href="#long2">Long text 2</a>
      </li>
      <li>
        <a href="#long3">Long text 3</a>
      </li>
      <li>
        <a href="#long4">Long text 4</a>
      </li>
      <li>Long text 5</li>
    </Breadcrumbs>
  ),
}

export const SimpleLinks: Story = {
  render: () => (
    <Breadcrumbs className="text-sm">
      <li>
        <a href="#root">Root</a>
      </li>
      <li>
        <a href="#parent">Parent</a>
      </li>
      <li>
        <a href="#child">Child</a>
      </li>
      <li>Current Page</li>
    </Breadcrumbs>
  ),
}

export const LongPath: Story = {
  render: () => (
    <Breadcrumbs className="text-sm">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#web">Web Development</a>
      </li>
      <li>
        <a href="#react">React</a>
      </li>
      <li>
        <a href="#components">Components</a>
      </li>
      <li>Breadcrumbs</li>
    </Breadcrumbs>
  ),
}

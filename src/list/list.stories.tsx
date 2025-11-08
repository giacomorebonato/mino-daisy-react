import type { Meta, StoryObj } from '@storybook/react'
import { List, ListRow } from './list'

const meta = {
  title: 'Data Display/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow>
          <span>Label</span>
          <span>Value</span>
        </ListRow>
        <ListRow>
          <span>Name</span>
          <span>John Doe</span>
        </ListRow>
        <ListRow>
          <span>Email</span>
          <span>john@example.com</span>
        </ListRow>
        <ListRow>
          <span>Phone</span>
          <span>+1 234 567 890</span>
        </ListRow>
      </List>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
        </ListRow>
        <ListRow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>Profile</span>
        </ListRow>
        <ListRow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current"
          >
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
          <span>Settings</span>
        </ListRow>
      </List>
    </div>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow>
          <span>Inbox</span>
          <span className="badge badge-primary">12</span>
        </ListRow>
        <ListRow>
          <span>Drafts</span>
          <span className="badge badge-secondary">3</span>
        </ListRow>
        <ListRow>
          <span>Sent</span>
          <span className="badge">45</span>
        </ListRow>
        <ListRow>
          <span>Trash</span>
          <span className="badge badge-ghost">2</span>
        </ListRow>
      </List>
    </div>
  ),
}

export const WithButtons: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow>
          <div>
            <div className="font-semibold">Task 1</div>
            <div className="text-sm text-base-content/60">Complete the project</div>
          </div>
          <button type="button" className="btn btn-sm btn-primary">
            Done
          </button>
        </ListRow>
        <ListRow>
          <div>
            <div className="font-semibold">Task 2</div>
            <div className="text-sm text-base-content/60">Review pull request</div>
          </div>
          <button type="button" className="btn btn-sm btn-primary">
            Done
          </button>
        </ListRow>
        <ListRow>
          <div>
            <div className="font-semibold">Task 3</div>
            <div className="text-sm text-base-content/60">Update documentation</div>
          </div>
          <button type="button" className="btn btn-sm btn-primary">
            Done
          </button>
        </ListRow>
      </List>
    </div>
  ),
}

export const WithColWrap: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow colWrap>
          <span>Label</span>
          <span>
            This is a very long text that demonstrates the list-col-wrap modifier
            which forces items to wrap onto the next line when needed
          </span>
        </ListRow>
        <ListRow colWrap>
          <span>Description</span>
          <span>
            Another example of wrapping content in a list row. The text will wrap
            to the next line when it exceeds the available width.
          </span>
        </ListRow>
      </List>
    </div>
  ),
}

export const Contact: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow>
          <span className="font-semibold">Name</span>
          <span>Jane Smith</span>
        </ListRow>
        <ListRow>
          <span className="font-semibold">Email</span>
          <span>jane.smith@example.com</span>
        </ListRow>
        <ListRow>
          <span className="font-semibold">Phone</span>
          <span>+1 (555) 123-4567</span>
        </ListRow>
        <ListRow>
          <span className="font-semibold">Address</span>
          <span>123 Main St, City, State 12345</span>
        </ListRow>
        <ListRow>
          <span className="font-semibold">Company</span>
          <span>Acme Corporation</span>
        </ListRow>
      </List>
    </div>
  ),
}

export const Styled: Story = {
  render: () => (
    <div className="w-96">
      <List className="border border-base-300 rounded-box">
        <ListRow className="hover:bg-base-200 p-4">
          <span>Dashboard</span>
          <span className="badge badge-info">New</span>
        </ListRow>
        <ListRow className="hover:bg-base-200 p-4 border-t border-base-300">
          <span>Analytics</span>
          <span>View stats</span>
        </ListRow>
        <ListRow className="hover:bg-base-200 p-4 border-t border-base-300">
          <span>Reports</span>
          <span>Download</span>
        </ListRow>
        <ListRow className="hover:bg-base-200 p-4 border-t border-base-300">
          <span>Settings</span>
          <span>Configure</span>
        </ListRow>
      </List>
    </div>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <div className="w-96">
      <List>
        <ListRow>
          <span className="font-semibold">ID</span>
          <span className="font-semibold">Name</span>
          <span className="font-semibold">Status</span>
        </ListRow>
        <ListRow>
          <span>001</span>
          <span>Project Alpha</span>
          <span className="badge badge-success">Active</span>
        </ListRow>
        <ListRow>
          <span>002</span>
          <span>Project Beta</span>
          <span className="badge badge-warning">Pending</span>
        </ListRow>
        <ListRow>
          <span>003</span>
          <span>Project Gamma</span>
          <span className="badge badge-error">Blocked</span>
        </ListRow>
      </List>
    </div>
  ),
}

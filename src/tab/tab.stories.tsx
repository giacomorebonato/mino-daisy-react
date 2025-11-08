import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tab, TabContent, Tabs } from './tab'

const meta = {
  title: 'Interactive & Feedback/Tab',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabsStyle: {
      control: 'select',
      options: ['boxed', 'bordered', 'lifted'],
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className="w-96">
        <Tabs>
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            Tab 1
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Tab 2
          </Tab>
          <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            Tab 3
          </Tab>
        </Tabs>
        <div className="p-4">
          {activeTab === 0 && <p>Content for Tab 1</p>}
          {activeTab === 1 && <p>Content for Tab 2</p>}
          {activeTab === 2 && <p>Content for Tab 3</p>}
        </div>
      </div>
    )
  },
}

export const Boxed: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className="w-96">
        <Tabs tabsStyle="boxed">
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            Tab 1
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Tab 2
          </Tab>
          <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            Tab 3
          </Tab>
        </Tabs>
      </div>
    )
  },
}

export const Bordered: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className="w-96">
        <Tabs tabsStyle="bordered">
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            Tab 1
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Tab 2
          </Tab>
          <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            Tab 3
          </Tab>
        </Tabs>
      </div>
    )
  },
}

export const Lifted: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className="w-96">
        <Tabs tabsStyle="lifted">
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            Tab 1
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Tab 2
          </Tab>
          <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            Tab 3
          </Tab>
        </Tabs>
        <div className="border border-base-300 bg-base-100 p-6">
          {activeTab === 0 && <p>Content for Tab 1</p>}
          {activeTab === 1 && <p>Content for Tab 2</p>}
          {activeTab === 2 && <p>Content for Tab 3</p>}
        </div>
      </div>
    )
  },
}

export const WithDisabled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className="w-96">
        <Tabs>
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            Tab 1
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Tab 2
          </Tab>
          <Tab disabled>Disabled</Tab>
        </Tabs>
      </div>
    )
  },
}

export const WithContent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className="w-96">
        <Tabs tabsStyle="lifted">
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            Home
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Profile
          </Tab>
          <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            Settings
          </Tab>
        </Tabs>
        <TabContent className="border border-base-300 bg-base-100 p-6">
          {activeTab === 0 && (
            <div>
              <h3 className="font-bold text-lg">Home</h3>
              <p>Welcome to the home page</p>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h3 className="font-bold text-lg">Profile</h3>
              <p>View and edit your profile information</p>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h3 className="font-bold text-lg">Settings</h3>
              <p>Configure your application settings</p>
            </div>
          )}
        </TabContent>
      </div>
    )
  },
}

export const Radio: Story = {
  render: () => (
    <div className="w-96">
      <Tabs>
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" />
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 3" />
      </Tabs>
    </div>
  ),
}

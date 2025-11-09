import type { Meta, StoryObj } from '@storybook/react'
import { MockupWindow } from './mockup-window'

const meta = {
  title: 'Mockups & Prototyping/MockupWindow',
  component: MockupWindow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MockupWindow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MockupWindow className="border border-base-300 w-full max-w-2xl">
      <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
    </MockupWindow>
  ),
}

export const WithBackground: Story = {
  render: () => (
    <MockupWindow className="bg-base-100 border border-base-300 max-w-2xl">
      <div className="grid place-content-center h-80">Hello!</div>
    </MockupWindow>
  ),
}

export const TextEditor: Story = {
  render: () => (
    <MockupWindow className="border border-base-300 w-full max-w-3xl">
      <div className="border-t border-base-300 p-4 bg-base-100">
        <div className="flex gap-2 mb-4 border-b border-base-300 pb-2">
          <button type="button" className="btn btn-xs">
            File
          </button>
          <button type="button" className="btn btn-xs">
            Edit
          </button>
          <button type="button" className="btn btn-xs">
            View
          </button>
          <button type="button" className="btn btn-xs">
            Help
          </button>
        </div>
        <div className="mockup-code">
          <pre data-prefix="1">
            <code>import React from 'react'</code>
          </pre>
          <pre data-prefix="2">
            <code />
          </pre>
          <pre data-prefix="3">
            <code>function App() {'{'}</code>
          </pre>
          <pre data-prefix="4">
            <code> return &lt;div&gt;Hello World&lt;/div&gt;</code>
          </pre>
          <pre data-prefix="5">
            <code>{'}'}</code>
          </pre>
        </div>
      </div>
    </MockupWindow>
  ),
}

export const FileManager: Story = {
  render: () => (
    <MockupWindow className="border border-base-300 w-full max-w-3xl">
      <div className="border-t border-base-300 bg-base-100">
        <div className="flex border-b border-base-300">
          <div className="p-2 border-r border-base-300 bg-base-200">
            <ul className="menu menu-sm w-40">
              <li>
                <a href="#documents">Documents</a>
              </li>
              <li>
                <a href="#downloads">Downloads</a>
              </li>
              <li>
                <a href="#pictures">Pictures</a>
              </li>
              <li>
                <a href="#music">Music</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 p-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body items-center p-4">
                  <div className="text-4xl">📁</div>
                  <div className="text-xs">Folder 1</div>
                </div>
              </div>
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body items-center p-4">
                  <div className="text-4xl">📄</div>
                  <div className="text-xs">Document</div>
                </div>
              </div>
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body items-center p-4">
                  <div className="text-4xl">🖼️</div>
                  <div className="text-xs">Image</div>
                </div>
              </div>
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body items-center p-4">
                  <div className="text-4xl">🎵</div>
                  <div className="text-xs">Music</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  ),
}

export const SettingsWindow: Story = {
  render: () => (
    <MockupWindow className="border border-base-300 w-full max-w-2xl">
      <div className="border-t border-base-300 p-6 bg-base-100">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <div className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Enable notifications</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Dark mode</span>
              <input type="checkbox" className="toggle" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Auto-save</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
          <div className="mt-4">
            <button type="button" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </MockupWindow>
  ),
}

export const Calculator: Story = {
  render: () => (
    <MockupWindow className="border border-base-300 w-80">
      <div className="border-t border-base-300 p-4 bg-base-100">
        <div className="mb-4 p-4 bg-base-200 rounded text-right text-2xl font-mono">0</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-'].map((btn) => (
            <button key={btn} type="button" className="btn btn-sm" onClick={() => {}}>
              {btn}
            </button>
          ))}
          <button type="button" className="btn btn-sm col-span-2">
            0
          </button>
          <button type="button" className="btn btn-sm">
            .
          </button>
          <button type="button" className="btn btn-sm">
            +
          </button>
          <button type="button" className="btn btn-sm btn-primary col-span-4">
            =
          </button>
        </div>
      </div>
    </MockupWindow>
  ),
}

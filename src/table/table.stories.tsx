import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../checkbox'
import { Table } from './table'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    zebra: {
      control: 'boolean',
    },
    pinRows: {
      control: 'boolean',
    },
    pinCols: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
}

export const WithCheckboxes: Story = {
  render: () => (
    <div className="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th>
              <Checkbox />
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Checkbox />
            </th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <button type="button" className="btn btn-ghost btn-xs">
                details
              </button>
            </td>
          </tr>
          <tr>
            <th>
              <Checkbox />
            </th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>
              <button type="button" className="btn btn-ghost btn-xs">
                details
              </button>
            </td>
          </tr>
          <tr>
            <th>
              <Checkbox />
            </th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>
              <button type="button" className="btn btn-ghost btn-xs">
                details
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
}

export const Zebra: Story = {
  render: () => (
    <div className="overflow-x-auto">
      <Table zebra>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto">
        <Table size="xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="overflow-x-auto">
        <Table size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="overflow-x-auto">
        <Table size="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="overflow-x-auto">
        <Table size="lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  ),
}

export const PinnedRowsAndColumns: Story = {
  render: () => (
    <div className="overflow-x-auto h-96 w-full">
      <Table size="xs" pinRows pinCols>
        <thead>
          <tr>
            <th />
            <td>Name</td>
            <td>Job</td>
            <td>Company</td>
            <td>Location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th />
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }, (_, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
              <th>{i + 1}</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th />
            <td>Name</td>
            <td>Job</td>
            <td>Company</td>
            <td>Location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th />
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <div className="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
}

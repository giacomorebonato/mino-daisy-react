import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { Calendar } from './calendar'

const meta = {
  title: 'Utilities & Special/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Calendar />,
}

export const SingleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>()
    return (
      <div className="space-y-4">
        <Calendar mode="single" selected={selected} onSelect={setSelected} />
        {selected && (
          <div className="alert alert-info">
            <span>Selected: {selected.toLocaleDateString()}</span>
          </div>
        )}
      </div>
    )
  },
}

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date[]>()
    return (
      <div className="space-y-4">
        <Calendar mode="multiple" selected={selected} onSelect={setSelected} />
        {selected && selected.length > 0 && (
          <div className="alert alert-info">
            <span>Selected {selected.length} dates</span>
          </div>
        )}
      </div>
    )
  },
}

export const RangeSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<DateRange>()
    return (
      <div className="space-y-4">
        <Calendar mode="range" selected={selected} onSelect={setSelected} />
        {selected?.from && (
          <div className="alert alert-info">
            <span>
              From: {selected.from.toLocaleDateString()}
              {selected.to && ` → To: ${selected.to.toLocaleDateString()}`}
            </span>
          </div>
        )}
      </div>
    )
  },
}

export const WithDisabledDates: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>()
    const disabledDays = [
      { from: new Date(2024, 0, 1), to: new Date(2024, 0, 5) },
      { dayOfWeek: [0, 6] }, // Disable weekends
    ]
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={disabledDays}
        />
        <div className="alert alert-warning">
          <span>Weekends and Jan 1-5 are disabled</span>
        </div>
      </div>
    )
  },
}

export const MultipleMonths: Story = {
  render: () => {
    const [selected, setSelected] = useState<DateRange>()
    return <Calendar mode="range" numberOfMonths={2} selected={selected} onSelect={setSelected} />
  },
}

export const WithFooter: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>()
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          selected ? (
            <div className="mt-4 text-center">
              <button type="button" className="btn btn-sm btn-primary">
                Confirm {selected.toLocaleDateString()}
              </button>
            </div>
          ) : (
            <div className="mt-4 text-center text-sm text-base-content/60">Please pick a date</div>
          )
        }
      />
    )
  },
}

export const InDropdown: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>()
    return (
      <div className="dropdown">
        <button type="button" className="btn m-1">
          {selected ? selected.toLocaleDateString() : 'Pick a date'}
        </button>
        <div className="dropdown-content menu bg-base-100 rounded-box z-[1] p-4 shadow-lg">
          <Calendar mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    )
  },
}

export const WithCustomStyling: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>()
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Schedule a Meeting</h2>
          <Calendar
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="bg-base-100 rounded-box"
          />
          {selected && (
            <div className="card-actions justify-end">
              <button type="button" className="btn btn-primary">
                Schedule for {selected.toLocaleDateString()}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  },
}

export const DefaultMonth: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>()
    const defaultMonth = new Date(2024, 11, 1) // December 2024
    return (
      <div className="space-y-4">
        <Calendar mode="single" selected={selected} onSelect={setSelected} month={defaultMonth} />
        <div className="alert alert-info">
          <span>Calendar opens to December 2024</span>
        </div>
      </div>
    )
  },
}

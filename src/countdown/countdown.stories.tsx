import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Countdown } from './countdown'

const meta = {
  title: 'Data Display/Countdown',
  component: Countdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 999 },
    },
  },
} satisfies Meta<typeof Countdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 99,
  },
}

export const CountingDown: Story = {
  render: () => {
    const [value, setValue] = useState(60)

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((prev) => (prev > 0 ? prev - 1 : 60))
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    return (
      <div className="flex flex-col items-center gap-2">
        <Countdown value={value} />
        <p className="text-sm text-base-content/60">Seconds remaining</p>
      </div>
    )
  },
}

export const Clock: Story = {
  render: () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date())
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    return (
      <div className="flex gap-2 text-center">
        <div className="flex flex-col">
          <Countdown value={hours} className="text-5xl" />
          <span className="text-xs">hours</span>
        </div>
        <span className="text-5xl">:</span>
        <div className="flex flex-col">
          <Countdown value={minutes} className="text-5xl" />
          <span className="text-xs">min</span>
        </div>
        <span className="text-5xl">:</span>
        <div className="flex flex-col">
          <Countdown value={seconds} className="text-5xl" />
          <span className="text-xs">sec</span>
        </div>
      </div>
    )
  },
}

export const Timer: Story = {
  render: () => {
    const [minutes, setMinutes] = useState(5)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
      if (!isRunning) return

      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsRunning(false)
          } else {
            setMinutes((prev) => prev - 1)
            setSeconds(59)
          }
        } else {
          setSeconds((prev) => prev - 1)
        }
      }, 1000)

      return () => clearInterval(interval)
    }, [isRunning, minutes, seconds])

    const handleReset = () => {
      setIsRunning(false)
      setMinutes(5)
      setSeconds(0)
    }

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 text-center">
          <Countdown value={minutes} className="text-5xl" />
          <span className="text-5xl">:</span>
          <Countdown value={seconds} className="text-5xl" />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button type="button" className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    )
  },
}

export const Days: Story = {
  render: () => {
    const targetDate = new Date('2025-12-31T23:59:59')
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date()
        const difference = targetDate.getTime() - now.getTime()

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    return (
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="flex flex-col">
          <Countdown value={timeLeft.days} className="text-4xl" />
          <span className="text-xs">days</span>
        </div>
        <div className="flex flex-col">
          <Countdown value={timeLeft.hours} className="text-4xl" />
          <span className="text-xs">hours</span>
        </div>
        <div className="flex flex-col">
          <Countdown value={timeLeft.minutes} className="text-4xl" />
          <span className="text-xs">min</span>
        </div>
        <div className="flex flex-col">
          <Countdown value={timeLeft.seconds} className="text-4xl" />
          <span className="text-xs">sec</span>
        </div>
      </div>
    )
  },
}

export const WithCustomStyle: Story = {
  render: () => {
    const [value, setValue] = useState(10)

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((prev) => (prev > 0 ? prev - 1 : 10))
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    return (
      <div className="flex flex-col items-center gap-2">
        <Countdown
          value={value}
          className="font-mono text-6xl"
          style={{ color: value <= 3 ? 'red' : 'inherit' }}
        />
        <p className="text-sm text-base-content/60">
          {value <= 3 ? 'Hurry up!' : 'Time remaining'}
        </p>
      </div>
    )
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import {
  BottomSheet,
  BottomSheetActions,
  BottomSheetBackdrop,
  BottomSheetContent,
} from './bottom-sheet'

const meta = {
  title: 'Interactive & Feedback/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof BottomSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="p-8">
        <Button className="btn-primary" onClick={() => setOpen(true)}>
          Open Bottom Sheet
        </Button>
        <BottomSheet open={open}>
          <BottomSheetBackdrop onClick={() => setOpen(false)} />
          <BottomSheetContent className={open ? 'translate-y-0' : 'translate-y-full'}>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Bottom Sheet Title</h3>
              <p className="text-base-content/70">
                This is a bottom sheet that slides up from the bottom of the screen. Click the
                backdrop or a button to close.
              </p>
            </div>
            <BottomSheetActions>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => setOpen(false)}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-block"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </BottomSheetActions>
          </BottomSheetContent>
        </BottomSheet>
      </div>
    )
  },
}

export const WithActionList: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="p-8">
        <Button className="btn-secondary" onClick={() => setOpen(true)}>
          Show Actions
        </Button>
        <BottomSheet open={open}>
          <BottomSheetBackdrop onClick={() => setOpen(false)} />
          <BottomSheetContent className={open ? 'translate-y-0' : 'translate-y-full'}>
            <div className="p-4">
              <h3 className="font-bold text-lg text-center mb-2">Choose an action</h3>
            </div>
            <BottomSheetActions>
              <button
                type="button"
                className="btn btn-ghost btn-block justify-start"
                onClick={() => setOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-block justify-start"
                onClick={() => setOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-block justify-start text-error"
                onClick={() => setOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </button>
              <button
                type="button"
                className="btn btn-outline btn-block"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </BottomSheetActions>
          </BottomSheetContent>
        </BottomSheet>
      </div>
    )
  },
}

export const WithLinks: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Navigation Menu</Button>
        <BottomSheet open={open}>
          <BottomSheetBackdrop onClick={() => setOpen(false)} />
          <BottomSheetContent className={open ? 'translate-y-0' : 'translate-y-full'}>
            <div className="p-4">
              <h3 className="font-bold text-lg text-center mb-2">Quick Links</h3>
            </div>
            <BottomSheetActions>
              <a href="#profile" className="btn btn-ghost btn-block justify-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                View Profile
              </a>
              <a href="#settings" className="btn btn-ghost btn-block justify-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Settings
              </a>
              <a href="#help" className="btn btn-ghost btn-block justify-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Help & Support
              </a>
              <button
                type="button"
                className="btn btn-outline btn-block"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </BottomSheetActions>
          </BottomSheetContent>
        </BottomSheet>
      </div>
    )
  },
}

export const WithScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="p-8">
        <Button className="btn-accent" onClick={() => setOpen(true)}>
          Long Content
        </Button>
        <BottomSheet open={open}>
          <BottomSheetBackdrop onClick={() => setOpen(false)} />
          <BottomSheetContent className={open ? 'translate-y-0' : 'translate-y-full'}>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Terms and Conditions</h3>
              <div className="prose prose-sm max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4>Privacy Policy</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <h4>Data Collection</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident.
                </p>
                <p>
                  Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                  dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-base-100 border-t border-base-300">
              <BottomSheetActions>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => setOpen(false)}
                >
                  Accept
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-block"
                  onClick={() => setOpen(false)}
                >
                  Decline
                </button>
              </BottomSheetActions>
            </div>
          </BottomSheetContent>
        </BottomSheet>
      </div>
    )
  },
}

export const CustomHeight: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Small Sheet</Button>
        <BottomSheet open={open}>
          <BottomSheetBackdrop onClick={() => setOpen(false)} />
          <BottomSheetContent
            className={`max-h-[50vh] ${open ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Quick Action</h3>
              <p className="text-base-content/70">
                This sheet only takes up 50% of the viewport height. You can customize the height
                using Tailwind classes like max-h-[50vh], max-h-[75vh], or any custom value.
              </p>
            </div>
            <BottomSheetActions>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            </BottomSheetActions>
          </BottomSheetContent>
        </BottomSheet>
      </div>
    )
  },
}

export const WithCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="p-8">
        <Button className="btn-info" onClick={() => setOpen(true)}>
          Sheet with Close Button
        </Button>
        <BottomSheet open={open}>
          <BottomSheetBackdrop onClick={() => setOpen(false)} />
          <BottomSheetContent className={open ? 'translate-y-0' : 'translate-y-full'}>
            <div className="relative p-6">
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg mb-4 pr-8">Sheet with Close Button</h3>
              <p className="text-base-content/70">
                Click the X button in the top-right corner to close this sheet, or click the
                backdrop.
              </p>
            </div>
            <BottomSheetActions>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => setOpen(false)}
              >
                Confirm
              </button>
            </BottomSheetActions>
          </BottomSheetContent>
        </BottomSheet>
      </div>
    )
  },
}

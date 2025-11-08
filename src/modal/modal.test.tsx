import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Modal, ModalAction, ModalBackdrop, ModalBox } from './modal'

describe('Modal', () => {
  it('renders children correctly', () => {
    render(
      <Modal open>
        <ModalBox>Modal content</ModalBox>
      </Modal>,
    )
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('applies modal-open class when open prop is true', () => {
    render(
      <Modal open>
        <ModalBox>Open modal</ModalBox>
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveClass('modal-open')
  })

  it('applies placement classes', () => {
    render(
      <Modal open placement="top">
        <ModalBox>Top modal</ModalBox>
      </Modal>,
    )
    expect(screen.getByRole('dialog')).toHaveClass('modal-top')
  })

  it('merges custom className with component classes', () => {
    render(
      <Modal open className="custom-class">
        <ModalBox>Custom</ModalBox>
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveClass('modal')
    expect(dialog).toHaveClass('custom-class')
  })
})

describe('ModalBox', () => {
  it('renders children correctly', () => {
    render(<ModalBox>Box content</ModalBox>)
    expect(screen.getByText('Box content')).toBeInTheDocument()
  })

  it('applies modal-box class', () => {
    render(<ModalBox>Box</ModalBox>)
    expect(screen.getByText('Box')).toHaveClass('modal-box')
  })

  it('merges custom className', () => {
    render(<ModalBox className="custom">Box</ModalBox>)
    const box = screen.getByText('Box')
    expect(box).toHaveClass('modal-box')
    expect(box).toHaveClass('custom')
  })
})

describe('ModalAction', () => {
  it('renders children correctly', () => {
    render(<ModalAction>Action buttons</ModalAction>)
    expect(screen.getByText('Action buttons')).toBeInTheDocument()
  })

  it('applies modal-action class', () => {
    render(<ModalAction>Actions</ModalAction>)
    expect(screen.getByText('Actions')).toHaveClass('modal-action')
  })
})

describe('ModalBackdrop', () => {
  it('renders as a form with dialog method', () => {
    render(<ModalBackdrop />)
    const form = document.querySelector('form')
    expect(form).toBeInTheDocument()
    expect(form).toHaveAttribute('method', 'dialog')
  })

  it('applies modal-backdrop class', () => {
    render(<ModalBackdrop data-testid="backdrop" />)
    expect(screen.getByTestId('backdrop')).toHaveClass('modal-backdrop')
  })
})

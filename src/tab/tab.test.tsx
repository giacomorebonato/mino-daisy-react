import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Tab, TabContent, Tabs } from './tab'

describe('Tabs', () => {
  it('renders children correctly', () => {
    render(
      <Tabs>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </Tabs>,
    )
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
  })

  it('applies tablist role', () => {
    render(
      <Tabs>
        <Tab>Tab</Tab>
      </Tabs>,
    )
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('applies style classes', () => {
    render(
      <Tabs tabsStyle="boxed">
        <Tab>Tab</Tab>
      </Tabs>,
    )
    expect(screen.getByRole('tablist')).toHaveClass('tabs-boxed')
  })

  it('applies placement classes', () => {
    render(
      <Tabs placement="bottom">
        <Tab>Tab</Tab>
      </Tabs>,
    )
    expect(screen.getByRole('tablist')).toHaveClass('tabs-bottom')
  })

  it('merges custom className', () => {
    render(
      <Tabs className="custom">
        <Tab>Tab</Tab>
      </Tabs>,
    )
    const tabs = screen.getByRole('tablist')
    expect(tabs).toHaveClass('tabs')
    expect(tabs).toHaveClass('custom')
  })
})

describe('Tab', () => {
  it('renders children correctly', () => {
    render(<Tab>My Tab</Tab>)
    expect(screen.getByText('My Tab')).toBeInTheDocument()
  })

  it('applies tab role', () => {
    render(<Tab>Tab</Tab>)
    expect(screen.getByRole('tab')).toBeInTheDocument()
  })

  it('applies active class when active prop is true', () => {
    render(<Tab active>Active Tab</Tab>)
    expect(screen.getByRole('tab')).toHaveClass('tab-active')
  })

  it('applies disabled class when disabled prop is true', () => {
    render(<Tab disabled>Disabled Tab</Tab>)
    const tab = screen.getByRole('tab')
    expect(tab).toHaveClass('tab-disabled')
    expect(tab).toBeDisabled()
  })

  it('sets aria-selected when active', () => {
    render(<Tab active>Active</Tab>)
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'true')
  })

  it('merges custom className', () => {
    render(<Tab className="custom">Tab</Tab>)
    const tab = screen.getByRole('tab')
    expect(tab).toHaveClass('tab')
    expect(tab).toHaveClass('custom')
  })
})

describe('TabContent', () => {
  it('renders children correctly', () => {
    render(<TabContent>Content here</TabContent>)
    expect(screen.getByText('Content here')).toBeInTheDocument()
  })

  it('applies tab-content class', () => {
    render(<TabContent>Content</TabContent>)
    expect(screen.getByText('Content')).toHaveClass('tab-content')
  })

  it('merges custom className', () => {
    render(<TabContent className="custom">Content</TabContent>)
    const content = screen.getByText('Content')
    expect(content).toHaveClass('tab-content')
    expect(content).toHaveClass('custom')
  })
})

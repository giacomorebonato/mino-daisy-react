import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionRadio,
  AccordionTitle,
} from './accordion'

const meta = {
  title: 'Interactive & Feedback/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Accordion>
        <AccordionItem className="bg-base-200">
          <AccordionRadio name="my-accordion" defaultChecked />
          <AccordionTitle>Section 1</AccordionTitle>
          <AccordionContent>
            <p>Content for section 1. Only one section can be open at a time.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-base-200">
          <AccordionRadio name="my-accordion" />
          <AccordionTitle>Section 2</AccordionTitle>
          <AccordionContent>
            <p>Content for section 2. Selecting this closes other sections.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-base-200">
          <AccordionRadio name="my-accordion" />
          <AccordionTitle>Section 3</AccordionTitle>
          <AccordionContent>
            <p>Content for section 3. Radio buttons ensure single-open behavior.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <div className="w-96">
      <Accordion>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="arrow-accordion" defaultChecked />
          <AccordionTitle>What is an accordion?</AccordionTitle>
          <AccordionContent>
            <p>
              An accordion is a component that shows and hides content, but only
              one item can be open at a time.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="arrow-accordion" />
          <AccordionTitle>How does it work?</AccordionTitle>
          <AccordionContent>
            <p>
              It uses radio buttons with the same name attribute to ensure only
              one section is expanded.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="arrow-accordion" />
          <AccordionTitle>When should I use it?</AccordionTitle>
          <AccordionContent>
            <p>
              Use it when you want to display multiple sections of content but
              save space by allowing only one to be visible at a time.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const WithPlus: Story = {
  render: () => (
    <div className="w-96">
      <Accordion>
        <AccordionItem icon="plus" className="bg-base-200">
          <AccordionRadio name="plus-accordion" defaultChecked />
          <AccordionTitle>Item 1</AccordionTitle>
          <AccordionContent>
            <p>This accordion uses plus icons instead of arrows.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="plus" className="bg-base-200">
          <AccordionRadio name="plus-accordion" />
          <AccordionTitle>Item 2</AccordionTitle>
          <AccordionContent>
            <p>The plus icon changes to a minus when expanded.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="plus" className="bg-base-200">
          <AccordionRadio name="plus-accordion" />
          <AccordionTitle>Item 3</AccordionTitle>
          <AccordionContent>
            <p>This provides a different visual style for the accordion.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Styled: Story = {
  render: () => (
    <div className="w-96">
      <Accordion>
        <AccordionItem
          icon="arrow"
          className="border border-base-300 bg-base-100 rounded-box"
        >
          <AccordionRadio name="styled-accordion" defaultChecked />
          <AccordionTitle className="text-lg font-semibold">
            Premium Plan
          </AccordionTitle>
          <AccordionContent>
            <p className="text-sm">
              Includes all features with unlimited access. Perfect for power users.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Unlimited projects</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          icon="arrow"
          className="border border-base-300 bg-base-100 rounded-box mt-2"
        >
          <AccordionRadio name="styled-accordion" />
          <AccordionTitle className="text-lg font-semibold">
            Standard Plan
          </AccordionTitle>
          <AccordionContent>
            <p className="text-sm">
              Great for individuals and small teams with essential features.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Up to 10 projects</li>
              <li>Email support</li>
              <li>Basic analytics</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          icon="arrow"
          className="border border-base-300 bg-base-100 rounded-box mt-2"
        >
          <AccordionRadio name="styled-accordion" />
          <AccordionTitle className="text-lg font-semibold">
            Free Plan
          </AccordionTitle>
          <AccordionContent>
            <p className="text-sm">
              Get started with our free plan. Perfect for trying out the service.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Up to 3 projects</li>
              <li>Community support</li>
              <li>Limited features</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const FAQ: Story = {
  render: () => (
    <div className="w-96">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="faq-accordion" />
          <AccordionTitle>What is DaisyUI?</AccordionTitle>
          <AccordionContent>
            <p>
              DaisyUI is a component library for Tailwind CSS that provides
              beautiful, pre-designed components.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="faq-accordion" />
          <AccordionTitle>How do I install it?</AccordionTitle>
          <AccordionContent>
            <p>
              Install DaisyUI via npm or yarn, then add it to your Tailwind CSS
              configuration file.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="faq-accordion" />
          <AccordionTitle>Is it free?</AccordionTitle>
          <AccordionContent>
            <p>Yes, DaisyUI is completely free and open source under MIT license.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem icon="arrow" className="bg-base-200">
          <AccordionRadio name="faq-accordion" />
          <AccordionTitle>Can I customize the components?</AccordionTitle>
          <AccordionContent>
            <p>
              Yes, all components can be customized using Tailwind CSS classes or
              by modifying the theme configuration.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

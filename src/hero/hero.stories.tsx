import type { Meta, StoryObj } from '@storybook/react'
import { Hero, HeroContent, HeroOverlay } from './hero'

const meta = {
  title: 'Utilities & Special/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Hero className="bg-base-200 min-h-screen">
      <HeroContent className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Hero className="bg-base-200 min-h-screen">
      <HeroContent className="flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const WithImageReversed: Story = {
  render: () => (
    <Hero className="bg-base-200 min-h-screen">
      <HeroContent className="flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const WithBackgroundImage: Story = {
  render: () => (
    <Hero
      className="min-h-screen"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}
    >
      <HeroOverlay />
      <HeroContent className="text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Hero className="bg-base-200 min-h-screen">
      <HeroContent className="flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#forgot" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const Simple: Story = {
  render: () => (
    <Hero className="bg-base-200">
      <HeroContent className="text-center py-20">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Hackathon!</h1>
          <p className="py-6">
            Your amazing idea deserves an amazing demo. Built with daisyUI in minutes, not hours.
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const WithGradient: Story = {
  render: () => (
    <Hero className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <HeroContent className="text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Beautiful Gradient</h1>
          <p className="mb-5 text-white">
            Create stunning hero sections with gradient backgrounds and clean typography.
          </p>
          <button type="button" className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </HeroContent>
    </Hero>
  ),
}

export const WithCTA: Story = {
  render: () => (
    <Hero className="bg-base-200 min-h-[60vh]">
      <HeroContent className="text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">Start Your Journey Today</h1>
          <p className="py-6">
            Join thousands of users who have already discovered the power of our platform. Get
            started in just a few clicks.
          </p>
          <div className="flex gap-4 justify-center">
            <button type="button" className="btn btn-primary">
              Sign Up Free
            </button>
            <button type="button" className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>
      </HeroContent>
    </Hero>
  ),
}

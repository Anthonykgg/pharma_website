import ReactPlayer from 'react-player'
import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
    {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
    },
    {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
    },
    {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
    },
    {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
    },
    {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
  <>
      <Popover class="relative bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
                <span class="sr-only">Your Company</span>
                <img
                class="h-8 w-auto sm:h-10"
                src="/logo_amcp.svg"
                alt=""
                />
            </a>
            </div>
            <div class="-my-2 -mr-2 md:hidden">
            <Popover.Button class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </div>
            <Popover.Group as="nav" class="hidden space-x-10 md:flex">
            <Popover class="relative">
                {({ open }) => (
                <>
                    <Popover.Button
                    class={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                    >
                    <span>Solutions</span>
                    <ChevronDownIcon
                        class={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                    />
                    </Popover.Button>

                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                    <Popover.Panel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                                <item.icon class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">{item.name}</p>
                                <p class="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                            </a>
                            ))}
                        </div>
                        <div class="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                            <div key={item.name} class="flow-root">
                                <a
                                href={item.href}
                                class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                <item.icon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span class="ml-3">{item.name}</span>
                                </a>
                            </div>
                            ))}
                        </div>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </>
                )}
            </Popover>

            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
            </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
            </a>

            <Popover class="relative">
                {({ open }) => (
                <>
                    <Popover.Button
                    class={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                    >
                    <span>More</span>
                    <ChevronDownIcon
                        class={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                    />
                    </Popover.Button>

                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                    <Popover.Panel class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                                <item.icon class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">{item.name}</p>
                                <p class="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                            </a>
                            ))}
                        </div>
                        <div class="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                            <h3 class="text-base font-medium text-gray-500">Recent Posts</h3>
                            <ul role="list" class="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                <li key={post.id} class="truncate text-base">
                                    <a href={post.href} class="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            </div>
                            <div class="mt-5 text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                            </div>
                        </div>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </>
                )}
            </Popover>
            </Popover.Group>
        </div>
        </div>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
        <Popover.Panel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
                <div class="flex items-center justify-between">
                <div>
                    <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    />
                </div>
                <div class="-mr-2">
                    <Popover.Button class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
                <div class="mt-6">
                <nav class="grid gap-y-8">
                    {solutions.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                        <item.icon class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span class="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                    ))}
                </nav>
                </div>
            </div>
            <div class="space-y-6 py-6 px-5">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                </a>
                {resources.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                    {item.name}
                    </a>
                ))}
                </div>
                <div>
                <a
                    href="#"
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                    Sign up
                </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" class="text-indigo-600 hover:text-indigo-500">
                    Sign in
                    </a>
                </p>
                </div>
            </div>
            </div>
        </Popover.Panel>
        </Transition>
    </Popover>
    <div class="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center items-center justify-center lg:pt-32">
      <div>
        <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Welcome to the 
          <span class="text-emerald-300"> WesternU AMCP </span> 
          Health Helper!
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          The AMCP Health Helper website was established in 2020 by the Research and Education Committee of the WesternU AMCP Student Chapter. Our goal is to empower patients to take control of their health by providing patients resources ranging from flyers about common diseases to links to useful healthcare websites.
        </p>
      </div>
      <div class="w-[90%] sm:w-[50%] my-10"> 
        <ReactPlayer url='https://www.youtube.com/watch?v=SleKuPjxZjE' width="auto" />
      </div>
      
    </div>
    <div class="flex flex-col md:flex-row justify-evenly py-20 bg-gradient-to-r from-emerald-300 to-cyan-500">
        <div class="max-w-[50%] text-white">
            <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
            WesternU AMCP Student Chapter 
            </h2>
            <p class="mt-4 text-lg tracking-tight text-white">
            Make sure to visit <a target="_blank" href="http://www.amcpwesternu.weebly.com">amcpwesternu.weebly.com</a> for more information about what our chapter is about. 
            </p>
            <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" href="http://www.amcpwesternu.weebly.com">
                Visit our website
            </a>
        </div>
        <div class="max-w-[45%]">
            <img src="/amcp_website.png" />
        </div>
    </div>
    <section id="get-started-today" class="relative overflow-hidden bg-white py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div class="mx-auto max-w-lg text-center">
                <h2 class="font-display text-3xl tracking-tight text-black sm:text-4xl">
                    Get started today
                </h2>
                <p class="mt-4 text-lg tracking-tight text-black">
                    It’s time to take control of your health. You can contact us with any inquiries or to schedule a vaccine.
                </p>
                <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-300 text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" href="/register">
                    Contact Us
                </a>
            </div>
        </div>
    </section>
    <div class="flex flex-col items-center border-t border-slate-400/10 sm:justify-between mb-12">
        <div class="flex flex-row my-12 gap-x-6">
            <a target="_blank" class="group" aria-label="WesternU on Facebook" href="https://www.facebook.com/SYFWesternU">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>
            </a>
            <a target="_blank" class="group" aria-label="WesternU on Instagram" href="https://www.instagram.com/syfwesternu/">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>
            </a>
        </div>
        <div>
            <p class="text-sm text-slate-500 sm:mt-0">© 2023 by Westernu AMCP 2020 Last updated February 2021.</p>
        </div>
    </div>
    </>
  )
}

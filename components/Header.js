import { Fragment } from "react";
import Image from "next/image";

import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  ArrowPathIcon,
  Bars3Icon,
  BeakerIcon,
  BookmarkSquareIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  ClipboardDocumentIcon,
  CursorArrowRaysIcon,
  FlagIcon,
  HeartIcon,
  InformationCircleIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  TicketIcon,
  WalletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const covidVaccinesEntries = [
  {
    name: "Information",
    href: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html",
    target: "_blank",
    icon: InformationCircleIcon,
  },
  {
    name: "When can I get the vaccine?",
    href: "https://myturn.ca.gov/",
    target: "_blank",
    icon: BeakerIcon,
  },
  {
    name: "Updates on Covid-19",
    href: "https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19",
    target: "_blank",
    icon: ArrowPathIcon,
  },
  {
    name: "Where to test for Covid-19",
    href: "https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html#ca",
    target: "_blank",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Infographics for Pharmacies",
    href: "#",
    icon: ClipboardDocumentIcon,
  },
];
const diseaseStatesEntries = [
  {
    name: "disease",
    href: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html",
    target: "_blank",
    icon: InformationCircleIcon,
  },
  {
    name: "When can I get the vaccine?",
    href: "https://myturn.ca.gov/",
    target: "_blank",
    icon: BeakerIcon,
  },
  {
    name: "Updates on Covid-19",
    href: "https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19",
    target: "_blank",
    icon: ArrowPathIcon,
  },
  {
    name: "Where to test for Covid-19",
    href: "https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html#ca",
    target: "_blank",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Infographics for Pharmacies",
    href: "#",
    icon: ClipboardDocumentIcon,
  },
];
const medicationEntries = [
  {
    name: "medication",
    href: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html",
    target: "_blank",
    icon: InformationCircleIcon,
  },
  {
    name: "When can I get the vaccine?",
    href: "https://myturn.ca.gov/",
    target: "_blank",
    icon: BeakerIcon,
  },
  {
    name: "Updates on Covid-19",
    href: "https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19",
    target: "_blank",
    icon: ArrowPathIcon,
  },
  {
    name: "Where to test for Covid-19",
    href: "https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html#ca",
    target: "_blank",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Infographics for Pharmacies",
    href: "#",
    icon: ClipboardDocumentIcon,
  },
];
const resourcesEntries = [
  {
    name: "Get Coupon",
    description:
      "Save money on your prescriptions.",
    href: "https://www.goodrx.com/",
    target: "_blank",
    icon: TicketIcon,
  },
  {
    name: "Get your Health Plan",
    description:
      "Find the best health plan for you and your family.",
    href: "https://finder.healthcare.gov/",
    target: "_blank",
    icon: HeartIcon,
  },
  {
    name: "Interprofessional Education",
    description: "Find out how medications are closely tied to other healthcare professionals.",
    href: "#",
    icon: AcademicCapIcon,
  },
  {
    name: "References",
    description:
      "Source citations.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Contact ",
    description:
      "Contact us with any inquiries.",
    href: "#",
    icon: ChatBubbleOvalLeftIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">WesternU AMCP Health Helper</span>
              <Image
                src="/logo_amcp.svg"
                alt="Logo AMCP"
                className="h-8 w-auto sm:h-10"
                width="110"
                height="40"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-6 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-sm font-small hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                    )}
                  >
                    <span>COVID-19 Vaccine</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {covidVaccinesEntries.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target={item.target}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-sm font-small text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm font-small text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-sm font-small hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                    )}
                  >
                    <span>Disease States</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {diseaseStatesEntries.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target={item.target}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-sm font-small text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm font-small text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-sm font-small hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                    )}
                  >
                    <span>Medications</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {medicationEntries.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target={item.target}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-sm font-small text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm font-small text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-sm font-small hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                    )}
                  >
                    <span>More resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resourcesEntries.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target={item.target}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-sm font-small text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm font-small text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
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
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/logo_amcp.svg"
                    alt="Logo AMCP"
                    className="h-8 w-auto"
                    width="110"
                    height="40"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {covidVaccinesEntries.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-sm font-small text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-sm font-small text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-sm font-small text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resourcesEntries.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-small text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-400 px-4 py-2 text-sm font-small text-white shadow-sm hover:bg-emerald-500"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

import { Fragment } from "react";
import "tw-elements";
import Image from "next/image";
import Link from "next/link";

import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  Bars3Icon,
  BeakerIcon,
  BookmarkSquareIcon,
  BuildingOffice2Icon,
  ChatBubbleOvalLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  HeartIcon,
  InformationCircleIcon,
  TicketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const covidVaccinesEntries = [
  {
    name: "Information",
    href: "/information",
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
    name: "Common cold vs Flu vs Covid-19",
    href: "/coldVflu",
    icon: ChevronRightIcon,
  },
  {
    name: "High Blood Pressure",
    href: "/highBlood",
    icon: ChevronRightIcon,
  },
  {
    name: "Diabetes",
    href: "/diabetes",
    icon: ChevronRightIcon,
  },
  {
    name: "High Cholesterol",
    href: "/highCho",
    icon: ChevronRightIcon,
  },
  {
    name: "Asthma",
    href: "/asthma",
    icon: ChevronRightIcon,
  },
  {
    name: "COPD",
    href: "/copd",
    icon: ChevronRightIcon,
  },
  {
    name: "Pneumonia",
    href: "/pneumonia",
    icon: ChevronRightIcon,
  },
  {
    name: "Heart Failure",
    href: "/heartFailure",
    icon: ChevronRightIcon,
  },
  {
    name: "Osteoporosis",
    href: "/osteoporosis",
    icon: ChevronRightIcon,
  },
];
const medicationEntries = [
  {
    name: "Medication Adherence",
    href: "/medadh",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Safe Drug Storage",
    href: "/safedrug",
    icon: ArchiveBoxIcon,
  },
  {
    name: "Antimicrobial Resistance",
    href: "#",
    icon: CogIcon,
  },
];
const resourcesEntries = [
  {
    name: "Get Coupon",
    description: "Save money on your prescriptions.",
    href: "https://www.goodrx.com/",
    target: "_blank",
    icon: TicketIcon,
  },
  {
    name: "Get your Health Plan",
    description: "Find the best health plan for you and your family.",
    href: "https://finder.healthcare.gov/",
    target: "_blank",
    icon: HeartIcon,
  },
  {
    name: "Interprofessional Education",
    description:
      "Find out how medications are closely tied to other healthcare professionals.",
    href: "/education",
    icon: AcademicCapIcon,
  },
  {
    name: "References",
    description: "Source citations.",
    href: "/references",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Contact ",
    description: "Contact us with any inquiries.",
    href: "/contact",
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
            <Link href="/">
              <span className="sr-only">WesternU AMCP Health Helper</span>
              <a href="https://pharma-website-psi.vercel.app/" rel="noreferrer">
                <Image
                  src="/logo_amcp.svg"
                  alt="Logo AMCP"
                  className="h-8 w-auto sm:h-10"
                  width="110"
                  height="40"
                />
              </a>
            </Link>
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
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item bg-white border border-gray-200">
                      <h2 class="accordion-header mb-0" id="headingOne">
                        <button
                          class="
                            accordion-button
                            collapsed
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-500 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Covid-19 Vaccine
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body py-4 px-5 text-slate-900">
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
                      </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                      <h2 class="accordion-header mb-0" id="headingTwo">
                        <button
                          class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-500 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Disease States
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body py-4 px-5">
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
                      </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                      <h2 class="accordion-header mb-0" id="headingThree">
                        <button
                          class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-500 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Medications
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body py-4 px-5">
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
                      </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                      <h2 class="accordion-header mb-0" id="headingFour">
                        <button
                          class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-500 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          More Resources
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
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
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

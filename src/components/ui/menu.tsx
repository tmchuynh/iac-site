"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Button } from "./button";
import { programsMenu, aboutMenu } from "@/data/data";

export default function MenuBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 m-0 lg:px-8 bg-primary text-primary-foreground"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="IAC Logo"
              src="/images/whiteLogo.png"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button
            type="button"
            variant={"icon"}
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <RiMenu3Fill aria-hidden="true" className="size-6" />
          </Button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold">
            Home
          </a>
          <a href="/register" className="text-sm/6 font-semibold">
            Register
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold">
              Our Programs
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {programsMenu.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-card hover:text-card-foreground"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon aria-hidden="true" className="size-6" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="/staff" className="text-sm/6 font-semibold">
            The Staff
          </a>
          <a href="/contact" className="text-sm/6 font-semibold">
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-my-8 -mx-12">
              <span className="sr-only">Your Company</span>
              <img
                alt="IAC Logo"
                src="/images/logo.png"
                className="h-36 w-auto"
              />
            </a>
            <Button
              type="button"
              variant={"icon"}
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 group"
            >
              <span className="sr-only">Close menu</span>
              <span className="inline-block absolute top-8 right-6 transition-transform duration-300 ease-in-out group-hover:rotate-90">
                <IoClose />
              </span>
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/register"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Register
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold hover:bg-gray-50">
                    Our Programs
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180 transition-transform duration-1000 ease-in-out"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...programsMenu].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/staff"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  The Staff
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

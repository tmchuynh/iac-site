"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavFooter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="w-full h-full py-7">
      <div className="w-full px-8 mx-auto">
        <div className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex mx-auto md:mx-0 lg:col-span-2">
            <a href="/" className="">
              <span className="sr-only">
                International Activities Club - Bringing Enrichment to Your
                School
              </span>
              {theme === "dark" ? (
                <img
                  alt="IAC Logo"
                  src="/images/whiteLogo.png"
                  className="h-16 w-auto"
                />
              ) : (
                <img
                  alt="IAC Logo"
                  src="/images/tShirtLogo.png"
                  className="h-28 w-auto"
                />
              )}
            </a>
          </div>

          <div className="flex justify-around">
            <div>
              <p className="mb-1 text-base font-semibold ">Product</p>
              <ul>
                <li>
                  <a href="#" className="text-sm">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-base font-semibold">Company</p>
              <ul>
                <li>
                  <a href="#" className="text-sm">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-base font-semibold">Resource</p>
              <ul>
                <li>
                  <a href="#" className="text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Help center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-border md:flex-row md:justify-between">
          <p className="mb-4 text-sm text-center md:mb-0">
            Copyright © 2024
            <a href="https://material-tailwind.com/"> Material Tailwind</a>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

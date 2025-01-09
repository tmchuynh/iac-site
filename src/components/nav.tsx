import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav: React.FC = () => {
  return (
    <nav className="shadow-md">
      <div className="container-fluid mx-auto flex justify-between gap-4 p-2">
        <a className="flex items-center" href='/'>
          <img
            src="/images/t-Shirt-Design.png"
            alt="International Academy of Coding"
            className="h-20"
          />
        </a>
        <button
          className="lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded="false"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-6 w-6"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div
          id="navbarNav"
          className="hidden lg:flex flex-grow items-center justify-between"
        >
          <ul className="flex flex-col lg:flex-row gap-4">
            <li>
              <Link href="/index.html" className={buttonVariants( { variant: "link" } )}>
                HOME
              </Link>
            </li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                OUR PROGRAMS
                <MdKeyboardArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="shadow-lg w-40">
                <DropdownMenuItem>
                  <Link href="/services.html">
                    INFORMATION
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/photos.html">
                    PHOTOS
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/schools.html">
                    FOR SCHOOLS
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <li>
              <Link href="/staff.html" className={buttonVariants( { variant: "link" } )}>
                OUR STAFF
              </Link>
            </li>
            <li>
              <Link href="/sign-up.html" className={buttonVariants( { variant: "link" } )}>
                SIGN UP
              </Link>
            </li>
            <li>
              <Link href="/contact.html" className={buttonVariants( { variant: "link" } )}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

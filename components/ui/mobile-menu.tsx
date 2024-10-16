"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu({
  handleShowModal,
}: {
  handleShowModal: Function;
}) {
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [productsDropdownOpen, setProductsDropdownOpen] =
    useState<boolean>(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] =
    useState<boolean>(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] =
    useState<boolean>(false);

  const productsDropdown = useRef<HTMLDivElement>(null);
  const companyDropdown = useRef<HTMLDivElement>(null);
  const resourcesDropdown = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="min-[976px]:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute bg-gray-900 top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: "100vh", opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="flex grow justify-end flex-wrap items-center">
          <li className="bg-gray-900 w-full py-1">
            {" "}
            <Link
              href="https://datainceptor.upft.co/auth/login"
              onClick={() => setMobileNavOpen(false)}
              className="header-menu-btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              Log In
            </Link>
          </li>
          <li className="bg-gray-900 w-full pt-3 pb-8">
            <Link
              href="https://datainceptor.upft.co/auth/signup"
              target="_blank"
              className="btn-sm shadow-lg shadow-indigo-600/100 w-full rounded border-white text-white bg-purple-600 hover:bg-purple-700"
            >
              Sign Up Free
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

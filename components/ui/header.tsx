"use client";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import logoImg from "@/public/imgs/logos/upft-logo.png";
import overviewIcon from "@/public/imgs/logos/overview.jpeg";
import dataforgerIcon from "@/public/imgs/logos/data.jpeg";
import nimbusIcon from "@/public/imgs/logos/env.jpeg";
import aboutIcon from "@/public/imgs/logos/about.jpeg";
import whyIcon from "@/public/imgs/logos/why.jpeg";
import howIcon from "@/public/imgs/logos/how.jpeg";
import blogIcon from "@/public/imgs/logos/blog.jpeg";
import docIcon from "@/public/imgs/logos/doc.jpeg";
import hkImg from "@/public/imgs/logos/upft-logo.png";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [productsDropdownOpen, setProductsDropdownOpen] =
    useState<boolean>(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] =
    useState<boolean>(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] =
    useState<boolean>(false);

  const productsDropdown = useRef<HTMLDivElement>(null);
  const resourcesDropdown = useRef<HTMLDivElement>(null);
  const companyDropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      setProductsDropdownOpen(false);
      setResourcesDropdownOpen(false);
      setCompanyDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <header className="header-bar sticky top-0 w-full bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="UPFT">
              <Image
                className="rounded-full"
                src={logoImg}
                width={150}
                alt="UPFT"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden min-[976px]:flex min-[976px]:grow">
            {/* Desktop login and signup links */}
            <ul className="flex grow flex-wrap items-center justify-end ml-3">
              <li
                onClick={(e) => {
                  e.preventDefault();
                  setProductsDropdownOpen(false);
                  setResourcesDropdownOpen(false);
                  setCompanyDropdownOpen(true);
                }}
              >
                <button className="header-menu-btn text-white-600 font-bold hover:font-large hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Company
                  {companyDropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 01-1.06 1.06L12 9.31 5.03 16.28a.75.75 0 01-1.06-1.06l7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <nav
                  ref={companyDropdown}
                  className="absolute top-20 w-3/4 left-[13.33%] block overflow-hidden transition-all duration-300 ease-in-out"
                  style={
                    companyDropdownOpen
                      ? {
                          maxHeight: "600px",
                          opacity: 1,
                        }
                      : { maxHeight: 0, opacity: 0.8 }
                  }
                >
                  <ul className="grid grid-cols-3 bg-gray-900 px-4 py-8 divide-x">
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/company"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                        onClick={() => setCompanyDropdownOpen(false)}
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={aboutIcon}
                            width={120}
                            alt="about"
                          />
                        </div>
                        <div>About Us</div>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/why-upft"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                        onClick={() => setCompanyDropdownOpen(false)}
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={whyIcon}
                            width={120}
                            alt="why us"
                          />
                        </div>
                        <div>Why UPFT</div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  setProductsDropdownOpen(true);
                  setResourcesDropdownOpen(false);
                  setCompanyDropdownOpen(false);
                }}
              >
                <button className="header-menu-btn text-white-600 font-bold hover:font-large hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Products
                  {productsDropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 01-1.06 1.06L12 9.31 5.03 16.28a.75.75 0 01-1.06-1.06l7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <nav
                  ref={productsDropdown}
                  className="absolute top-20 w-3/4 left-[13.33%] block overflow-hidden transition-all duration-300 ease-in-out"
                  style={
                    productsDropdownOpen
                      ? {
                          maxHeight: "600px",
                          opacity: 1,
                        }
                      : { maxHeight: 0, opacity: 0.8 }
                  }
                >
                  <ul className="grid grid-cols-3 bg-gray-900 px-4 py-8 divide-x">
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/products/overview"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={overviewIcon}
                            width={120}
                            alt="overview"
                          />
                        </div>
                        <div className="text-center text-2xl">Overview</div>
                        <div className="text-center text-sm">
                          View our products
                        </div>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/products/dataforger"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={dataforgerIcon}
                            width={120}
                            alt="dataforger"
                          />
                        </div>
                        <div className="text-center text-2xl">DataForger</div>
                        <div className="text-center text-sm">
                          Test Data Seeding Made Easy
                        </div>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/products/nimbus"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={nimbusIcon}
                            width={120}
                            alt="nimbus"
                          />
                        </div>
                        <div className="text-center text-2xl">Nimbus</div>
                        <div className="text-center text-sm">
                          Ephemeral Environment
                        </div>
                      </Link>
                    </li>
                    {/* <li className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-purple-800 m-2"
                      >
                        <path d="M16.5 7.5h-9v9h9v-9z" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <Link
                        href="/products/loadlens"
                        className="flex font-medium w-full header-menu-btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        LoadLens
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </li>
              <li>
                {" "}
                <Link
                  href="/pricing"
                  className="header-menu-btn text-white-600 font-bold hover:font-large hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/solutions"
                  className="header-menu-btn text-white-600 font-bold hover:font-large hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Solutions
                </Link>
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  setProductsDropdownOpen(false);
                  setResourcesDropdownOpen(true);
                  setCompanyDropdownOpen(false);
                }}
              >
                <button className="header-menu-btn text-white-600 font-bold hover:font-large hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Resources
                  {resourcesDropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 01-1.06 1.06L12 9.31 5.03 16.28a.75.75 0 01-1.06-1.06l7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <nav
                  ref={resourcesDropdown}
                  className="absolute top-20 w-3/4 left-[13.33%] block overflow-hidden transition-all duration-300 ease-in-out"
                  style={
                    resourcesDropdownOpen
                      ? {
                          maxHeight: "300px",
                          opacity: 1,
                        }
                      : { maxHeight: 0, opacity: 0.8 }
                  }
                >
                  <ul className="grid grid-cols-3 bg-gray-900 px-4 py-8 divide-x">
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/blog"
                        className="flex flex-col  text-center text-2xl font-medium w-full header-menu-btn py-2"
                        onClick={() => setResourcesDropdownOpen(false)}
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={blogIcon}
                            width={120}
                            alt="blog"
                          />
                        </div>
                        <div>Blog</div>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="/how-it-works"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={howIcon}
                            width={120}
                            alt="how it works"
                          />
                        </div>
                        <div>How it works</div>
                      </Link>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Link
                        href="https://learn.hakkaren.co"
                        className="flex flex-col text-center text-2xl font-medium w-full header-menu-btn py-2"
                      >
                        <div className="mx-auto">
                          <Image
                            className="rounded-full p-4"
                            src={docIcon}
                            width={120}
                            alt="doc"
                          />
                        </div>
                        <div>Documentations</div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </li>
            </ul>
          </nav>
          <nav className="hidden min-[976px]:flex xl:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://app.hakkaren.co/auth/login"
                  className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Login
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.hakkaren.co/auth/signup"
                  className="btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 ml-3"
                >
                  Sign up
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

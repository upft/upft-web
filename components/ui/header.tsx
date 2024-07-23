"use client";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import logoImg from "@/public/imgs/logos/purelogo.png";
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
import JoinBetaPopup from "../misc/join-beta-popup";

export default function Header() {
  const [productsDropdownOpen, setProductsDropdownOpen] =
    useState<boolean>(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] =
    useState<boolean>(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] =
    useState<boolean>(false);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

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
              <Image className="" src={logoImg} width={50} alt="UPFT" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden min-[976px]:flex xl:grow">
            {/* Desktop login and signup links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <span className="text-3xl font-poetsen">DataInceptor</span>
            </ul>
          </nav>
          <nav className="hidden min-[976px]:flex xl:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://datainceptor.upft.co/auth/login"
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
                  href="https://datainceptor.upft.co/auth/signup"
                  className="btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 ml-3"
                >
                  Sign Up Free
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
          <div className="min-[976px]:hidden">
            {/* Hamburger button */}
            <button className="font-poetsen font-bold text-2xl mx-auto">
              {/* Logo */}
              DataInceptor
            </button>
          </div>
          <MobileMenu handleShowModal={handleShowModal} />
        </div>
      </div>
      {showModal && <JoinBetaPopup onHide={handleHideModal} />}
    </header>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logimg from "@/public/imgs/logos/upft-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20">
            {/* 1st block */}
            <div className="md:col-span-3 lg:col-span-3 sm:col-span-12">
              <div className="mb-2 font-poetsen font-bold text-2xl">
                {/* Logo */}
                DataInceptor
                {/* <Link href="/" className="inline-block" aria-label="UPFT">
                  <Image className="" src={logimg} width={150} alt="UPFT" />
                </Link> */}
              </div>
              <div className="text-gray-400 text-sm">
                Built with &#10084;&#65039; in Boston
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-9 lg:col-span-9 sm:col-span-12 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-3">
              {/* 2nd block */}
              <div className="text-sm">
                <div className="text-gray-200 font-medium mb-1">Company</div>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* <li className="mb-1">
                    <Link
                      href="/why-upft"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Why UPFT
                    </Link>
                  </li> */}
                  <li className="mb-1">
                    <Link
                      href="https://wellfound.com/company/hakkaren/jobs"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              {/* 3rd block */}

              {/* 4th block */}
              <div className="text-sm">
                <div className="text-gray-200 font-medium mb-1">Resources</div>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Blog
                    </Link>
                  </li>
                  {/* <li className="mb-1">
                    <Link
                      href="/how-it-works"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      How it works
                    </Link>
                  </li> */}
                  <li className="mb-1">
                    <Link
                      href="https://learn.hakkaren.co"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Documentations
                    </Link>
                  </li>
                </ul>
              </div>
              {/* 5th block */}
              <div className="text-sm">
                <div className="text-gray-200 font-medium mb-1">Social</div>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="https://wellfound.com/company/hakkaren"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Wellfound
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://www.linkedin.com/company/hakkaren/about/"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="hidden md:block py-4 mt-4" />
          {/* Bottom area */}
          <div className="mt-4 md:mt-1 md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/terms" className="text-gray-400 text-sm ml-4">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 text-sm ml-4">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="text-gray-400 text-sm ml-4">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <hr className="md:hidden mb-4" />
            <div className="text-center text-gray-400 text-sm mr-4">
              &copy; Unified Platform For Testing, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

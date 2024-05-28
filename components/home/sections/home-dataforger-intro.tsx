import Image from "next/image";
import Link from "next/link";

import codeImg from "@/public/imgs/home/code_main.png";

export default function HomeDataInceptorIntro() {
  return (
    <div className="hero-section relative py-12 my-0 lg:my-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* <div className="hidden w-full lg:flex justify-between items-center py-8 px-8 mb-8">
          <span className="px-6 custom-start-lg-effect text-size-30 py-2">
            Analyzing
          </span>
          <svg
            width="128"
            height="16"
            viewBox="0 0 128 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM1 9H127V7H1V9Z"
              fill="url(#paint0_linear_4_25045)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_25045"
                x1="127"
                y1="8"
                x2="1"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3860D2" />
                <stop offset="1" stopColor="#3860D2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <span className="custom-start-white-effect">
            <span className="px-6 custom-purple rounded-l-full text-size-30 py-2">
              Generating
            </span>
          </span>
          <svg
            width="128"
            height="16"
            viewBox="0 0 128 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM1 9H127V7H1V9Z"
              fill="url(#paint0_linear_4_25046)"
              fillOpacity="0.6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_25046"
                x1="127"
                y1="8"
                x2="1"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#3860D2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span className="custom-start-white-effect">
            <span className="px-6 custom-purple rounded-l-full text-size-30 py-2">
              Seeding
            </span>
          </span>
          <svg
            width="128"
            height="16"
            viewBox="0 0 128 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM1 9H127V7H1V9Z"
              fill="url(#paint0_linear_4_25046)"
              fillOpacity="0.6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_25046"
                x1="127"
                y1="8"
                x2="1"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#3860D2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span className="custom-start-white-effect">
            <span className="px-6 custom-purple rounded-l-full text-size-30 py-2">
              Connecting
            </span>
          </span>
        </div> */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-2">
          <div className="hero-left-content px-8 order-2 lg:order-1">
            <Image
              className="hero-codeImg mb-4"
              src={codeImg}
              alt="code_main"
            />
          </div>
          <div className="hero-right-content text-start px-4 order-1 lg:order-2">
            <h2 className="mb-8">
              <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-effect">
                DataInceptor: Real Fake Data Generator
              </span>
            </h2>

            <p className="mb-2 lg:mb-6">
              Try to seed the test data, but it's tedius work?
            </p>
            <ul className="list-disc pl-8 pr-8">
              <li className="mb-2 lg:mb-6">
                DataInceptor helps you to seed the data instantly.
              </li>
              <li className="mb-2 lg:mb-6">
                No complex configurations or setup.
              </li>
              <li className="mb-2 lg:mb-6">
                No access to production database. We generate the data just
                based on the schema.
              </li>
            </ul>
            <div className="lg:block mt-8">
              <Link href="/products/dataforger">
                <span className="font-bold md-text-2xl text-black bg-white py-2 px-4 rounded">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

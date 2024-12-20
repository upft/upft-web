import Image from "next/image";
import Link from "next/link";
import releaseImg from "@/public/imgs/solutions/releaseDemo.png";
import acceptImg from "@/public/imgs/dataforger/acceptImg.png";
import { useRef, useState } from "react";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-7xl mx-auto relative">
      {/* Illustration behind hero content */}
      {/* Hero content */}
      <div className="relative pt-16 lg:pt-24">
        {/* Section header */}
        <div className="mx-auto text-center bg-[#0f172a] bg-opacity-80">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-2">
            <div className="hero-left-content order-2 lg:order-1 flex items-center justify-center">
              <video ref={videoRef} controls autoPlay muted playsInline>
                <source src="/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="hero-right-content text-start order-1 lg:order-2">
              <h2 className="mb-8">
                <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect custom-end-lg-effect">
                <b className="text-yellow-100">Seed production-like data in a snap</b>, without accessing your prod environment.
                </span>
              </h2>

              <ul className="list-disc pl-8 pr-8 text-xl">
                <li className="mb-2 lg:mb-6">
                  Leave behind the hassle of data seeding scripts
                </li>
                <li className="mb-2 lg:mb-6">
                  Unlimited ephemeral environment for conflict-free testing
                </li>
                <li className="mb-2 lg:mb-6">
                  Easy integration to save time on tedious data seeding
                </li>
              </ul>
              <div className="lg:block mt-8">
                <Link href="http://datainceptor.upft.co/auth/signup">
                  <button
                    className="w-full lg:w-fit btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
                  >
                    <svg
                      className="mr-2"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z"
                        fill="white"
                      />
                    </svg>
                      Try Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

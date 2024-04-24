import Image from "next/image";
import Link from "next/link";

import imageNimbus from "@/public/imgs/home/Image_nimbus.png";

export default function HomeNimbusIntro() {
  return (
    <div className="hero-section relative px-4 py-12 my-0 lg:my-16">
      <div className="max-w-7xl mx-auto px-2">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="hero-left-content px-4 order-1">
            <h2>
              <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">
                Nimbus: Ephemeral Environment
              </span>
            </h2>
            <ul className="list-disc pl-8 lg:pl-8 pr-8">
              <li className="mb-2 lg:mb-6">
                Avoid conflicts with dedicated environments for each team
                member.
              </li>
              <li className="mb-2 lg:mb-6">
                Use it for testing, piloting, or showcasing.
              </li>
              <li className="mb-2 lg:mb-6">
                Avoid conflicts with dedicated environments for each team
                member.
              </li>
            </ul>

            <div className="hidden lg:block w-full mt-8 ">
              <Link href="/products/nimbus">
                <span className="font-bold md-text-2xl text-black bg-white py-2 px-4 rounded">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="hero-right-content px-4 order-2">
            <Image
              src={imageNimbus}
              className="w-full"
              height={552}
              alt="Nimbus Image"
            />
            <div className="block lg:hidden w-full mt-8 ">
              <Link href="/products/nimbus">
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

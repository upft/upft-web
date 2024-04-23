import Link from "next/link";
import Image from "next/image";

import dataforger_svg from "@/public/imgs/home/DataForger.svg";
import nimbus_svg from "@/public/imgs/home/Nimbus.svg";
// import loadlens_svg from "@/public/imgs/home/LoadLens.svg";
import comingSoon from "@/public/imgs/home/comingSoon.png";

export default function HomeProductsCircles() {
  return (
    <div className="hidden md:flex hero-section-1 relative pb-10 mb-pb-16">
      <div className="max-w-5xl mx-auto text-center flex justify-center items-end">
        {/* <Link href="/products/loadlens">
          <div className="duration-500 ease-linear hero-section-btn hero-center-btn mx-8">
            <div className="duration-500 ease-linear loadlens-btn hover-active">
              <Image
                src={comingSoon}
                className="duration-500 ease-linear hero-section-icon"
                alt="LoadLens"
              />
            </div>
          </div>
        </Link> */}
        <Link href="/products/dataforger">
          <div className="duration-500 ease-linear hero-section-btn hero-center-btn mx-8">
            <div className="duration-500 ease-linear dataforger-btn hover-active">
              <Image
                src={dataforger_svg}
                className="duration-500 ease-linear hero-section-icon"
                alt="DataForger"
              />
            </div>
          </div>
        </Link>
        <Link href="/products/nimbus">
          <div className="duration-500 ease-linear hero-section-btn hero-center-btn mx-8">
            <div className="duration-500 ease-linear nimbus-btn hover-active">
              <Image
                src={nimbus_svg}
                className="duration-500 ease-linear hero-section-icon"
                alt="Nimbus"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

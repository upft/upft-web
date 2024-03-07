import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/imgs/logos/Logo.svg";
import comingSoon from "@/public/imgs/home/comingSoon.png";

export default function HomeProductsCircles() {
  return (
    <div className="hidden lg:flex relative">
      <div className="w-full mx-auto flex text-center justify-center">
        <div>
          <div className="text-center text-2xl">Services Platform</div>
          <Link href="">
            <div className="duration-500 ease-linear hero-section-btn hero-center-btn mx-8">
              <div className="duration-500 ease-linear coming-btn hover-active">
                <Image
                  src={comingSoon}
                  className="duration-500 ease-linear hero-section-icon"
                  alt="Services"
                />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="text-center text-2xl">Productivity Platform</div>
          <Link href="https://hakkaren.co/">
            <div className="duration-500 ease-linear hero-section-btn hero-center-btn mx-8">
              <div className="duration-500 ease-linear dataforger-btn hover-active px-4">
                <Image
                  src={logoImg}
                  className="duration-500 ease-linear hero-section-icon"
                  alt="Hakkaren"
                />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="text-center text-2xl">Integration Platform</div>
          <Link href="">
            <div className="duration-500 ease-linear hero-section-btn hero-center-btn mx-8">
              <div className="duration-500 ease-linear coming-btn hover-active">
                <Image
                  src={comingSoon}
                  className="duration-500 ease-linear hero-section-icon"
                  alt="Integration"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

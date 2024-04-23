import Image from "next/image";

import benefit1 from "@/public/imgs/home/Benifit_1.png";
import benefit2 from "@/public/imgs/home/Benifit_2.png";
import benefit3 from "@/public/imgs/home/Benifit_3.png";
import benefit4 from "@/public/imgs/home/Benifit_4.png";
import Link from "next/link";

export default function HomeBenefitsOverview() {
  return (
    <div className="hero-section relative py-12 my-0 lg:my-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="hero-left-content">
            <h2 className="text-white">
              <span className="custom-start-lg-effect pl-4 lg:pl-12">
                Benefits
              </span>
            </h2>
          </div>
          <div className="hidden lg:block hero-right-content">
            <p className="mb-6 text-size-30">
              Developing safe and beneficial AI requires people from a wide
              range of disciplines.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 my-12">
          <div className="hero-grid-item">
            <Image src={benefit1} alt="team" className="mb-4 w-full" />
            <h3 className="mb-2 font-extrabold">Collaboration</h3>
            <p className="hero-grid-text">
              Shared platform for streamlined testing across departments
            </p>
          </div>
          <div className="hero-grid-item">
            <Image src={benefit2} alt="increased" className="mb-4 w-full" />
            <h3 className="mb-2 font-extrabold">Efficiency</h3>
            <p className="hero-grid-text">
              Simplified data generation, environment provisioning, and load
              testing.
            </p>
          </div>
          <div className="hero-grid-item">
            <Image src={benefit3} alt="Improved" className="mb-4 w-full" />
            <h3 className="mb-2 font-extrabold">Accuracy</h3>
            <p className="hero-grid-text">
              Realistic data and dedicated environments for reliable testing.
            </p>
          </div>
          <div className="hero-grid-item">
            <Image src={benefit4} alt="Reduced" className="mb-4 w-full" />
            <h3 className="mb-2 font-extrabold">Low Costs</h3>
            <p className="hero-grid-text">
              Eliminates the need for manual data seeding and environment
              management.
            </p>
          </div>
          <div className="block lg:hidden w-full ">
            <Link href="" target="_blank">
              <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

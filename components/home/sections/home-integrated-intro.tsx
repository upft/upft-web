import Image from "next/image";

import integratedImage from "@/public/imgs/home/loanImage.png";

export default function HomeIntegratedIntro() {
  return (
    <div className="hero-section relative py-12 my-0 lg:my-16">
      <div className="hidden lg:block wave-background absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-2">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="hero-left-content px-4 order-2 lg:order-1">
            <Image
              src={integratedImage}
              className="w-full"
              alt="hero section img"
            />
          </div>
          <div className="hero-right-content px-4 order-1 lg:order-2">
            <h2>
              <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">
                You can seed the data with Nimbus...
              </span>
            </h2>
            <p className="mb-2 lg:mb-6">
              Streamlinee your load testing setup and analysise=.
            </p>
            <ul className="list-disc px-4 lg:pl-8 pr-8">
              <li className="mb-2 lg:mb-6">
                Seamless integration with DataForger: Easily set up large data
                scenarios with DataForger.
              </li>
              <li className="mb-2 lg:mb-6">
                Environments setup with Nimbus: Define your environment
                requirements for accurate testing.
              </li>
              <li className="mb-2 lg:mb-6">
                Detailed analysise: Gain insights from your load testing with
                comprehensive analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

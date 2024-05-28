import Image from "next/image";
import streamlineImg from "@/public/imgs/loadlens/streamlineImg.png";

export default function LoadLensStreamlineFeatures() {
  return (
    <div className="loadlens-section relative py-4 lg:py-20 pt-2 mt-12 px-2">
      <div className="max-w-7xl mx-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="loadlens-left order-2 lg:order-1">
            <Image src={streamlineImg} className="w-full" alt="streamline" />
          </div>
          <div className="loadlens-right order-1 lg:order-2">
            <h2 className="w-full px-8">
              <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">
                Streamline your load testing Analytics and analysis.
              </span>
            </h2>
            <ul className="list-disc pl-14 pr-8 py-8">
              <li className="mb-2 lg:mb-6">
                Seamless integration with DataInceptor: Easily set up large data
                scenarios with DataInceptor.
              </li>
              <li className="mb-2 lg:mb-6">
                Environment setup with Nimbus: Define your environment
                requirements for accurate testing.c
              </li>
              <li className="mb-2 lg:mb-6">
                Detailed analysis: Gain insights from your load tests with
                comprehensive analysis.
              </li>
              <li className="mb-2 lg:mb-6">
                Environment setup with Nimbus: Define your environment
                requirements for accurate testing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

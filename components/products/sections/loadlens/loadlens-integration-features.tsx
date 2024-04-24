import Image from "next/image";
import runningAuto from "@/public/imgs/loadlens/runningAuto.png";

export default function LoadLensIntegrationFeatures() {
  return (
    <div className="loadlens-section relative py-4 lg:py-20 pt-2 mt-12 px-2">
      <div className="max-w-7xl mx-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="loadlens-left order-2 lg:order-1">
            <Image src={runningAuto} className="w-full" alt="running auto" />
          </div>
          <div className="loadlens-right order-1 lg:order-2">
            <h2 className="px-8">
              <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">
                Running Automated Tests
              </span>
            </h2>
            <ul className="list-disc pl-14 pr-8 py-8">
              <li className="mb-2 lg:mb-6">
                Seamless integration with DataForger: Easily set up large data
                scenarios with DataForger.
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

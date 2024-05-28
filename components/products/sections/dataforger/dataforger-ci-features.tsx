import Image from "next/image";
import Seamlessly from "@/public/imgs/dataforger/seamlessly.png";

export default function DataInceptorCIFeatures() {
  return (
    <div className="dataforger-section relative py-12">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="dataforger-left py-12">
            <h2 className="px-4">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
                Seamlessly connect from your local machine or CI workflows
              </span>
            </h2>

            <ul className="list-disc pl-14 pr-8 py-8">
              <li className="mb-2 md:mb-6">Hassle-free database hosting</li>
              <li className="mb-2 md:mb-6">
                Custom URI and secure access for effortless connection
              </li>
              <li className="mb-2 md:mb-6">
                Individual hosted databases ensure conflict-free and independent
                work
              </li>
            </ul>
          </div>
          <div className="dataforger-right text-right">
            <Image
              src={Seamlessly}
              className="w-full"
              height={696}
              alt="seamlessly"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

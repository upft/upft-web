import Image from "next/image";
import powerIco1 from "@/public/imgs/dataforger/powerIco.png";
import powerIco2 from "@/public/imgs/dataforger/powerIco1.png";
import powerIco3 from "@/public/imgs/dataforger/powerIco2.png";

export default function DataInceptorHighlightFeatures() {
  return (
    <div className="dataforger-section lineWave_bg relative py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center px-4 md:px-8">
          <span className=" custom-start-yellow-effect -ml-4 pl-4">
            AI-Powered Test Data Management
          </span>
        </h2>
        <p className="w-full md:w-1/2 mx-auto my-8 text-center">
          DataInceptor solves your data seeding problem, but what about
          environment conflicts? Here comes Nimbus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8 pt-6">
          <div className="text-center w-3/4 mx-auto md:w-full">
            <Image
              className="mx-auto mb-4"
              src={powerIco2}
              height={100}
              alt="power1"
            />
            <span className="power-text">
              No-code Test Data Seeding and Management Platform
            </span>
          </div>
          <div className="text-center w-3/4 mx-auto md:w-full">
            <Image
              className="mx-auto mb-4"
              src={powerIco3}
              height={100}
              alt="power1"
            />
            <span className="power-text">
              No need to access your production database
            </span>
          </div>
          <div className="text-center w-3/4 mx-auto md:w-full">
            <Image
              className="mx-auto mb-4"
              src={powerIco1}
              height={100}
              alt="power1"
            />
            <span className="power-text">
              No need to manually seed the test data repeatedly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

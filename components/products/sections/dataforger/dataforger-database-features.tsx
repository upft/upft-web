import Image from "next/image";
import cypressImg from "@/public/images/cypress-logo.svg";
import testcafeImg from "@/public/images/testcafe.png";
import playwrightImg from "@/public/images/playwright.png";
import seleniumImg from "@/public/images/selenium.png";
import pupteerImg from "@/public/images/pupteer.png";
import mongoIco from "@/public/imgs/dataforger/mongoIco.png";
import PostgreSQLogo from "@/public/imgs/dataforger/PostgreSQLogo.png";

export default function DataInceptorDatabaseFeatures() {
  return (
    <div className="dataforger-section relative py-12">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="py-8 mb-4 text-center italic">Seamlessly Integrated with </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="dataforger-left order-2 md:order-1">
            <div className="px-4 text-3xl text-center pb-2">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-effect">
                Frameworks
              </span>
            </div>
       
            <div className="grid grid-cols-3">
              <div className="px-4 md:px-8 py-4">
                <Image className="bg-white" src={cypressImg} height={55} alt="mongo ico" />
              </div>
              <div className="px-4 md:px-8 py-4">
                <Image src={testcafeImg} height={94} alt="postgreSQL" />
              </div>
              <div className="px-4 md:px-8 py-4">
                <Image src={playwrightImg} height={55} alt="mongo ico" />
              </div>
              <div className="px-4 md:px-8 py-4">
                <Image src={seleniumImg} height={94} alt="postgreSQL" />
              </div>
              <div className="px-4 md:px-8 py-4">
                <Image src={pupteerImg} height={94} alt="postgreSQL" />
              </div>
            </div>
          </div>
          <div className="dataforger-right order-1 md:order-2">
            <div className="px-4 text-3xl text-center pb-2">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-effect">
                Databases
              </span>
            </div>
  
            <div className="grid grid-cols-2">
              <div className="px-4 md:px-8 py-4">
                <Image src={mongoIco} height={55} alt="mongo ico" />
              </div>
              <div className="px-4 md:px-8 py-4">
                <Image src={PostgreSQLogo} height={94} alt="postgreSQL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

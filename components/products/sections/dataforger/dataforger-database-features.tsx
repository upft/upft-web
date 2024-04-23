import Image from "next/image";
import acceptImg from "@/public/imgs/dataforger/acceptImg.png";
import mongoIco from "@/public/imgs/dataforger/mongoIco.png";
import MySQLogo from "@/public/imgs/dataforger/MySQL_logo.png";
import PostgreSQLogo from "@/public/imgs/dataforger/PostgreSQLogo.png";

export default function DataForgerDatabaseFeatures() {
  return (
    <div className="dataforger-section relative py-12">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="dataforger-left order-2 md:order-1">
            <Image
              src={acceptImg}
              className="w-full"
              height={480}
              alt="updated"
            />
          </div>
          <div className="dataforger-right order-1 md:order-2">
            <h2 className="px-4">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
                Accept Major Databases
              </span>
            </h2>
            <p className="px-4 md:px-8 my-8 w-full md:w-9/12">
              Inspired by Inception. Just like planting an idea in a dream,
              Inceptor plants specific test scenarios directly into your
              database.
            </p>
            <span className="font-extrabold px-4 md:px-8 py-4">
              Available Now:
            </span>
            <div className="flex px-4 md:px-8 py-4">
              <Image src={mongoIco} height={55} alt="mongo ico" />
            </div>
            <span className="font-extrabold px-4 md:px-8 py-4">
              Coming Soon:
            </span>
            <div className="flex px-4 md:px-8 py-4">
              <Image src={PostgreSQLogo} height={94} alt="postgreSQL" />
              <Image className="mx-4" src={MySQLogo} height={94} alt="Mysql" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

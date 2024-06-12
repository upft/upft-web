import Image from "next/image";
import mainCode from "@/public/imgs/products/main.png";

export default function OverviewDataInceptor() {
  return (
    <div className="products-section bg-heavy-blue relative py-10 md:py-20 ">
      <div className="max-w-7xl mx-auto ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="hero-left-content px-4 md:px-8  order-1 md:order-1">
            <h2 className=" mb-2 md:mb-6">
              <span className="px-4 md:px-8 custom-start-effect">
                DataInceptor
              </span>
            </h2>
            <p className="px-4 md:px-8 mb-2 md:mb-6">
              DataInceptor: Streamlines data seeding for QA, Developers, CSM,
              PM, Sales, and more.
            </p>
            <ul className="list-disc pl-14 pr-8">
              <li className="mb-2 md:mb-6">
                No production database access: Eliminates the need to
                "synthesize" data.
              </li>
              <li className="mb-2 md:mb-6">
                Schema-based data generation: Creates fake data based on your
                existing database schema.
              </li>
              <li className="mb-2 md:mb-6">
                Industry-specific data customization: Choose the type of data
                generated based on your needs.
              </li>
              <li className="mb-2 md:mb-6">
                Easy database access: Hosted database integrates seamlessly with
                your CI pipeline or locally.
              </li>
            </ul>
            <div className="hidden md:block w-full px-8 mt-8 ">
              <button className="rounded px-12 py-2 bg-white text-black font-bold">
                Learn more
              </button>
            </div>
          </div>
          <div className="hero-right-content text-start px-4 order-2 md:order-2">
            <Image
              className="hero-codeImg mb-4"
              src={mainCode}
              alt="code_main"
            />
            <div className="block md:hidden w-full mt-8 ">
              <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

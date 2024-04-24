import Image from "next/image";
import codeImg from "@/public/imgs/home/code_main.png";

export default function OverviewHero() {
  return (
    <div className="products-section relative py-10 md:py-20 ">
      <div className="wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-extrabold mb-8 md:text-start text-center">
          <span className="px-4 md:px-8 custom-start-lg-effect">Products</span>
        </h1>
        <p className="text-center md:text-start px-4 md:px-8 w-full md:w-2/3">
          DataForger is a platform offering Fake Data Generation and Environment
          as a Service (EaaS) in one place. It goes beyond developers, enabling
          seamless collaboration for QA, CSM, PM, and even Sales.
        </p>
      </div>
      <div className="max-w-7xl mx-auto text-center my-6 pb-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
          <div className="hero-left-content px-4 md:px-8 order-2 md:order-1">
            <Image
              className="hero-codeImg mb-4"
              src={codeImg}
              alt="code_main"
            />
          </div>
          <div className="hero-right-content text-start px-6 order-1 md:order-2">
            <h2>
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-effect">
                Exploring How DataForger Works: A Brief Overview
              </span>
            </h2>
            <p className="mb-2 md:mb-6">
              DataForger solves your data seeding problem, but what about
              environment conflicts? Here comes Nimbus.{" "}
            </p>
            <ul className="list-disc pl-6 pr-8">
              <li className="mb-2 md:mb-6">
                Personal ephemeral environments: Avoid conflicts with dedicated
                environments for each team member.
              </li>
              <li className="mb-2 md:mb-6">
                Integrates with DataForger: Creates a powerful platform for
                streamlined testing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

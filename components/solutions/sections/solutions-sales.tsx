import Image from "next/image";

import salesCustomerImg from "@/public/imgs/solutions/salesCustomer.png";
import salesTrailImg from "@/public/imgs/solutions/salesTrails.png";

export default function SolutionsSales() {
  return (
    <div className="solutions-section section-waveBg relative px-2">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="solutions-left order-1">
            <h2 className="px-4 md:px-8 ">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
                Customer Demos without Production Data
              </span>
            </h2>
            <p className="my-8 px-4 md:px-8">
              As a sales professional, you know the impact of a compelling demo.
              But are you often stuck with a lackluster test account for
              demonstrations? Or find yourself spending excessive time manually
              setting up demo data?
            </p>
            <p className="my-8 px-4 md:px-8">
              Enter DataForger, a game-changer for the Sales team. It enables
              you to efficiently seed data setups and create realistic,
              industry-specific scenarios. With DataForger's AI-powered data
              generation, your product demos become more engaging, vibrant, and
              effective, ultimately boosting sales opportunities.
            </p>
          </div>
          <div className="solutions-right order-2 px-4">
            <Image
              src={salesCustomerImg}
              className="w-full h-full"
              alt="manual"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="solutions-left order-2 lg:order-1 px-4">
            <Image
              src={salesTrailImg}
              className="w-full h-full"
              alt="automated"
            />
          </div>
          <div className="solutions-righ order-1 lg:order-2">
            <h2 className="px-4 md:px-8 ">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
                Trials without Accessing Production Data
              </span>
            </h2>
            <p className="my-8 px-4 md:px-8">
              Want to offer prospective customers a trial of your product
              without overexposing features or risking your production database?
              DataForger and Nimbus offer an innovative solutions. They allow
              you to set up trial access distinctly, maintaining a cleaner
              database that supports more accurate LLM models in your system.
            </p>
            <p className="my-8 px-4 md:px-8">
              After the trial, effortlessly destroy the environment and access,
              ensuring no impact on your production data. This approach not only
              safeguards your data integrity but also provides a more controlled
              and secure trial experience for potential customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

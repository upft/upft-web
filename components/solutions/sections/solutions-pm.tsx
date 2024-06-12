import Image from "next/image";

import releaseImg from "@/public/imgs/solutions/releaseDemo.png";
import customerImg from "@/public/imgs/solutions/customerDemo.png";

export default function SolutionsPM() {
  return (
    <div className="solutions-section section-waveBg relative px-2">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="solutions-left order-1">
            <h2 className="px-4 md:px-8 ">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
                Pre-Release Demos and Testing
              </span>
            </h2>
            <p className="my-8 px-4 md:px-8">
              Are you a Product Manager eager to test pre-release features as if
              you were a major enterprise customer? Relying on backup or replica
              data is risky, especially with stringent GDPR and CCPA regulations
              and increasing concerns over data privacy. The traditional
              approach of using actual customer data isn't just legally
              precarious; it's a short-term fix fraught with privacy risks.
            </p>
            <p className="my-8 px-4 md:px-8">
              This is where DataInceptor and Nimbus come into play. DataInceptor
              empowers you to create realistic data scenarios without touching
              actual customer data and with zero technical hassle. Nimbus offers
              you your own ephemeral environment for isolated testing. Together,
              they ensure that your pre-release demos and stakeholder
              presentations respect privacy concerns and comply with data
              protection laws, all while delivering accurate, real-world testing
              scenarios.
            </p>
          </div>
          <div className="solutions-right order-2 px-4">
            <Image src={releaseImg} className="w-full" alt="manual" />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="solutions-left order-2 lg:order-1">
            <Image src={customerImg} className="w-full" alt="automated" />
          </div>
          <div className="solutions-righ order-1 lg:order-2">
            <h2 className="px-4 md:px-8 ">
              <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
                Customer Support Bug Triage
              </span>
            </h2>
            <p className="my-8 px-4 md:px-8">
              For Customer Support Managers, replicating a bug without the exact
              environment setup can be a daunting challenge. Using customer data
              directly is often not an option, especially in industries with
              high privacy standards. This leads to a bottleneck in the bug
              triage process, with engineering teams also struggling to
              replicate issues without an appropriate data setup.
            </p>
            <p className="my-8 px-4 md:px-8">
              DataInceptor and Nimbus are the solutions to this predicament.
              They enable Customer Support Managers to easily replicate customer
              scenarios without breaching data privacy. DataInceptor simplifies
              the data setup process, while Nimbus provides isolated
              environments for accurate replication of bugs. This streamlined
              approach not only respects customer privacy but also enhances the
              efficiency and effectiveness of your bug triage process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

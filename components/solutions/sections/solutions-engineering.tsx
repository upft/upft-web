import Image from "next/image";

import manualImg from "@/public/imgs/solutions/manualImg.png";
import automatedImg from "@/public/imgs/solutions/AutomatedImg.png";

export default function SolutionsEngineering() {
  return (
    <div className="solutions-section section-waveBg relative px-2">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="solutions-left order-1">
            <h2>
              <span className="px-4 md:px-8 custom-start-lg-effect">
                Manual Testing
              </span>
            </h2>
            <p className="my-8 px-4 md:px-8">
              Struggling with seeding data for specific test scenarios? Let
              DataForger streamline the process for you. Whether you need to
              replicate a user journey with a large dataset or a unique user
              scenario, DataForger accelerates the setup with ease.
            </p>
            <p className="my-8 px-4 md:px-8">
              Say goodbye to the "it works on my end" scenario. DataForger
              fosters closer collaboration between QA and developers by
              replicating bugs efficiently and accurately. Imagine sending a
              complete testing environment, set up via Nimbus, to your
              developers – no lengthy test steps, no need for recording videos.
              Just a click, and they're in the same scenario you tested, ready
              to pinpoint and fix issues faster.
            </p>
          </div>
          <div className="solutions-right order-2 px-4">
            <Image src={manualImg} className="w-full" alt="manual" />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="solutions-left order-2 lg:order-1 px-4">
            <Image src={automatedImg} className="w-full" alt="automated" />
          </div>
          <div className="solutions-righ order-1 lg:order-2">
            <h2>
              <span className="px-4 md:px-8 custom-start-lg-effect">
                Automated Testing
              </span>
            </h2>
            <p className="my-8 px-4 md:px-8">
              The golden rule for automated tests? Start clean and stay
              isolated. Each test should be a self-contained unit, unaffected by
              others, to ensure reliability and accuracy. But building and
              maintaining a data seeding framework for this can be a cumbersome
              task.
            </p>
            <p className="my-8 px-4 md:px-8">
              Enter DataForger and Nimbus, the dynamic duo that makes your life
              easier. With DataForger, setting up your automated tests becomes a
              breeze, even without a technical background. Create your own data
              seeding setup quickly and focus on what you do best – developing
              standout features and accelerating your pace. With DataForger and
              Nimbus, automated testing becomes not just a task, but a seamless
              part of your development cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

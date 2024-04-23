import Image from "next/image";
import missionImg from "@/public/imgs/company/missionImg.png";

export default function CompanyMission() {
  return (
    <div className="about-us-section relative py-5 lg:py-20 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="about-us-left">
            <h2>
              <span className="px-4 lg:px-8 custom-start-lg-effect ">
                Mission & Vision
              </span>
            </h2>
            <p className="px-4 lg:px-8 py-4 lg:py-8">
              Our ultimate goal is to revolutionize the testing process by
              providing a centralized hub for companies to streamline their
              testing efforts.
            </p>
            <p className="px-4 lg:px-8 py-4 lg:py-8">
              By eliminating the fragmentation that often occurs in testing, we
              aim to make the process more efficient, effective, and seamless.
            </p>
            <p className="px-4 lg:px-8 py-4 lg:py-8">
              At UPFT, we are committed to empowering businesses with the tools
              and resources they need to optimize their testing process and
              achieve success.
            </p>
          </div>
          <div className="about-us-right">
            <Image src={missionImg} className="w-full" alt="mission" />
          </div>
        </div>
      </div>
    </div>
  );
}

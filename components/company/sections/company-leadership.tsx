import Image from "next/image";
import leadershipImg from "@/public/imgs/company/leadership.png";

export default function CompanyLeadership() {
  return (
    <div className="about-us-section relative py-5 lg:py-20 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="about-us-left order-2 lg:order-1">
            <Image src={leadershipImg} className="w-full" alt="leadership" />
          </div>
          <div className="about-us-right order-1 lg:order-2">
            <h2>
              <span className="px-4 lg:px-8 custom-start-lg-effect ">
                Leadership
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
        </div>
      </div>
    </div>
  );
}

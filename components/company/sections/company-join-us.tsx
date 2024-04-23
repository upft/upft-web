import Image from "next/image";
import joinUsbaner from "@/public/imgs/company/joinUsBanner.png";

export default function CompanyJoinUs() {
  return (
    <div className="about-us-section bg-blue ai-management-background relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 py-10 lg:py-20 pl-6 pr-6 lg:pr-10 lg:pl-10">
          <div className="w-full">
            <div className="h1 font-normal">
              Join Us: Together Towards New Heights!
            </div>
            <p className="py-3 lg:py-6">
              Our ultimate goal is to revolutionize the testing process by
              providing a centralized hub for companies to streamline their
              testing efforts.
            </p>
            <p className="py-3 lg:py-6">
              By eliminating the fragmentation that often occurs in testing, we
              aim to make the process more efficient, effective, and seamless.
            </p>
            <a
              href="https://wellfound.com/company/hakkaren"
              target="_blank"
              className="w-full lg:w-fit font-bold md-text-2xl text-black bg-white py-2 px-12 rounded"
            >
              Join us!
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Image className="w-full h-full" src={joinUsbaner} alt="joinus" />
        </div>
      </div>
    </div>
  );
}

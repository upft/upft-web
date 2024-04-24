import Image from "next/image";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";

export default function BlogRelated() {
  return (
    <div className="blogpost-section relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="hero-left-content">
            <h2 className="text-white">
              <span className="custom-start-effect pl-4 md:pl-8">
                Related research
              </span>
            </h2>
          </div>
          <div className="hidden md:block hero-right-content">
            <p className="mb-6 text-size-30">
              We research generative models and how to align them with human
              values.
            </p>
            <span className="underline underline-offset-4">
              <a href="#">view all research</a>
            </span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 my-12 px-4 md:px-8">
          <div className="hero-grid-item">
            <Image src={Blog1} alt="Blog1" className="mb-4 w-full" />
            <p className="hero-grid-text mb-2">
              No-code Test Data Seeding and Management Platform
            </p>
            <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
          </div>
          <div className="hero-grid-item">
            <Image src={Blog2} alt="Blog2" className="mb-4 w-full" />
            <p className="hero-grid-text mb-2">
              No-code Test Data Seeding and Management Platform
            </p>
            <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
          </div>
          <div className="hero-grid-item">
            <Image src={Blog3} alt="Blog3" className="mb-4 w-full" />
            <p className="hero-grid-text mb-2">
              No-code Test Data Seeding and Management Platform
            </p>
            <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
          </div>
          <div className="hero-grid-item">
            <Image src={Blog4} alt="Blog4" className="mb-4 w-full" />
            <p className="hero-grid-text mb-2">
              No-code Test Data Seeding and Management Platform
            </p>
            <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
          </div>
          <div className="block md:hidden w-full ">
            <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

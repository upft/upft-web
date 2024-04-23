import Link from "next/link";
import Image from "next/image";

import blog1 from "@/public/imgs/home/Blog1.png";
import blog2 from "@/public/imgs/home/Blog2.png";
import blog3 from "@/public/imgs/home/Blog3.png";
import blog4 from "@/public/imgs/home/Blog4.png";

export default function HomeBlogOverview() {
  return (
    <div className="hero-section relative py-12 my-0 lg:my-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="hero-left-content">
            <h2 className="text-white">
              <span className="custom-start-lg-effect pl-4 lg:pl-8">
                Our Blog
              </span>
            </h2>
          </div>
          <div className="hidden lg:block hero-right-content">
            <p className="mb-6 text-size-30">
              We research generative models and how to align them with human
              values.
            </p>
            <span className="underline underline-offset-4">
              <Link href="/blog/">Check our blog</Link>
            </span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 my-12">
          <div className="hero-grid-item">
            <Link href="/blog/blog-post">
              <Image
                src={blog1}
                alt="Blog1"
                className="mb-4 w-full h-[260px] lg:h-auto"
              />
              <p className="hero-grid-text mb-2">
                No-code Test Data Seeding and Management Platform
              </p>
              <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
            </Link>
          </div>
          <div className="hero-grid-item">
            <Link href="/blog/blog-post">
              <Image
                src={blog2}
                alt="Blog2"
                className="mb-4 w-full h-[260px] lg:h-auto"
              />
              <p className="hero-grid-text mb-2">
                No-code Test Data Seeding and Management Platform
              </p>
              <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
            </Link>
          </div>
          <div className="hero-grid-item">
            <Link href="/blog/blog-post">
              <Image
                src={blog3}
                alt="Blog3"
                className="mb-4 w-full h-[260px] lg:h-auto"
              />
              <p className="hero-grid-text mb-2">
                No-code Test Data Seeding and Management Platform
              </p>
              <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
            </Link>
          </div>
          <div className="hero-grid-item">
            <Link href="/blog/blog-post">
              <Image
                src={blog4}
                alt="Blog4"
                className="mb-4 w-full h-[260px] lg:h-auto"
              />
              <p className="hero-grid-text mb-2">
                No-code Test Data Seeding and Management Platform
              </p>
              <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
            </Link>
          </div>
          <div className="block lg:hidden w-full ">
            <Link href="/blog">
              <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

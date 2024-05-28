import Link from "next/link";
import Image from "next/image";

import frame1 from "@/public/imgs/home/Frame_1.png";
import frame2 from "@/public/imgs/home/Frame_2.png";
import frame3 from "@/public/imgs/home/Frame_3.png";
import frame4 from "@/public/imgs/home/Frame_4.png";

export default function HomeProductsOverview() {
  return (
    <div className="hero-section relative py-12 my-0 lg:my-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="hero-left-content">
            <h2 className="text-white">
              <span className="custom-start-lg-effect pl-4 lg:pl-12">
                Our Products
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 my-12">
          <div className="hero-grid-item ">
            <Link href="/products/dataforger">
              <Image src={frame1} alt="dataforger" className="mb-4 w-full" />
              {/* <h3 className="mb-2 font-extrabold">DataInceptor:</h3> */}
              <p>
                Streamlines data seeding for QA, Developers, CSM, PM, Sales, and
                more.
              </p>
            </Link>
          </div>
          <div className="hero-grid-item">
            <Link href="/products/nimbus">
              <Image src={frame2} alt="nimbus" className="mb-4 w-full" />
              <h3 className="mb-2 font-extrabold">Coming Soon</h3>
              <p>Ephemeral environments for conflict-free testing.</p>
            </Link>
          </div>
          {/* <div className="hero-grid-item">
            <Link href="/products/loadlens">
              <Image src={frame3} alt="loadlens" className="mb-4 w-full" />
              <h3 className="mb-2 font-extrabold">LoadLens:</h3>
              <p>
                Streamlines data seeding for QA, Developers, CSM, PM, Sales, and
                more.
              </p>
            </Link>
          </div> */}

          {/* <div className="hidden lg:block hero-grid-item">
            <Link href="/products">
              <Image src={frame4} alt="load_more" className="mb-4" />
              <h3 className="mb-2 font-extrabold">Product Details</h3>
            </Link>
          </div> */}

          {/* <div className="block lg:hidden w-full">
            <Link href="/products">
              <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">
                Learn more
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

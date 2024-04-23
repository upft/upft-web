import Link from "next/link";

export default function HomeAbout() {
  return (
    <div className="hero-section lg:h-[507px] flex justify-center items-center relative py-2 lg:py-14 mt-8 mb-8 lg:mt-16 lg:mb-16">
      <div className="hidden lg:block about-us-section-bg"></div>
      <div className="max-w-7xl mx-auto z-20">
        <div className="hidden lg:flex justify-center items-center">
          <h4 className="about-us-section-md-text px-8">
            <span className="flex justify-start items-center about-us-section-sm-text mr-16">
              ABOUT UPFT
              <svg
                width="64"
                height="1"
                viewBox="0 0 64 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="1" fill="white"></rect>
              </svg>
            </span>
            <span className="about-us-section-main-text">
              <abbr className=" mr-2 light-blue">
                <i>" </i>UPFT strives
              </abbr>{" "}
              to be your streamlined solutions for comprehensive{" "}
              <abbr className="yellow">
                testing needs. <i>"</i>
              </abbr>
            </span>
          </h4>
        </div>
        <div className="block lg:hidden w-full px-8">
          <span className="">
            <i>" </i>
            <abbr className=" mr-2 light-blue">UPFT strives</abbr> to be your
            streamlined solutions for comprehensive{" "}
            <abbr className="yellow">
              testing needs. <i>"</i>
            </abbr>
          </span>
        </div>
        <div className="block w-full lg:hidden  mt-8 px-8 ">
          <Link href="/company">
            <button className="w-full lg:w-auto rounded lg:px-12 py-2 bg-white text-black font-bold">
              About Us
            </button>
          </Link>
        </div>
        <div className="hidden w-full lg:flex justify-end px-8 mt-8 lg:-mt-7">
          <Link href="/company">
            <button className="w-full lg:w-auto rounded lg:px-12 py-2 bg-white text-black font-bold">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

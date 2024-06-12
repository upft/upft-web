"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import generalImg from "@/public/imgs/why-upft/generalImg.png";
import Frame1 from "@/public/imgs/home/Frame_1.png";
import Frame2 from "@/public/imgs/home/Frame_2.png";
import Frame3 from "@/public/imgs/home/Frame_3.png";
import AIManagement from "@/components/ui/ai-management";
import WhyFeaturesLists from "@/components/why-upft/sections/why-features-lists";
import WhyFeaturesSwiperLists from "@/components/why-upft/sections/why-features-swiper-lists";
import WhyCompareTable from "@/components/why-upft/sections/why-compare-table";
import WhyCompareDetails from "@/components/why-upft/sections/why-compare-details";
import WhyTestmonial from "@/components/why-upft/sections/why-testimonial";
import {
  generalItems,
  compareItems,
} from "@/components/why-upft/parts/why-items";
import WhyHero from "@/components/why-upft/sections/why-hero";

export default function WhyUPFT() {
  const [compareDropdownOpen, setCompareDropdownOpen] =
    useState<boolean>(false);

  const [scrollBtnW, setScrollBtnW] = useState<number>(50);
  const [scrollBtnL, setScrollBtnL] = useState<number>(0);
  const [isMoveVal, setIsMoveVal] = useState<any>("");
  const [chooseType, setChooseType] = useState<string>("tonic");
  const scrollContent = useRef(null) as any;

  const isIphoneView = () => {
    return typeof window !== "undefined"
      ? ["iPhone Simulator", "iPhone"].includes(window.navigator.platform) ||
          // iPad on iOS 13 detection
          (window.navigator.userAgent.includes("Mac") &&
            "ontouchend" in document)
      : false;
  };

  const isMoved = (e: any) => {
    setScrollBtnL(
      Math.round(
        window.innerWidth *
          (scrollContent.current?.scrollLeft /
            scrollContent.current?.scrollWidth)
      )
    );
    setIsMoveVal("moved");
  };

  useEffect(() => {
    setScrollBtnW(
      Math.round(
        window.innerWidth *
          (scrollContent.current?.clientWidth /
            scrollContent.current?.scrollWidth)
      ) - 10
    );
  }, []);

  return (
    <section>
      <WhyHero />
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="hero-left-content px-8 order-2 lg:order-1">
              <Image
                src={generalImg}
                className="hero-codeImg mb-4"
                alt="'general"
              />
            </div>
            <div className="hero-right-content text-start px-4 order-1 lg:order-2">
              <h2 className="my-6">
                <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-effect">
                  Collabaration and Intuition
                </span>
              </h2>
              {/* <div className="max-w-7xl mx-auto">
                <div className="text-xl my-12 text-start">
                  <span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-h1-why-text-effect-1">
                    No Masking
                  </span>
                </div>
                <div className="text-xl my-12 text-start">
                  <span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-h1-why-text-effect-2">
                    No Synthesizing
                  </span>
                </div>
                <div className="text-xl my-12 text-start">
                  <span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-h1-why-text-effect-3">
                    No need to access production data
                  </span>
                </div>
                <div className="text-xl font-extrabold mt-16 mb-16 tracking-wide leading-[120px]">
                  <abbr className="custom-h1-why-text-start-effect">
                    We generate the data PURELY{" "}
                    <abbr className="custom-h1-why-text-end-effect">
                      based on your schema{" "}
                    </abbr>
                  </abbr>
                </div>
              </div> */}
              <p className="mb-2 lg:mb-6 font-extrabold">
                Broader Target Audience and Collaborative Focus
              </p>
              <p className="mb-2 lg:mb-6">
                UPFT caters not just to developers, but also to non-technical
                team members like project managers, customer success, and sales
                teams. It promotes a collaborative testing environment across
                different departments, making it a comprehensive platform for
                various organizational needs.
              </p>
              {/* <p className="px-4 lg:px-8 my-6 font-extrabold">
                Broader Target Audience and Collaborative Focus
              </p>
              <p className="px-4 lg:px-8 my-4">
                Hakkaren platform caters not just to developers, but also to
                non-technical team members like QA, project managers, customer
                success, and sales teams. This diverse appeal promotes a
                collaborative testing environment across different departments,
                making it a comprehensive platform for various organizational
                needs.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 px-4">
            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 my-4 custom-start-lg-effect">
              Compare to other companies
            </span>
          </h2>
          <div
            ref={scrollContent}
            onScroll={(e) => {
              isMoved(e);
            }}
            className="w-full overflow-auto scroll-bar-effect pb-2"
          >
            <WhyCompareTable />
          </div>
          {isIphoneView() && (
            <div className="w-full relative h-[10px] bg-[#1A234F]">
              <div
                className="absolute bg-[#3860D2] w-14 h-[10px] rounded-2xl"
                style={{ width: scrollBtnW + "px", left: scrollBtnL + "px" }}
              ></div>
            </div>
          )}
          {/* <div className="w-full">
            <p className="hidden lg:block my-8 text-center font-bold">
              Streamline your load testing setup and analysis.
            </p>
            <div className="block w-full mb-8 mt-4 lg:mt-0 text-center">
              <button className="flex justify-center items-center w-full rounded px-12 py-2 bg-white text-black font-bold mx-auto">
                <svg
                  className="mr-2"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" />
                </svg>
                Try now!
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="why-section relative py-10 lg:py-20 px-2">
        <WhyCompareDetails
          setChooseType={setChooseType}
          chooseType={chooseType}
          setCompareDropdownOpen={setCompareDropdownOpen}
          compareDropdownOpen={compareDropdownOpen}
          compareItems={compareItems}
        />
      </div> */}
      {/* <div className="why-section relative py-10 lg:py-20 px-2">
        <WhyTestmonial />
      </div> */}
    </section>
  );
}

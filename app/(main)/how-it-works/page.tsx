"use client";
import React, { useRef, useState } from "react";

import AIManagement from "@/components/ui/ai-management";
import HowDataForger from "@/components/how-it-works/sections/how-dataforger";
import HowLoadLens from "@/components/how-it-works/sections/how-loadlens";
import HowNimbus from "@/components/how-it-works/sections/how-nimbus";
import HowVideoPlay from "@/components/how-it-works/sections/how-video-play";
import HowNBDropdownBtn from "@/components/how-it-works/parts/how-dropdown-nb-btn";
import HowLLDropdownBtn from "@/components/how-it-works/parts/how-dropdown-ll-btn";
import HowDFDropdownBtn from "@/components/how-it-works/parts/how-dropdown-df-btn";
import HowDFBtn from "@/components/how-it-works/parts/how-df-btn";
import HowNBBtn from "@/components/how-it-works/parts/how-nb-btn";
import HowMobileDFBtn from "@/components/how-it-works/parts/how-mobile-df-btn";
import HowMobileNBBtn from "@/components/how-it-works/parts/how-mobile-nb-btn";
import HowMobileLLBtn from "@/components/how-it-works/parts/how-mobile-ll-btn";

export default function HowItWorks() {
  const howItWorksDropdown = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [chooseType, setChooseType] = useState<string>("dataforger");

  return (
    <section className="relative overflow-hidden">
      <div className="how-it-works-section relative px-4">
        <div className="max-w-7xl mx-auto mt-8 lg:mt-16">
          <h1 className="lg:h1 mb-6 font-extrabold text-start lg:text-center px-2">
            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">
              How It works
            </span>
          </h1>
          <div
            data-aos="fade-up"
            className="hidden lg:grid grid-cols-3 gap-10 mt-3 mb-10 lg:mt-8 py-6"
          >
            <HowDFBtn setChooseType={setChooseType} chooseType={chooseType} />
            {/* LoadLens */}
            <HowNBBtn setChooseType={setChooseType} chooseType={chooseType} />
          </div>
          <div className="block lg:hidden mt-1 lg:mt-8 py-6">
            <button
              className="how-it-works-btn how-it-works-action-btn w-full"
              onClick={(e) => {
                e.preventDefault();
                setDropdownOpen(!isDropdownOpen);
              }}
            >
              {chooseType == "dataforger" && <HowMobileDFBtn />}
              {/* {chooseType == "loadlens" && <HowMobileLLBtn />} */}
              {chooseType == "nimbus" && <HowMobileNBBtn />}
            </button>
            <nav
              ref={howItWorksDropdown}
              className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
              style={
                isDropdownOpen
                  ? {
                      maxHeight: "300px",
                      opacity: 1,
                    }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-900 px-4 py-2">
                <li className="flex justify-start items-center">
                  <HowDFDropdownBtn
                    chooseType={chooseType}
                    setChooseType={setChooseType}
                    setDropdownOpen={setDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                  />
                </li>
                {/* <li className="flex justify-center items-center">
                  <HowLLDropdownBtn
                  chooseType={chooseType}
                    setChooseType={setChooseType}
                    setDropdownOpen={setDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                  />
                </li> */}
                <li className="flex justify-center items-center">
                  <HowNBDropdownBtn
                    chooseType={chooseType}
                    setChooseType={setChooseType}
                    setDropdownOpen={setDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {chooseType == "dataforger" && <HowDataForger />}
      {/* {chooseType == "loadlens" && <HowLoadLens />} */}
      {chooseType == "nimbus" && <HowNimbus />}
      {/* <HowVideoPlay /> */}
      <AIManagement />
    </section>
  );
}

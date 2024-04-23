"use client";
import Image from "next/image";
import React, { useState } from "react";

import logo from "@/public/imgs/logos/upft-logo.png";
import SolutionsEngineering from "@/components/solutions/sections/solutions-engineering";
import SolutionsPM from "@/components/solutions/sections/solutions-pm";
import SolutionsSales from "@/components/solutions/sections/solutions-sales";
import SolutionsDropdownBtn from "@/components/solutions/parts/solutions-dropdown-btn";
import SolutionsBtn from "@/components/solutions/parts/solutions-btn";
import AIManagement from "@/components/ui/ai-management";

export default function Solutions() {
  const [solutionBtnDropDownOpen, setSolutionsBtnDropDownOpen] =
    useState<boolean>(false);
  const [chooseType, setChooseType] = useState<string>("engineering");

  return (
    <section>
      <div className="solutions-section relative py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto px-2 lg:px-0 md:px-8">
          <h1 className="font-extrabold w-full lg:w-3/4 px-6 md:px-4">
            <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
              Transforming work and creativity with AI
            </span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="solutions-card my-8 md:rounded-2xl w-full h-[300px] md:h-[600px] ">
            <div className="w-full h-full bg-[#0000005c] flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      <div className="solutions-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <SolutionsBtn
            chooseType={chooseType}
            setChooseType={setChooseType}
            setBtnDropdownOpen={setSolutionsBtnDropDownOpen}
            isBtnDropdownOpen={solutionBtnDropDownOpen}
          />
          <SolutionsDropdownBtn
            chooseType={chooseType}
            setChooseType={setChooseType}
            setBtnDropdownOpen={setSolutionsBtnDropDownOpen}
            isBtnDropdownOpen={solutionBtnDropDownOpen}
          />
        </div>
      </div>

      {chooseType == "engineering" && <SolutionsEngineering />}
      {chooseType == "pm" && <SolutionsPM />}
      {chooseType == "sales" && <SolutionsSales />}

      <AIManagement />
    </section>
  );
}

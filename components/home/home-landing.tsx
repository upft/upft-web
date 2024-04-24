"use client";
import React from "react";
import Image from "next/image";

import logo from "@/public/imgs/logos/Logo.svg";
import dfFlow from "@/public/imgs/dataforger/df-flow.png";
import playIco from "@/public/imgs/home/playIco.svg";

import AIManagement from "../ui/ai-management";
import HomeHero from "./sections/home-hero";
import HomeProductsCircles from "./sections/home-products-circles";
import HomeGeneralIntro from "./sections/home-general-intro";
import VideoPlay from "./parts/video-play";
import HomeDataForgerIntro from "./sections/home-dataforger-intro";
import HomeNimbusIntro from "./sections/home-nimbus-intro";
import HomeIntegratedIntro from "./sections/home-integrated-intro";
import HomeLoadLensIntro from "./sections/home-loadlens-intro";
import HomeProductsOverview from "./sections/home-products-overview";
import HomeBenefitsOverview from "./sections/home-benefits-overview";

export default function HomeLanding() {
  return (
    <section className="">
      <HomeHero />
      <HomeProductsCircles />

      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl mx-auto text-center">
          <Image src={dfFlow} alt="dfFlow" />
        </div>
      </div>

      <HomeDataForgerIntro />
      {/* <HomeNimbusIntro /> */}
      {/* <HomeGeneralIntro /> */}
      {/* <HomeIntegratedIntro /> */}
      {/* <HomeLoadLensIntro /> */}

      <AIManagement />

      <HomeProductsOverview />
      <HomeBenefitsOverview />
    </section>
  );
}

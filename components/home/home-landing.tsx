"use client";
import React from "react";

import logo from "@/public/imgs/logos/upft-logo.png";
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
      <HomeGeneralIntro />

      <VideoPlay
        logoSrc={logo}
        playIcoSrc={playIco}
        videoSrc={"/videos/video.mp4"}
      />

      <HomeDataForgerIntro />
      <HomeNimbusIntro />
      <HomeIntegratedIntro />
      {/* <HomeLoadLensIntro /> */}

      <AIManagement />

      <HomeProductsOverview />
      <HomeBenefitsOverview />
    </section>
  );
}

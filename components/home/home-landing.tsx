"use client";
import React, { useRef } from "react";
import Image from "next/image";

import logo from "@/public/imgs/logos/Logo.svg";
import dfFlow from "@/public/imgs/dataforger/df-flow.png";
import playIco from "@/public/imgs/home/playIco.svg";

import AIManagement from "../ui/ai-management";
import HomeHero from "./sections/home-hero";
import HomeProductsCircles from "./sections/home-products-circles";
import HomeGeneralIntro from "./sections/home-general-intro";
import VideoPlay from "./parts/video-play";
import HomeDataInceptorIntro from "./sections/home-dataforger-intro";
import HomeNimbusIntro from "./sections/home-nimbus-intro";
import HomeIntegratedIntro from "./sections/home-integrated-intro";
import HomeLoadLensIntro from "./sections/home-loadlens-intro";
import HomeProductsOverview from "./sections/home-products-overview";
import HomeBenefitsOverview from "./sections/home-benefits-overview";
import DataInceptorDatabaseFeatures from "../products/sections/dataforger/dataforger-database-features";
import WhyFeaturesLists from "../why-upft/sections/why-features-lists";
import featureItem1 from "@/public/imgs/dataforger/featureItem1.png";
import featureItem2 from "@/public/imgs/dataforger/featureItem2.png";
import featureItem3 from "@/public/imgs/dataforger/featureItem3.png";
import featureItem4 from "@/public/imgs/dataforger/featureItem4.png";
import WhyFeaturesSwiperLists from "../why-upft/sections/why-features-swiper-lists";

export default function HomeLanding() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const items = [
    {
      id: "01",
      imgSrc: featureItem1,
      title: "No Masking",
      detail:
        "Cater to businesses of all sizes, with capabilities that grow with your company.",
    },
    {
      id: "02",
      imgSrc: featureItem2,
      title: "No Synthesizing",
      detail:
        "Intuitive design makes navigation and usage effortless for both technical and non-technical users.",
    },
    {
      id: "03",
      imgSrc: featureItem3,
      title: "No need to access production data",
      detail:
        "DataInceptor provides highly customizable data seeding options, allowing users to create specific scenarios and datasets tailored to their unique testing needs.",
    },
    {
      id: "04",
      imgSrc: featureItem4,
      title: "Purely based on your schema",
      detail:
        "Nimbus offers ephemeral environments that ensure isolated, conflict-free testing.",
    },
  ];
  return (
    <section>
      <div className="w-full hero-section-1">
        <HomeHero />
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl mx-auto text-center">
          <video ref={videoRef} loop autoPlay muted>
            <source src={"/videos/video.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl hidden mx-auto lg:grid grid-cols-3 gap-10 p-4 lg:p-8">
          <WhyFeaturesLists listItems={items} />
        </div>
        <div className="w-full block py-2 lg:hidden lg:p-8">
          <WhyFeaturesSwiperLists listItems={items} />
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 px-2">
          <div className="max-w-7xl mx-auto text-center">
            <video ref={videoRef} loop autoPlay muted>
              <source src={"/videos/video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-7xl mx-auto text-center">
            <Image src={dfFlow} alt="dfFlow" />
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl hidden mx-auto lg:grid grid-cols-3 gap-10 p-4 lg:p-8">
          <WhyFeaturesLists listItems={items} />
        </div>
        <div className="w-full block py-2 lg:hidden lg:p-8">
          <WhyFeaturesSwiperLists listItems={items} />
        </div>
      </div>
      <DataInceptorDatabaseFeatures />
      <AIManagement />
    </section>
  );
}

"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import logo from "@/public/imgs/logos/Logo.svg";
import dfFlow from "@/public/imgs/dataforger/Dataforger v2.png";
import dfFlowAT from "@/public/imgs/dataforger/dataincep1.png";
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
import JoinBetaPopup from "../misc/join-beta-popup";

const manualFeaturesItems = [
  {
    id: "01",
    imgSrc: featureItem1,
    title: "Protect your data privacy",
    detail:
      "DataInceptor doesn't ask for access to your database that contains customers' data",
  },
  {
    id: "02",
    imgSrc: featureItem2,
    title: "Ephemeral Environment",
    detail:
      "DataInceptor offers an ephemeral database environment so that you can enjoy a conflict-free testing process",
  },
  {
    id: "03",
    imgSrc: featureItem3,
    title: "Powered by GPT and Claude",
    detail:
      "DataInceptor utilizes the latest AI models to analyze the schema and generate the data",
  },
];

const autoFeaturesItems = [
  {
    id: "01",
    imgSrc: featureItem4,
    title: "API Endpoints Creation",
    detail:
      "Seamlessly bootstrap any scenarios for your automated tests by calling an API to seed the data",
  },
  {
    id: "02",
    imgSrc: featureItem3,
    title: "Easy Integration",
    detail:
      "DataInceptor offers simple database connections so that you can easily integrate it into your CI pipeline",
  },
  {
    id: "03",
    imgSrc: featureItem2,
    title: "Flexible Customization",
    detail:
      "DataInceptor provides highly customizable data seeding options, allowing users to create specific scenarios and datasets tailored to their unique testing needs",
  },
];

export default function HomeLanding() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <section>
      <div className="w-full hero-section-1">
        <HomeHero handleShowModal={handleShowModal} />
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl mx-auto text-center">
          <video ref={videoRef} loop autoPlay muted playsInline>
            <source src={"/videos/video.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="hero-section relative  my-0 lg:my-16">
        <HomeBenefitsOverview />
        <div className="max-w-7xl hidden mx-auto lg:grid grid-cols-3 gap-10 my-12">
          <WhyFeaturesLists listItems={manualFeaturesItems} />
        </div>
        <div className="w-full block py-2 lg:hidden lg:p-8">
          <WhyFeaturesSwiperLists listItems={manualFeaturesItems} />
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 px-2">
          <div className="max-w-7xl mx-auto text-center">
            <video ref={videoRef} loop autoPlay muted playsInline>
              <source src={"/videos/demo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-7xl mx-auto text-center">
            <Image src={dfFlow} alt="dfFlow" />
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl hidden mx-auto lg:grid grid-cols-3 gap-10 my-12">
          <WhyFeaturesLists listItems={autoFeaturesItems} />
        </div>
        <div className="w-full block py-2 lg:hidden lg:p-8">
          <WhyFeaturesSwiperLists listItems={autoFeaturesItems} />
        </div>
      </div>
      <DataInceptorDatabaseFeatures />
      <AIManagement handleShowModal={handleShowModal} />

      {showModal && <JoinBetaPopup onHide={handleHideModal} />}
    </section>
  );
}

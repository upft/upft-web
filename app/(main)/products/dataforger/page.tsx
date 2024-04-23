"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import FeaturesCarousel from "@/components/products/sections/features-carousel";
import FeaturesMobileCarousel from "@/components/products/sections/features-mobile-carousel";
import AIManagement from "@/components/ui/ai-management";
import powerIco1 from "@/public/imgs/dataforger/powerIco.png";
import powerIco2 from "@/public/imgs/dataforger/powerIco1.png";
import powerIco3 from "@/public/imgs/dataforger/powerIco2.png";
import acceptImg from "@/public/imgs/dataforger/acceptImg.png";
import mongoIco from "@/public/imgs/dataforger/mongoIco.png";
import MySQLogo from "@/public/imgs/dataforger/MySQL_logo.png";
import PostgreSQLogo from "@/public/imgs/dataforger/PostgreSQLogo.png";
import Seamlessly from "@/public/imgs/dataforger/seamlessly.png";

import DataForgerHero from "@/components/products/sections/dataforger/dataforger-hero";
import DataForgerFeaturesCarousel from "@/components/products/sections/dataforger/dataforger-features-carousel";
import DataForgerHighlightFeatures from "@/components/products/sections/dataforger/dataforger-highlight-features";
import DataForgerDatabaseFeatures from "@/components/products/sections/dataforger/dataforger-database-features";
import DataForgerCIFeatures from "@/components/products/sections/dataforger/dataforger-ci-features";

export default function DataForger() {
  const sectionRef = useRef<HTMLElement>(null);
  const [svgDimensions, setSvgDimensions] = useState<any>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      if (sectionRef.current) {
        setSvgDimensions({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // call it once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={sectionRef as any} className="relative overflow-hidden ">
      <DataForgerHero />
      <DataForgerFeaturesCarousel />
      <DataForgerHighlightFeatures />
      <AIManagement />
      <DataForgerDatabaseFeatures />
      <DataForgerCIFeatures />
    </section>
  );
}

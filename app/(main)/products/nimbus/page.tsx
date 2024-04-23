"use client";
import React, { useEffect, useRef, useState } from "react";

import AIManagement from "@/components/ui/ai-management";
import NimbusHero from "@/components/products/sections/nimbus/nimbus-hero";
import NimbusHighlightFeatures from "@/components/products/sections/nimbus/nimbus-highlight-features";
import NimbusFeaturesCarousel from "@/components/products/sections/nimbus/nimbus-features-carousel";
import NimbusIntegrationsFeatures from "@/components/products/sections/nimbus/nimbus-integrations-features";

export default function Nimbus() {
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
    <section ref={sectionRef as any} className="relative overflow-hidden">
      <NimbusHero />
      <NimbusHighlightFeatures />
      <NimbusFeaturesCarousel />
      <NimbusIntegrationsFeatures />
      <AIManagement />
    </section>
  );
}

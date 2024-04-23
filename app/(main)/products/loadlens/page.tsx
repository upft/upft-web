"use client";
import AIManagement from "@/components/ui/ai-management";
import LoadLensHero from "@/components/products/sections/loadlens/loadlens-hero";
import LoadLensHighlightFeatures from "@/components/products/sections/loadlens/loadlens-highlight-features";
import LoadLensIntegrationFeatures from "@/components/products/sections/loadlens/loadlens-integration-features";
import LoadLensAnalyticsFeatures from "@/components/products/sections/loadlens/loadlens-analytics-features";

export default function LoadLens() {
  return (
    <section>
      <LoadLensHero />
      <LoadLensHighlightFeatures />
      <LoadLensIntegrationFeatures />
      <LoadLensAnalyticsFeatures />
      <AIManagement />
    </section>
  );
}

"use client";
import Benefits from "@/components/home/sections/benefits";
import AIManagement from "@/components/ui/ai-management";
import OverviewDataInceptor from "@/components/products/sections/overview/overview-dataforger";
import OverviewNimbus from "@/components/products/sections/overview/overview-nimbus";
import OverviewLoadLens from "@/components/products/sections/overview/overview-loadlens";
import OverviewHero from "@/components/products/sections/overview/overview-hero";

export default function ProductsOverview() {
  return (
    <section>
      <OverviewHero />
      <OverviewDataInceptor />
      <OverviewNimbus />
      {/* <OverviewLoadLens /> */}
    </section>
  );
}

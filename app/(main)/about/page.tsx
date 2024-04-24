"use client";
import React from "react";

import CompanyHeroBg from "@/components/company/sections/company-hero-bg";
import CompanyMission from "@/components/company/sections/company-mission";
import CompanyTeam from "@/components/company/sections/company-team";
import CompanyLeadership from "@/components/company/sections/company-leadership";
import CompanyInvestors from "@/components/company/sections/company-investors";

export default function Company() {
  return (
    <section className="">
      <CompanyHeroBg />
      <CompanyMission />
      <CompanyTeam />
      {/* <CompanyLeadership /> */}
      {/* <CompanyInvestors /> */}
    </section>
  );
}

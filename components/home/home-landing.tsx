"use client";
import React from "react";
import HomeHero from "./sections/home-hero";
import HomeProductsCircles from "./sections/home-products-circles";

export default function HomeLanding() {
  return (
    <section className="home-bg">
      <HomeHero />
      <HomeProductsCircles />
    </section>
  );
}

import HeroCarousel from "@/components/home/parts/hero-carousel";

export default function HomeHero() {
  return (
    <div className="max-w-7xl mx-auto text-center relative py-16 md:py-24">
      <div className="leading-[80px] font-roboto">
        <abbr className="md:text-[75px] text-[60px]">
          Unified Platform For Testing, Inc.{" "}
          <span className="text-blue-300 font-bold">(UPFT)</span>
        </abbr>
      </div>
      <div className="block lg:hidden w-full py-16">
        <HeroCarousel />
      </div>
    </div>
  );
}

import PricingDataForger from "@/components/pricing/sections/pricing-dataforger";
import PricingNimbus from "@/components/pricing/sections/pricing-nimbus";

export const metadata = {
  title: "Pricing",
  description: "Pricing",
};

export default function Pricing() {
  return (
    <section className="">
      <PricingDataForger />
      <PricingNimbus />
    </section>
  );
}

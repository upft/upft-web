import nimbusItemImg1 from "@/public/imgs/nimbus/nimbusItem1.png";
import nimbusItemImg2 from "@/public/imgs/nimbus/nimbusItem2.png";
import nimbusItemImg3 from "@/public/imgs/nimbus/nimbusItem3.png";
import nimbusItemImg4 from "@/public/imgs/nimbus/nimbusItem4.png";
import FeaturesCarousel from "../features-carousel";
import FeaturesMobileCarousel from "../features-mobile-carousel";

export default function NimbusFeaturesCarousel() {
  const nimbsItems = [
    {
      id: "01",
      imgsrc: nimbusItemImg1,
      title: "Personal ephemeral environments",
      detail:
        "Avoid conflicts with dedicated environments for each team member",
    },
    {
      id: "02",
      imgsrc: nimbusItemImg2,
      title: "Integrates with DataInceptor",
      detail: "Creates a powerful platform for streamlined testing.",
    },
    // {
    //   id: "03",
    //   imgsrc: nimbusItemImg3,
    //   title: "Endless Possibilities",
    //   detail: "Embrace Limitless Potential at Every Turn.",
    // },
    {
      id: "03",
      imgsrc: nimbusItemImg4,
      title: "Meticulous testing",
      detail:
        "Hosted database integrates seamlessly with your CI pipeline or locally.",
    },
    // {
    //   id: "05",
    //   imgsrc: nimbusItemImg1,
    //   title: "Meticulous testing",
    //   detail:
    //     "Hosted database integrates seamlessly with your CI pipeline or locally.",
    // },
    // {
    //   id: "06",
    //   imgsrc: nimbusItemImg2,
    //   title: "Meticulous testing",
    //   detail:
    //     "Hosted database integrates seamlessly with your CI pipeline or locally.",
    // },
  ];

  return (
    <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-12">
      <div className="hidden lg:block wave-background absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto mt-12 px-4">
        <h2 className="px-4 lg:px-8 mb-8">
          <span className="custom-start-lg-effect -ml-4 pl-4">
            Dedicated Individual Realm
          </span>
        </h2>
        <p className="px-4 lg:px-8 mb-8 w-full lg:w-1/2">
          Nimbus revolutionizes your team's workflow by equipping each
          individual with their own exclusive environment.
        </p>
        <div className="w-full hidden lg:block ">
          <FeaturesCarousel items={nimbsItems} />
        </div>
        <div className="w-full block lg:hidden">
          <FeaturesMobileCarousel items={nimbsItems} />
        </div>
      </div>
    </div>
  );
}

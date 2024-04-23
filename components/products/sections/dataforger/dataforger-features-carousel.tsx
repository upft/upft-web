import featureItem1 from "@/public/imgs/dataforger/featureItem1.png";
import featureItem2 from "@/public/imgs/dataforger/featureItem2.png";
import featureItem3 from "@/public/imgs/dataforger/featureItem3.png";
import featureItem4 from "@/public/imgs/dataforger/featureItem4.png";
import FeaturesCarousel from "../features-carousel";
import FeaturesMobileCarousel from "../features-mobile-carousel";

export default function DataForgerFeaturesCarousel() {
  const dfFeaturesLists = [
    {
      id: "01",
      imgsrc: featureItem1,
      title: "No production database access",
      detail: 'Eliminates the need to "synthesize" data.',
    },
    {
      id: "02",
      imgsrc: featureItem2,
      title: "Schema-based data generation",
      detail: "Creates fake data based on your existing database schema.",
    },
    {
      id: "03",
      imgsrc: featureItem3,
      title: "Inductry-specific data customization",
      detail: "Choose the type of data generated based on your needs.",
    },
    {
      id: "04",
      imgsrc: featureItem4,
      title: "Easy database access",
      detail:
        "Hosted database integrates seamlessly with your CI pipeline or locally.",
    },
    {
      id: "05",
      imgsrc: featureItem1,
      title: "Easy database access",
      detail:
        "Hosted database integrates seamlessly with your CI pipeline or locally.",
    },
    {
      id: "06",
      imgsrc: featureItem2,
      title: "Easy database access",
      detail:
        "Hosted database integrates seamlessly with your CI pipeline or locally.",
    },
  ];
  return (
    <div className="dataforger-section relative py-12">
      <div className="hidden md:block wave2-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-2">
        <h2 className=" md:w-5/6 px-4 md:px-8 ">
          <span className="custom-start-lg-effect -ml-4 pl-4">
            Ever want to test a specific user or scenario, but data seeding is a
            pain?
          </span>
        </h2>
        <p className="px-4 md:px-8 w-full md:w-4/6 my-8 ">
          Ever want to test a specific user or scenario, but data seeding is a
          pain? Tired of constantly requesting data seeding to developers?
          DataForger solves this and more.
        </p>
        <div className="w-full hidden md:block ">
          <FeaturesCarousel items={dfFeaturesLists} />
        </div>
        <div className="w-full block md:hidden">
          <FeaturesMobileCarousel items={dfFeaturesLists} />
        </div>
      </div>
    </div>
  );
}

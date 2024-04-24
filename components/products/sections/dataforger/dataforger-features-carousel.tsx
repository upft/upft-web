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
      detail: 'Eliminates the need to "masking" data.',
    },
    {
      id: "02",
      imgsrc: featureItem2,
      title: "Schema-based data generation",
      detail: "Creates fake data based on your database schema.",
    },
    {
      id: "03",
      imgsrc: featureItem3,
      title: "Inductry-specific data customization",
      detail: "Choose the type of data based on your needs.",
    },
    {
      id: "04",
      imgsrc: featureItem4,
      title: "Easy database access",
      detail:
        "Connect to DataForger's database seamlessly with your CI pipeline or locally.",
    },
    {
      id: "05",
      imgsrc: featureItem4,
      title: "Seed the data with customized API",
      detail:
        "Create an API to seed the data for your automated test with ease",
    },
  ];
  return (
    <div className="dataforger-section relative py-12">
      <div className="hidden md:block wave2-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-2">
        <h2 className=" md:w-5/6 px-4 md:px-8 ">
          <span className="custom-start-lg-effect -ml-4 pl-4">Features</span>
        </h2>
        <p className="px-4 md:px-8 w-full md:w-4/6 my-8 "></p>
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

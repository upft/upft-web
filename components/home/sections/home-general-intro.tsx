import Image from "next/image";
import collaborativeImg from "@/public/imgs/home/section2-img.png";

export default function HomeGeneralIntro() {
  return (
    <div className="relative py-14 px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 flex-col-reverse">
        <div className="px-4 order-2 lg:order-1">
          <Image src={collaborativeImg} className="w-full" alt="sectionImage" />
        </div>
        <div className="px-4 order-1 lg:order-2">
          <h2 className="mb-8">
            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">
              Collaborative Test Data and EaaS Hub
            </span>
          </h2>
          <p className="mb-4">
            Hakkaren Platform offers intuitive Real-Fake Data Generation and
            Environment as a Service (EaaS) in one place.
          </p>
          <p className="mb-8">
            It goes beyond developers, enabling seamless collaboration for QA
            Engineer, Customer Support, Product Manager, and even Sales.
          </p>
        </div>
      </div>
    </div>
  );
}

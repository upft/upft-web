import Image from "next/image";
import Step1Img from "@/public/imgs/how-it-works/howitworkStep1.png";
import Step2Img from "@/public/imgs/how-it-works/howitworkStep2.png";
import step3Img from "@/public/imgs/how-it-works/howitworkStep3.png";
import step4Img from "@/public/imgs/how-it-works/howitworkStep4.png";
import step5Img from "@/public/imgs/how-it-works/howitworkStep5.png";

export default function HowDataForger() {
  return (
    <div className="how-it-works-section relative px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">01 step - </span>
                Create a project and upload your database schema (or dump file)
              </span>
            </h2>
            <p className="py-6">Each project has its own hosted database.</p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            <Image src={Step1Img} className="w-full" height={358} alt="step1" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">02 step - </span>
                Set up foreign keys and data generation types
              </span>
            </h2>
            <p className="py-6 pr-8">
              Alternatively, use our AI-powered feature to automatically scan
              the type for you.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            <Image src={Step2Img} className="w-full" height={358} alt="step1" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">03 step - </span>
                Set up foreign keys and data generation types
              </span>
            </h2>
            <p className="py-6 pr-8">
              You can decide how you want to generate your data using the
              database schema.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            <Image src={step3Img} className="w-full" height={358} alt="step1" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">04 step - </span>
                Select the number of data entries you want to be generated
              </span>
            </h2>
            <p className="py-6 pr-8">
              Then all your data or test scenarios are generated!
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            <Image src={step4Img} className="w-full" height={358} alt="step1" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-left" className="how-it-works-left">
            <h2>
              <span className=" how-it-works-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8">
                <span className="how-it-works-step-effect">05 step - </span>
                Connect to the database
              </span>
            </h2>
            <p className="py-6 pr-8">
              Go to settings to find the connection info. You can use the URI to
              connect locally or to your CI seamlessly!
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="how-it-works-right flex justify-end items-center"
          >
            <Image src={step5Img} className="w-full" height={358} alt="step1" />
          </div>
        </div>
      </div>
    </div>
  );
}

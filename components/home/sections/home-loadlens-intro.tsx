import Image from "next/image";

import uploadIcon from "@/public/imgs/home/UploadIcon.png";
import loadIcon from "@/public/imgs/home/LoadIcon.png";
import dataForgerIcon from "@/public/imgs/home/DataForgerIcon.png";
import nimbusIcon from "@/public/imgs/home/NimbusIcon.png";
import svgCuverArrow from "@/public/imgs/home/curvedArrow.svg";
import longArrow from "@/public/imgs/home/longArrow.svg";

export default function HomeLoadLensIntro() {
  return (
    <div className="hero-section relative py-12 my-0 lg:my-16">
      <div className="hidden lg:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl mx-auto text-start lg:text-center z-20 px-2">
        <h2 className="px-4 lg:px-0 max-w-4xl mx-auto text-white pb-3">
          <span className="-ml-4 lg:-ml-0 custom-start-lg-effect pl-4 lg:pl-8">
            Exploring How LoadLens Works: A Brief Overview
          </span>
        </h2>
        <div className="w-full py-0 lg:py-16">
          <div className="w-full flex items-center justify-between flex-col lg:flex-row">
            <div className="loadlens-grid-item">
              <Image src={uploadIcon} alt="upload" />
              <span>Upload test script</span>
            </div>
            <div className="curve-arrow">
              <Image
                src={svgCuverArrow}
                className="rotate-90 ml-32 lg:rotate-0 lg:ml-0 pb-12"
                alt="arrow"
              />
            </div>
            <div className="loadlens-grid-item">
              <Image src={loadIcon} alt="upload" />
              <span>LoadLens</span>
            </div>
            <div className="curve-arrow">
              <span className="light-blue rotate-90 ml-36 pl-20 lg:pl-0 lg:ml-0 lg:rotate-0">
                Seed data
              </span>
              <Image
                src={svgCuverArrow}
                className="rotate-90 ml-32 scale-x-1 pb-12 lg:pb-0 lg:ml-0 lg:rotate-180 lg:scale-x-[-1] "
                alt="arrow"
              />
            </div>
            <div className="loadlens-grid-item">
              <Image src={dataForgerIcon} alt="upload" />
              <span>DataForger</span>
            </div>
            <div className="curve-arrow">
              <Image
                src={svgCuverArrow}
                className="rotate-90 ml-32 lg:rotate-0 lg:ml-0 lg:pb-3 pb-12"
                alt="arrow"
              />
              <span className="light-blue rotate-90 ml-36 pr-24 lg:pl-0 lg:ml-0 lg:rotate-0 ">
                Deploy App
              </span>
            </div>
            <div className="loadlens-grid-item">
              <Image src={nimbusIcon} alt="upload" />
              <span>Nimbus</span>
            </div>
            <div className="block lg:hidden curve-arrow absolute -top-80 -left-28">
              <span className="-rotate-90 pr-20 yellow">Analyze</span>
              <Image src={longArrow} className="rotate-90" alt="arrow" />
            </div>
          </div>
          <div className="hidden w-full lg:flex justify-end px-24 ">
            <div className="curve-arrow w-8/12">
              <Image src={longArrow} className=" lg:w-full" alt="arrow" />
              <span className="-mt-12 yellow">Analyze</span>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-0 lg:py-8 px-2 lg:px-0">
          <p className="hidden lg:block">
            Streamline your load testing setup and analysis
          </p>
        </div>
      </div>
    </div>
  );
}

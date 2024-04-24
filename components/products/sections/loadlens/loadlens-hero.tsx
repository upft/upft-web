import loadlensSvg from "@/public/imgs/home/LoadLens.svg";
import playBtn from "@/public/imgs/dataforger/playBtn.png";
import playIco from "@/public/imgs/home/playIco.svg";
import ProductsVideoPlay from "../products-video-play";

export default function LoadLensHero() {
  return (
    <div className="loadlens-section relative py-4 lg:py-12 pt-2 mt-12">
      <div className="hidden lg:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-4xl lg:max-w-5xl mx-auto text-center px-2">
        <h1 className="font-extrabold mb-4">
          <span className="custom-start-lg-effect px-8">LoadLens</span>
        </h1>
        <p className=" px-6 py-4 lg:py-8 mb-4">
          Run load testing analysis can be easy with LoadLens and leverage
          Nimbus and DataForger!
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <button className="w-full lg:w-fit btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100">
            <svg
              className="mr-2"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z"
                fill="white"
              />
            </svg>
            Coming Soon!
          </button>
        </div>
      </div>{" "}
      <ProductsVideoPlay
        productName={"loadlens"}
        playBtnImg={playBtn}
        productImgSrc={loadlensSvg}
        playIcoSrc={playIco}
        videoSrc={"videos/video.mp4"}
      />
    </div>
  );
}

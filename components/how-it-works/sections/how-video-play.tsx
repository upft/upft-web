import Image from "next/image";
import MediaPopup from "@/components/ui/media-popup";
import { useRef, useState } from "react";

import playIco from "@/public/imgs/home/playIco.svg";

export default function HowVideoPlay() {
  const videoContainer = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<boolean>(false);

  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  };

  return (
    <div className="how-it-works-section relative px-0 lg:px-4 py-0 lg:py-8">
      <div className="hidden lg:block wave-background absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
      <div className="max-w-7xl lg:px-2 m-auto">
        <div className="w-full how-it-works-play-card bg-dark  shadow ">
          <div ref={videoContainer} className="hero-play-card-content">
            <div className="w-full h-full p-4 lg:p-10 flex flex-col justify-between">
              <div className="hero-play-card-text h-20">
                <p>Fake Data Generation</p>
                <p>Environment as a Service(EaaS),</p>
                <p>and Load Testing Analysis</p>
              </div>
              <div className="hero-play-card-logo text-center lg:h-20 flex justify-center items-center">
                <h2 className="how-it-works-cardTxt">How It works?</h2>
                <Image
                  onClick={() => {
                    onPlayVideo();
                  }}
                  className="mobile-hereo-play-btn cursor-pointer"
                  src={playIco}
                  height={80}
                  alt="playIco"
                />
              </div>
              <div className=" md:h-20">
                <div
                  onClick={() => {
                    onPlayVideo();
                  }}
                  className="hidden md:flex hero-play-btn px-2 rounded-full bg-black justify-end items-center"
                >
                  <span className="hero-play-btn-text px-6">Play</span>
                  <Image src={playIco} height={65} alt="playIco" />
                </div>
              </div>
            </div>
            <MediaPopup
              playingVideo={playingVideo}
              src={"videos/demo.mp4"}
              closePlayingVideo={setPlayingVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

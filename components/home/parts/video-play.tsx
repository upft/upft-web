import Image from "next/image";
import MediaPopup from "../../ui/media-popup";
import { useRef, useState } from "react";

interface VideoPlayProps {
  logoSrc: any;
  playIcoSrc: string;
  videoSrc: string;
}

export default function VideoPlay({
  logoSrc,
  playIcoSrc,
  videoSrc,
}: VideoPlayProps) {
  const videoContainer = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<Boolean>(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  };

  return (
    <div className="hero-section wave-background relative py-2 lg:py-14">
      <div className="max-w-7xl lg:px-2 m-auto">
        <div className="w-full hero-play-card bg-dark shadow ">
          <div ref={videoContainer} className="hero-play-card-content">
            <div className="w-full h-full p-4 lg:p-10 flex flex-col justify-between">
              <div className="hero-play-card-text h-20">
                <p>Fake Data Generation</p>
                <p>Environment as a Service(EaaS),</p>
                <p>and Load Testing Analysis</p>
              </div>
              <div className="hero-play-card-logo text-center lg:h-20 flex justify-center items-center">
                <Image src={logoSrc} height={120} alt="logo" />
                <Image
                  onClick={() => {
                    onPlayVideo();
                  }}
                  className="mobile-hereo-play-btn cursor-pointer"
                  src={playIcoSrc}
                  height={100}
                  alt="playIcoSrc"
                />
              </div>
              <div className=" md:h-20">
                <div
                  onClick={() => {
                    onPlayVideo();
                  }}
                  className="hidden md:flex cursor-pointer hero-play-btn px-2 rounded-full bg-black justify-end items-center"
                >
                  <span className="hero-play-btn-text px-6">Play</span>
                  <Image src={playIcoSrc} height={65} alt="playIcoSrc" />
                </div>
              </div>
            </div>
            <MediaPopup
              playingVideo={playingVideo}
              src={videoSrc}
              closePlayingVideo={setPlayingVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

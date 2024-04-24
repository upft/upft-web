import MediaPopup from "@/components/ui/media-popup";
import Image, { StaticImageData } from "next/image";

import { useRef, useState } from "react";

interface ProductsVideoPlayProps {
  productName: string;
  productImgSrc: string;
  playBtnImg: StaticImageData;
  playIcoSrc: string;
  videoSrc: string;
}

export default function ProductsVideoPlay({
  productName,
  productImgSrc,
  playBtnImg,
  playIcoSrc,
  videoSrc,
}: ProductsVideoPlayProps) {
  const videoContainer = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<Boolean>(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  };

  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div
        ref={videoContainer}
        className={`${productName}-card flex rounded-none md:rounded-3xl`}
      >
        <div className="flex justify-start items-end w-full h-full p-12">
          <div className={`${productName}-overload`}>
            <Image
              className={`${productName}-logo`}
              src={productImgSrc}
              height={300}
              alt={productName}
            />
            <Image
              onClick={() => {
                onPlayVideo();
              }}
              src={playBtnImg}
              className="block md:hidden dataforgerVideo-play cursor-pointer"
              alt="pllay button"
            />
            <div className="playbtn-content">
              <div
                onClick={() => {
                  onPlayVideo();
                }}
                className="hidden hero-play-btn cursor-pointer px-2 rounded-full bg-black md:flex justify-end items-center"
              >
                <span className="hero-play-btn-text px-6">Play</span>
                <Image src={playIcoSrc} height={65} alt="playIco" />
              </div>
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
  );
}

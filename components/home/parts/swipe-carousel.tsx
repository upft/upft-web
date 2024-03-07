import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import dataforger_svg from "@/public/imgs/home/DataForger.svg";
import nimbus_svg from "@/public/imgs/home/Nimbus.svg";
import loadlens_svg from "@/public/imgs/home/LoadLens.svg";

export default function SwipeCarousel() {
  return (
    <div className="swipe-animation-width">
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.8,
          slideShadows: false,
        }}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide>
          <div className="hero-section-btn hero-center-btn mx-8">
            <div className="dataforger-btn">
              <Image src={dataforger_svg} width={200} alt="dataforger" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-section-btn hero-center-btn mx-8">
            <div className="nimbus-btn">
              <Image src={nimbus_svg} width={150} alt="nimbus" />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="hero-section-btn hero-center-btn mx-8">
            <div className="loadlens-btn">
              <Image src={loadlens_svg} width={200} alt="loadlens" />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

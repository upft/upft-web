import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import comingItemBg from "@/public/imgs/home/Ellipse 66.png";
import hkItemBg from "@/public/imgs/home/Ellipse 69.png";
import DataForgerIco from "@/public/imgs/home/DataForger.svg";
// import loadlensIco from "@/public/imgs/home/LoadLens.svg";
import comingSoon from "@/public/imgs/home/comingSoon.png";
import NimbusIco from "@/public/imgs/home/Nimbus.svg";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCreative } from "swiper/modules";

export default function HeroCarousel() {
  return (
    <div className="carousel-width">
      <Swiper
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        modules={[EffectCreative, Pagination]}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
      >
        <SwiperSlide>
          <Link href="https://hakkaren.co/">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={hkItemBg}
                height={300}
                alt="coming soon"
              />
              <div className="hero-carousel-item-overload">
                <Image src={DataForgerIco} height={100} alt="hk" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={comingItemBg}
                height={300}
                alt="coming soon"
              />
              <div className="hero-carousel-item-overload">
                <Image src={comingSoon} height={100} alt="coming" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={comingItemBg}
                height={300}
                alt="coming soon"
              />
              <div className="hero-carousel-item-overload">
                <Image src={comingSoon} height={100} alt="coming" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
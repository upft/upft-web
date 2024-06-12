import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import CarouselItemBg from "@/public/imgs/home/CarouselItemBg.png";
import DataInceptorIco from "@/public/imgs/home/DataInceptor.svg";
// import loadlensIco from "@/public/imgs/home/LoadLens.svg";
import comingSoon from "@/public/imgs/home/comingSoon.png";
import NimbusIco from "@/public/imgs/home/Nimbus.svg";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCreative } from "swiper/modules";

const responsive = {
  450: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
};

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
        breakpoints={responsive}
        loop={true}
        centeredSlides={false}
      >
        <SwiperSlide>
          <Link href="/products/dataforger">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="hero-carousel-item-overload">
                <Image src={DataInceptorIco} height={80} alt="dataforger" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/nimbus">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="hero-carousel-item-overload">
                <Image src={NimbusIco} height={80} alt="nimbus" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Link href="/products/loadlens">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="hero-carousel-item-overload">
                <Image src={comingSoon} height={80} alt="loadlens" />
              </div>
            </div>
          </Link>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Link href="/products/dataforger">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="hero-carousel-item-overload">
                <Image src={DataInceptorIco} height={80} alt="dataforger" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/nimbus">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="hero-carousel-item-overload">
                <Image src={NimbusIco} height={80} alt="nimbus" />
              </div>
            </div>
          </Link>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Link href="/products/loadlens">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="hero-carousel-item"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="hero-carousel-item-overload">
                <Image src={comingSoon} height={80} alt="loadlens" />
              </div>
            </div>
          </Link>
        </SwiperSlide> */}
      </Swiper>
      {/* <Carousel itemClass=" flex justify-center" centerMode={true} focusOnSelect={true} ssr={true} infinite={true} slidesToSlide={3} responsive={responsive} showDots={true}>
        <Link href="/products/dataforger">
          <div className="h-52 w-52 mx-3 flex justify-center items-center">
            <Image
              className="hero-carousel-item"
              src={CarouselItemBg}
              height={200}
              alt="item1"
            />
            <div className="hero-carousel-item-overload">
              <Image
                src={DataInceptorIco}
                height={80}
                alt="dataforger"
              />
            </div>
          </div>
        </Link>
        <Link href="/products/nimbus">
          <div className="h-52 w-52 mx-3 flex justify-center items-center">
            <Image
              className="hero-carousel-item"
              src={CarouselItemBg}
              height={200}
              alt="item1"
            />
            <div className="hero-carousel-item-overload">
              <Image
                src={NimbusIco}
                height={80}
                alt="nimbus"
              />
            </div>
          </div>
        </Link>
        <Link href="/products/loadlens">
          <div className="h-52 w-52 mx-3 flex justify-center items-center">
            <Image
              className="hero-carousel-item"
              src={CarouselItemBg}
              height={200}
              alt="item1"
            />
            <div className="hero-carousel-item-overload">
              <Image
                src={comingSoon}
                height={80}
                alt="loadlens"
              />
            </div>
          </div>
        </Link>
      </Carousel> */}
    </div>
  );
}

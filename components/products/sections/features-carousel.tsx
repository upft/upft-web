import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Scrollbar } from "swiper/modules";

export default function FeaturesCarousel({ items }: any) {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const nextSwipe = () => {
    swiperRef.current?.swiper.slideNext();
  };
  const prevSwipe = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const pagination = {
    clickable: true,
    className: "feature-carousel-pagination",
    renderBullet: function (index: number, className: string) {
      const pageWidth = swiperRef.current?.swiper.pagination.el.clientWidth;
      const bulletTotal = swiperRef.current?.swiper.slides.length;
      const bulletW = Math.round(pageWidth / bulletTotal);
      return (
        '<div class="feature-carousel-dot ' +
        className +
        '" style="width: ' +
        bulletW +
        'px !important; height: 5px !important; border-radius: 0 !important; margin: 0 !important;" ></div>'
      );
    },
  };

  return (
    <>
      <div className="feature-carousel-width">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          ref={swiperRef}
          className="feature-carousel-swip"
          spaceBetween={10}
          pagination={pagination}
          modules={[Scrollbar, Pagination]}
        >
          {items.map((item: any, key: number) => (
            <SwiperSlide className="feature-carousel-item" key={key}>
              <div className="feature-item-card">
                <div className="flex justify-between items-start">
                  <div>
                    <Image src={item.imgsrc} height={100} alt="fitem1" />
                  </div>
                  <div className="text-right">{item.id}</div>
                </div>
                <div className="w-full mt-2">
                  <h4 className="font-bold">{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="forgerSwip-navigations w-36 flex grid-cols-2">
            <button
              className="carousel-btn"
              onClick={() => prevSwipe()}
              ref={prevRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="carousel-btn"
              onClick={() => nextSwipe()}
              ref={nextRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
}

import { Pagination } from "swiper/modules";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface WhyCompareDetailsProps {
  setChooseType: Function;
  chooseType: string;
  setCompareDropdownOpen: Function;
  compareDropdownOpen: boolean;
  compareItems: {
    imgSrc: string | StaticImport;
    id: string | number;
    type: string;
    title: string;
    detail: string;
  }[];
}

export default function WhyCompareDetails({
  setChooseType,
  chooseType,
  setCompareDropdownOpen,
  compareDropdownOpen,
  compareItems,
}: WhyCompareDetailsProps) {
  const compareDropdown = useRef<HTMLDivElement>(null);
  const pagination = {
    clickable: true,

    renderBullet: function (index: any, className: string) {
      return '<span class="clientSwipePagination ' + className + '"></span>';
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mb-12 text-start lg:text-center w-full lg:w-1/2 mx-auto px-4">
        <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 my-4 custom-start-lg-effect">
          Compare us with other competitors
        </span>
      </h2>
      <div className="hidden lg:grid w-full grid-cols-3 gap-10">
        <button
          onClick={() => {
            setChooseType("tonic");
          }}
          className={
            chooseType == "tonic"
              ? "how-it-works-btn how-it-works-action-btn"
              : "how-it-works-btn"
          }
        >
          Compare to Tonic.ai
        </button>
        <button
          onClick={() => {
            setChooseType("release");
          }}
          className={
            chooseType == "release"
              ? "how-it-works-btn how-it-works-action-btn"
              : "how-it-works-btn"
          }
        >
          Compare to Release
        </button>
        <button
          onClick={() => {
            setChooseType("snaplet");
          }}
          className={
            chooseType == "snaplet"
              ? "how-it-works-btn how-it-works-action-btn"
              : "how-it-works-btn"
          }
        >
          Compare to Snaplet
        </button>
      </div>
      <div className="w-full block lg:hidden">
        <button
          onClick={(e) => {
            e.preventDefault();
            //setMobileNavOpen(false);
            setCompareDropdownOpen(!compareDropdownOpen);
          }}
          className="w-full how-it-works-btn how-it-works-action-btn"
        >
          {chooseType == "tonic" && <>Compare to Tonic.ai</>}
          {chooseType == "release" && <>Compare to Release</>}
          {chooseType == "snaplet" && <>Compare to Snaplet</>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-2 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <nav
          ref={compareDropdown}
          className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
          style={
            compareDropdownOpen
              ? {
                  maxHeight: "300px",
                  opacity: 1,
                }
              : { maxHeight: 0, opacity: 0.8 }
          }
        >
          <ul className="bg-gray-900 px-4 py-2">
            <li className="flex justify-center items-center">
              <button
                onClick={() => {
                  setChooseType("tonic");
                  setCompareDropdownOpen(!compareDropdownOpen);
                }}
                className="w-full how-it-works-btn"
              >
                Compare to Tonic.ai
              </button>
            </li>
            <li className="flex justify-center items-center">
              <button
                onClick={() => {
                  setChooseType("release");
                  setCompareDropdownOpen(!compareDropdownOpen);
                }}
                className="w-full how-it-works-btn"
              >
                Compare to Release
              </button>
            </li>
            <li className="flex justify-center items-center">
              <button
                onClick={() => {
                  setChooseType("snaplet");
                  setCompareDropdownOpen(!compareDropdownOpen);
                }}
                className="w-full how-it-works-btn"
              >
                Compare to Snaplet
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full my-12 hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10">
        {compareItems.map((item) => (
          <>
            {chooseType == item.type && (
              <div className="feature-item-card w-full h-full p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <Image src={item.imgSrc} height={100} alt="fitem1" />
                  </div>
                  <div className=" text-right">{item.id}</div>
                </div>
                <div className="w-full mt-2">
                  <h4 className="font-bold py-4">{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="w-full my-12 block lg:hidden">
        <Swiper
          centeredSlides={false}
          slidesPerView={1.05}
          spaceBetween={10}
          pagination={pagination}
          modules={[Pagination]}
        >
          {compareItems.map((item) => (
            <>
              {chooseType == item.type && (
                <SwiperSlide>
                  <div className="feature-item-card w-full p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <Image src={item.imgSrc} height={100} alt="fitem1" />
                      </div>
                      <div className=" text-right">{item.id}</div>
                    </div>
                    <div className="w-full mt-2">
                      <h4 className="font-bold py-4">{item.title}</h4>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

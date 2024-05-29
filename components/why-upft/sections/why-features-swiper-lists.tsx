import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function WhyFeaturesSwiperLists({
  listItems,
}: {
  listItems: {
    imgSrc: string | StaticImport;
    id: string | number;
    title: string;
    detail: string;
  }[];
}) {
  const pagination = {
    clickable: true,

    renderBullet: function (index: any, className: string) {
      return '<span class="clientSwipePagination ' + className + '"></span>';
    },
  };

  return (
    <Swiper
      centeredSlides={false}
      slidesPerView={1.05}
      spaceBetween={10}
      pagination={pagination}
      modules={[Pagination]}
    >
      {listItems.map((item) => (
        <SwiperSlide>
          <div className="feature-item-card w-full p-5">
            <div className="flex justify-between items-start">
              <div>
                <Image src={item.imgSrc} height={100} alt="fitem1" />
              </div>
              {/* <div className=" text-right">{item.id}</div> */}
            </div>
            <div className="w-full mt-2">
              <div className="text-2xl font-bold py-4">{item.title}</div>
              <p>{item.detail}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import WhyTestmonialCarousel from "./why-testimonial-carousel";

export default function WhyTestmonial() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-start lg:text-center mb-4">
          <span className="px-4 lg:px-8 custom-start-lg-effect">
            Client <b className=" why-upft-gradientTxt">Testimonials</b>
          </span>
        </h2>
        <p className="w-full lg:w-1/2 text-start lg:text-center mx-auto px-4 py-8">
          Nimbus revolutionizes your team's workflow by equipping each
          individual with their own exclusive environment.
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <WhyTestmonialCarousel />
      </div>
    </>
  );
}

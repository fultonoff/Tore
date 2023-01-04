import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function FeedCarousel() {

    const slides =[1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <section className="w-full bg-grayinsh pb-[40px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="maxW flex bg-grayinsh  mx-auto py-4"
      >
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              <SwiperSlide key={index} className="w-full py-[60px]">
                <Slide />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";
import slide5 from "../../../assets/slide5.jpg";
import slide6 from "../../../assets/slide1.jpg";
import slide7 from "../../../assets/slide2.jpg";
import slide8 from "../../../assets/slide3.jpg";

const Swipe = () => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="absolute" src={slide1} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">Salad</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide2} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">pizza</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide3} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">soup</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide4} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">cake</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide5} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">Salad</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide6} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">Salad</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide7} alt="" />
        <h1 className="text-center relative mt-56 md:mt-80 uppercase font-bold">pizza</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img className="absolute" src={slide8} alt="" />
        <h1 className="text-center relative mt-80 uppercase font-bold">soup</h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipe;

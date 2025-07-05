import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/slide1.jpg"
import slide2 from "../../../assets/slide2.jpg"
import slide3 from "../../../assets/slide3.jpg"
import slide4 from "../../../assets/slide4.jpg"
import slide5 from "../../../assets/slide5.jpg"
import slide6 from "../../../assets/slide1.jpg"
import slide7 from "../../../assets/slide2.jpg"
import slide8 from "../../../assets/slide3.jpg"

const Swipe = () => {
    return (
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Swipe;
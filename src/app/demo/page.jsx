"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BirdData } from "../components/helper/Helper";

// Dummy BirdData array (replace with real path)

export default function VideoSlider() {
  return (
    <div className="bg-blue-400 py-[50px] px-[50px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {BirdData.map((item, index) => (
          <SwiperSlide key={index}>
            <video
              controls
              className="w-full h-[200px] rounded-lg shadow-lg cursor-pointer"
              onClick={(e) => {
                e.target.play(); // Click to play
              }}
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

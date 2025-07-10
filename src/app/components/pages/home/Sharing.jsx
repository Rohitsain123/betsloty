"use client";
import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";
import { sliderData } from "../../helper/Helper";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LeftArrow, RightArrow, YoutubeLogo } from "../../helper/Icon";
import Link from "next/link";

function Sharing() {
  return (
    <div className="bg-[#19172F] py-[40px] md:py-[70px] lg:py-[100px] relative">
      <div className="absolute top-0 z-[-99]">
        <Image
          src={"/assetes/png/bgline.png"}
          width={1513}
          height={538}
          alt="bgimg"
        />
      </div>
      <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
        <Heading
          className="!text-2xl md:!text-3xl lg:!text-[39px] text-center leading-[120%]"
          title={"Betting and Social Sharing"}
        />
        <div className="flex justify-center">
          <Image
            src={"/assetes/png/line2.png"}
            width={304}
            height={2}
            alt="line"
          />
        </div>

        {/* Arrows */}
        <div className="mt-20 relative">
          <div className="absolute top-[45%] left-0 -translate-y-1/2 z-50 custom-prev cursor-pointer">
            <LeftArrow />
          </div>
          <div className="absolute top-[36%] left-[47%] z-[99] cursor-pointer">
            <Link href={"https://www.youtube.com/"} target="blank">
              <YoutubeLogo />
            </Link>
          </div>
          <div className="absolute top-[45%] right-0 -translate-y-1/2 z-50 custom-next cursor-pointer">
            <RightArrow />
          </div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={40}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index} className="!w-[270px]">
                <Image
                  src={item.img}
                  width={250}
                  height={427}
                  alt="baby"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Sharing;

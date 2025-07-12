"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../common/Heading";
import { dot, sliderData } from "../../helper/Helper";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LeftArrow, RightArrow, YoutubeLogo } from "../../helper/Icon";
import Link from "next/link";
import { alegreya } from "@/app/layout";

function Sharing() {
  const [activeIndex, setActiveIndex] = useState(0);
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
          className={`!text-2xl md:!text-3xl lg:!text-[39px] text-center leading-[120%] ${alegreya.className}`}
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
          <div className="absolute top-[36%] left-[47%] z-50 cursor-pointer">
            <Link href="https://www.youtube.com/" target="blank">
              <YoutubeLogo />
            </Link>
          </div>
          <div className="absolute top-[45%] right-0 -translate-y-1/2 z-50 custom-next cursor-pointer ">
            <RightArrow />
          </div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={40}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[Navigation, Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index} className="!w-[270px]">
                <Image
                  src={item.img}
                  width={250}
                  height={427}
                  alt="slide"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Dots */}
          <div className="flex  gap-[10px] md:gap-[20px] justify-center mt-[-10px] items-center">
            {dot.map((item, index) => (
              <div key={index}>
                <Image
                  className={`${
                    index === activeIndex
                      ? "w-[22px] h-[22px] "
                      : "w-[10px] h-[10px]"
                  }`}
                  src={
                    index === activeIndex
                      ? "/assetes/png/yellow-dot.png" // Yellow dot image
                      : item.img // Default dot image
                  }
                  width={10}
                  height={10}
                  alt={"dot"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sharing;

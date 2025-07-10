"use client";
import React from "react";
import { coinData } from "../helper/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

function Coinspeaker() {
  return (
    <section>
      <div className="bg-[#19172F] py-[10px]">
        <div className="border-t border-[#C2BF28] border-dashed border-b py-[28px]">
          <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-20 mx-auto">
            <Swiper
              className="items-center flex"
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={6}
              spaceBetween={48}
              loop={true}
              autoplay={{ delay: 2000 }}
            >
              {coinData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item.img}
                    width={160}
                    height={40}
                    alt={"coinimg"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coinspeaker;

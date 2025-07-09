"use client";
import React from "react";
import { coinData } from "../helper/Helper";
import Image from "next/image";

function Coinspeaker() {
  return (
    <>
      <section>
        <div className="bg-[#19172F] py-[10px]">
          <div className="border-t border-[#C2BF28] border-dashed border-b py-[28px]">
            <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-20 mx-auto">
              <div className="flex items-center gap-4 md:gap-5 lg:gap-8 xl:gap-12 overflow-hidden overscroll-auto">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerVeiw={7}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                  }}
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
        </div>
      </section>
    </>
  );
}

export default Coinspeaker;

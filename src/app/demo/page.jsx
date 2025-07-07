"use client";
import React, { useState } from "react";

import { tabs, tabsData } from "../components/helper/Helper";
import Heading from "../components/common/Heading";
import Para from "../components/common/Para";
import Image from "next/image";

function Vision() {
  const [activetab, setActiveTab] = useState("tab1");

  return (
    <section className="py-[120px] bg-[#19172F]">
      <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
        {/* -------- Section Heading -------- */}
        <div className="text-center">
          <Heading
            className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-[39px] !font-bold leading-[120%]"
            title="Vision, Mission & Focus"
          />
          <div className="flex justify-center mx-auto mt-4">
            <Image
              src="/assets/png/line2.png"
              width={491}
              height={5}
              alt="line"
            />
          </div>
          <Para
            className="max-w-[831px] text-center mx-auto mt-5 !text-sm md:!text-base lg:!text-lg text-[#9E9AB4]"
            subtitle="We aspire to create a trusted and entertaining ecosystem where players from around the world can enjoy a diverse range of crypto-based casino games while reaping the benefits of blockchain technology"
          />
        </div>

        {/* -------- Tab Buttons -------- */}
        <div className="mt-10 ml-[50px] flex flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-[5px] py-[11px] px-[27px] transition-all duration-300 ${
                activetab === tab.id
                  ? "bg-[#C2BF28] text-[#2D2A4B]"
                  : "bg-[#2B2848] text-[#9E9AB4]"
              }`}
            >
              {tab.Label}
            </button>
          ))}
        </div>

        {/* -------- Tab Content -------- */}
        <div className="mt-12">
          {tabsData[activetab]?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-between items-start gap-[30px] lg:gap-[100px] mt-[30px]"
            >
              {/* Left Side Content */}
              <div className="w-full max-w-[600px]">
                <Heading
                  className="!text-xl md:!text-2xl lg:!text-[31px] !font-bold"
                  title={item.title}
                />
                <Image
                  src={item.img}
                  width={175}
                  height={6}
                  alt="line"
                  className="mt-2"
                />
                <Para
                  className="!text-[#9E9AB4] !text-sm md:!text-base lg:!text-lg leading-[160%] mt-[30px]"
                  subtitle={item.para}
                />

                {/* Tab 1 has extra para2 and image */}
                {activetab === "tab1" ? (
                  <>
                    <Para
                      className="!text-[#9E9AB4] !text-sm md:!text-base lg:!text-lg leading-[160%] mt-[15px]"
                      subtitle={item.para2}
                    />
                  </>
                ) : (
                  <>
                    {item.subData?.map((subItem, subIndex) => (
                      <div key={subIndex} className="mt-4">
                        <Para
                          className="!text-white font-semibold text-base"
                          subtitle={subItem.subtitle}
                        />
                        <Para
                          className="!text-[#9E9AB4] text-sm"
                          subtitle={subItem.para}
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Right Side Image (Only for tab1) */}
              {activetab === "tab1" && item.src && (
                <div className="w-full max-w-[524px] mx-auto">
                  <Image
                    src={item.src}
                    width={524}
                    height={524}
                    alt="tab image"
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vision;

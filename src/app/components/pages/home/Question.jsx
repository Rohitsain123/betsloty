"use client";
import React, { useState } from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import { accordianData } from "../../helper/Helper";
import Para from "../../common/Para";
import { ArrowIcon } from "../../helper/Icon";

function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#100F1F] pt-[20px] md:pt-[40px] lg:pt-[60px] pb-[40px] md:pb-[0px] lg:pb-[110px]">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <Heading
            className={"!text-2xl md:!text-3xl lg:!text-[39px] text-center"}
            title={"Frequently Asked"}
            sapntitle={"Questions"}
          />
          <div className="flex justify-center">
            <Image
              src={"/assetes/png/line2.png"}
              width={656}
              height={4}
              alt={"line"}
            />
          </div>

          <div className="mt-[30px] lg:mt-[70px]">
            {accordianData.map((item, index) => (
              <div className="mb-4 lg:mb-[25px]" key={index}>
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex gap-[10px] items-center justify-between !text-sm md:!base lg:!text-lg bg-[#1C1A33] py-[10px] md:py-[15px] lg:py-[23px] px-[10px] md:px-[20px] lg:px-[30px] border border-[#4C496D] rounded-[10px] cursor-pointer"
                >
                  <Para subtitle={item.title} />

                  <div
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon />
                  </div>
                </div>

                {/* Content */}
                {openIndex === index && (
                  <div className="bg-[#15132B] px-[10px] md:px-[20px] lg:px-[30px] py-[10px] md:py-[16px] lg:py-[26px] text-[#9E9AB4] !text-[12px] md:!text-sm lg:!text-base leading-[1.6] border border-t-0 border-[#4C496D] rounded-b-[10px]">
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;

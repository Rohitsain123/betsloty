"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "./Heading";
import Para from "./Para";
import { tabs, tabsData } from "../helper/Helper";
import { alegreya } from "../../layout";

function Vision() {
  const [activetab, setActiveTab] = useState("tab1");
  return (
    <>
      <section id="vision">
        <div className="py-[40px] md:py-[80px] lg:py-[120px] bg-[#19172F]">
          <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
            <div className="text-center">
              <Heading
                className={`!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-[39px] !font-bold leaading-[120%] ${alegreya.className}`}
                title={"Vision, Mission & Focus"}
              />
              <div className="flex justify-center mx-auto mt-1 md:mt-[10px]">
                <Image
                  src={"/assetes/png/line2.png"}
                  width={491}
                  height={5}
                  alt={"line2"}
                />
              </div>

              <Para
                className={
                  "max-w-[841px] !text-[#9E9AB4] text-center mx-auto mt-5 !text-sm md:!text-base lg:!text-lg"
                }
                subtitle={
                  "We aspire to create a trusted and entertaining ecosystem where players from around the world can enjoy a diverse range of crypto-based casino games while reaping the benefits of blockchain technology"
                }
              />
            </div>
            <div className="mt-15 flex ml-0 xl:ml-[80px] rounded-[5px]  overflow-scroll hide-scrollbar  max-w-[500px]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={` !text-sm md:!text-base text-nowrap py-[7px] md:py-[11px] px-[17px] md:px-[27px] ${
                    activetab === tab.id
                      ? "bg-[#C2BF28] text-[#2D2A4B] rounded-[5px]"
                      : "bg-[#2B2848] text-[#9E9AB4]"
                  }`}
                >
                  {tab.Label}
                </button>
              ))}
            </div>
            <div>
              {tabsData[activetab]?.map((item, index) => (
                <div
                  className="flex flex-wrap-reverse lg:flex-nowrap justify-center items-center gap-[50px] xl:gap-[100px] mt-[30px]"
                  key={index}
                >
                  <div className="w-full lg:max-w-[480px]">
                    <Heading
                      className={
                        "!text-xl md:!text-2xl lg:!text-[31px] !font-bold"
                      }
                      title={item.title}
                    />
                    <Image
                      src={item.img}
                      width={175}
                      height={6}
                      alt={"line2"}
                    />
                    <Para
                      className={
                        "!text-[#9E9AB4] !text-sm md:!text-base leading-[160%] mt-[10px] lg:mt-[30px]"
                      }
                      subtitle={item.para}
                    />
                    {activetab === "tab1" ? (
                      <Para
                        className={
                          "!text-[#9E9AB4] !text-sm md:!text-base leading-[160%] mt-[7px] lg:mt-[15px]"
                        }
                        subtitle={item.para2}
                      />
                    ) : (
                      <>
                        {item.subData?.map((subitem, subindex) => (
                          <div
                            key={subindex}
                            className={`${
                              subindex === 0
                                ? "mt-[20px] lg:mt-[35px]"
                                : "mt-[8px] lg:mt-[15px]"
                            }`}
                          >
                            <Para className={""} subtitle={subitem.subtitle} />
                            <Para
                              className={"!text-[#9E9AB4] !text-base"}
                              subtitle={subitem.para}
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <Image
                      src={item.src}
                      width={475}
                      height={454}
                      alt={"img"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vision;

"use client";
import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { alegreya } from "@/app/layout";
import "./RangeSlider.css";

import Heading from "./Heading";
import Loginbtn from "./Loginbtn";
import Para from "./Para";
import { ellipseData } from "../helper/Helper";
import { MsgIcon } from "../helper/Icon";

function CommonHero() {
  const [price, setPrice] = useState(19);
  const sliderRef = useRef(null);

  // Update slider fill bg whenever price changes
  useEffect(() => {
    if (sliderRef.current) {
      const percent = ((price - 19) / (50000 - 19)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #facc15 0%, #facc15 ${percent}%, #000 ${percent}%, #000 100%)`;
    }
  }, [price]);

  return (
    <section>
      <div className="hero-bg">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-15 xl:px-[80px] mx-auto pt-[30px] md:pt-[50px] lg:pt-[73px] pb-[30px] md:pb-15 lg:pb-[90px]">
          <div className="flex justify-center md:justify-between items-center gap-[20px] flex-wrap md:flex-nowrap ">
            <div className="max-w-[571px]">
              <Heading
                className={`${alegreya.className}`}
                title={
                  "Betsloty Casino Your Safe Haven for Online Crypto Gambling"
                }
                sapntitle={"Join Now"}
              />
              <Para
                className={"mt-[10px] md:mt-[15px] lg:mt-[30px]"}
                subtitle={
                  "Discover the ultimate destination for online crypto gambling at Betsloty Casino. With full licensing and a commitment to 100% safety, your gaming experience is secure and exhilarating."
                }
              />
              <div className="flex gap-[15px] mt-[10px] md:mt-[20px] lg:mt-10">
                <Loginbtn
                  className="bg-[#C2BF28] !text-[#2D2A4B] font-bold hover:!bg-[#2D2A4B] hover:!text-[#fff] border-[#C2BF28] border !text-sm md:!text-base lg:!text-lg !py-[10px] lg:py-[15px] !px-5 lg:!px-10"
                  title={"SIGN UP"}
                />
                <Loginbtn
                  className="border border-[#C2BF28] !py-[10px] lg:py-[15px] !px-5 lg:!px-10 !text-sm md:!text-base lg:!text-lg"
                  title={"LOGIN"}
                />
              </div>
            </div>
            <div className="form-bg">
              <div className="px-[20px] sm:px-[30px] pt-[20px] sm:pt-[30px] pb-[17px] w-[300px] sm:w-[408px]  h-[430px] sm:h-[520px] md:h-[530px] lg:h-[550px]">
                <div className="flex gap-2 sm:gap-4 justify-center">
                  {ellipseData.map((item, index) => (
                    <div key={index}>
                      <Image
                        src={item.img}
                        width={68}
                        height={68}
                        alt={"ellipse"}
                      />
                      <div className="text-center mt-[-45px] sm:mt-[-50px]">
                        <Para
                          className={"!text-[12px] sm:!text-sm"}
                          subtitle={item.title}
                        />
                        <Para
                          className={"!text-[7px] !text-[#9E9AB4]"}
                          subtitle={item.para}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 sm:pt-4">
                  <div className="flex justify-between mt-3 sm:mt-4">
                    <label className="block mb-2 text-[#FAFAFF] font-normal text-[13px] max-w-[90px] ">
                      Current Price: ${price}
                    </label>
                    <label className="block mb-2 text-[#FAFAFF] font-normal text-[13px] max-w-[90px] text-end">
                      Final Goal: $50,000
                    </label>
                  </div>
                  <input
                    ref={sliderRef}
                    type="range"
                    min={19}
                    max={50000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="custom-slider w-full"
                  />
                </div>

                <div className="mt-[5px] sm:mt-[14px] mx-auto">
                  <Image
                    src="/assetes/png/line2.png"
                    width={350}
                    height={3}
                    alt="line"
                  />
                </div>

                <Para
                  className={`!text-sm md:!text-[20px] lg:!text-[25px] !font-bold leading-[150%] text-center mt-[6px] sm:mt-[11px] ${alegreya.className}`}
                  subtitle={"$TGC IS NOW SOLD OUT!"}
                />
                <Para
                  className="!text-[12px] md:!text-sm lg:!text-base !font-normal text-center mt-[5px] sm:mt-[10px]"
                  subtitle={"Network launch on 4th January 202 7 pm CET"}
                />

                <form className="mt-2 sm:mt-5 flex items-center justify-between w-[280px] sm:w-[324px]">
                  <input
                    className="!text-[#9E9AB4] !text-sm !font-normal pe-[90px] sm:pe-[172px] ps-[15px] py-[8px] border rounded-[5px] border-[#C2BF28]"
                    type="text"
                    placeholder="0x12848d8ss8ddf.....3id8d8ssf"
                  />
                  <div className="ml-[-40px] hidden sm:block">
                    <MsgIcon />
                  </div>
                </form>

                <div className="mt-3 sm:mt-5 flex gap-[7px] sm:gap-[10px]">
                  <Loginbtn
                    className="!text-[#2D2A4B] !bg-[#C2BF28] px-[30px] sm:!px-[43px] !rounded-[5px] !text-[12px] sm:!text-sm max-w-[200px] hover:!text-[#fff] hover:!bg-[#2B2848] border border-[#C2BF28]"
                    title={"Buy on Uniswap"}
                  />
                  <Loginbtn
                    className="!text-[#fff] !text-[12px] sm:!text-sm !rounded-[5px] border border-[#C2BF28] px-[22px] sm:!px-[39px] hover:!text-[#2D2A4B]"
                    title={"View chart"}
                  />
                </div>

                <div className="mt-3 sm:mt-5 w-[255px] sm:w-[350px] flex">
                  <Loginbtn
                    className="!text-base !font-medium !px-[55px] text-center w-[100%] bg-[#C2BF28] !text-[#2D2A4B] hover:!text-[#fff] hover:!bg-[#2B2848] border border-[#C2BF28]"
                    title={"Connect wallet"}
                  />
                </div>

                <Para
                  className=" mt-[18px] text-center !text-[13px]"
                  subtitle={"Current Staking APY: 119.21%"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonHero;

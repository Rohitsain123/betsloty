import Image from "next/image";
import React from "react";
import Para from "./Para";
import { footerIcon, footerLink } from "../helper/Helper";
import Link from "next/link";
import Heading from "./Heading";

function Footer() {
  return (
    <>
      <div className="bg-[#131126] pt-0 lg:pt-[30px]">
        <div className="border-t border-[#4C496D]">
          <div className="pt-5 lg:pt-[50px] pb-5 lg:pb-[45px] max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-7 lg:gap-10 md:gap-4 justify-between">
              <div className="w-[100%] md:w-[40%]">
                <Link href={"/"}>
                  <Image
                    src={"/assetes/png/logo.png"}
                    width={210}
                    height={45}
                    alt={"logo"}
                  />
                </Link>
                <Para
                  className={
                    "w-full md:max-w-[440px] mt-[15px] md:mt-[30px] !text-sm md:!text-base !text-[#9E9AB4] leading-[150%]"
                  }
                  subtitle={
                    " Experience the excitement of playing online slot machines from the comfort of your own home. With our huge selection of slot games that have stunning graphics and suspens."
                  }
                />
                <Para
                  className={
                    "!text-base md:!text-xl g:!text-[25px] leading-[150%] mt-[15px] md:mt-[30px]"
                  }
                  subtitle={"Join us in social media"}
                />
                <div className="flex mt-[15px] gap-[15px]">
                  {footerIcon.map((item, index) => (
                    <div
                      className="hover:scale-120 transition-transform duration-300"
                      key={index}
                    >
                      <Link href={item.path} target="blank">
                        <Image
                          src={item.link}
                          width={35}
                          height={35}
                          alt={"icon"}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-[30px] md:gap-[10px] justify-between w-[100%] md:w-[58%]">
                {footerLink.map((item, index) => (
                  <div key={index}>
                    <Heading
                      className={"!text-lg md:!text-xl lg:!text-[25px]"}
                      title={item.title}
                    />
                    {item.subLinks.map((i, index) => (
                      <div key={index}>
                        <Para
                          className={
                            "!text-[#9E9AB4] !text-sm md:1text-base lg:!text-lg !font-normal leading-[150%] mt-[10px] hover:!text-[#fff] transition-all duration-300 cursor-pointer md:mt-[20px]"
                          }
                          subtitle={i.link}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>{" "}
          </div>{" "}
          <div>
            <Para
              className={
                "!text-[#9E9AB4] !text-sm md:!text-base lg:!text-lg text-center pt-[26px] pb-[30px] border border-t"
              }
              subtitle={"© Betsloty 2023. All rights reserved"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";
import { cardData, rightcardData } from "../../helper/Helper";
import { alegreya } from "@/app/layout";

function Roadmap() {
  return (
    <>
      <div className="bg-[#100F1F] pt-[50px] md:pt-[90] lg:pt-[120px] pb-[50px] md:pb-[80px] lg:pb-[110px]">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <div>
            <Heading
              className={"!text-xl md:!text-3xl lg:!text-[39px] text-center"}
              title={"Roadmap"}
            />
            <div className="flex justify-center">
              <Image
                src={"/assetes/png/line2.png"}
                width={264}
                height={2}
                alt={"line"}
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-8 mt-[40px] lg:mt-[75px]">
              {/* Left */}
              <div className="w-full lg:w-[43%]  ">
                {cardData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative bg-cover bg-no-repeat bg-left w-full h-auto px-4 py-6 sm:px-6 md:px-8    ${
                      index === 0
                        ? "py-[20px] sm:py-[42px] ps-4 sm:ps-10 pe-[30px] sm:pe-[104px] w-[510px] h-[267px]"
                        : ""
                    }
                          ${
                            index === 1
                              ? "mt-[20px] sm:mt-[30px] lg:mt-[134px] w-[510px] h-[267px] py-[20px] sm:py-[42px] ps-4 sm:ps-10 pe-[30px] sm:pe-[66px]"
                              : ""
                          } 
                          ${
                            index === 2
                              ? "mt-[20px] md:mt-[30px] lg:mt-[134px] w-[510px] h-[384px] py-[20px] sm:py-[34px] ps-5 sm:ps-[30px] pe-[10px] sm:pe-[19px]"
                              : ""
                          }`}
                    style={{
                      backgroundImage: `url('/assetes/png/cardbg.png')`,
                      backgroundSize: `100% 100%`,
                    }}
                  >
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute !w-[90px] xl:!w-[106px] right-[-90px] xl:right-[-104px] top-[50%] -translate-y-1/2">
                      <Image
                        src={item.src}
                        width={106}
                        height={36}
                        alt="line"
                      />
                    </div>

                    <Heading
                      className={`!text-base md:!text-xl lg:!text-[25px] mb-[10px] ${alegreya.className}`}
                      title={item.title}
                    />
                    {item.subpara.map((i, subindex) => (
                      <Para
                        key={subindex}
                        className="!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] leading-[160%]"
                        subtitle={i.para}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Center line */}
              <div className="hidden lg:flex justify-center">
                <div className="bg-[#4C496D] w-[2px] h-full"></div>
              </div>

              {/* Right */}
              <div className="w-full lg:w-[43%]  ">
                {rightcardData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative bg-cover bg-no-repeat w-full h-auto px-4 py-6 sm:px-6 md:px-8 ${
                      index === 0
                        ? "py-[18px] sm:py-[27px] ps-[25px] sm:ps-[50px] pe-4 sm:pe-8 w-[510px] h-[267px] mt-[20px] md:mt-[30px] lg:mt-[120px]"
                        : ""
                    }
                      ${
                        index === 1
                          ? "px-[15px] sm:px-[30px] py-[20px] sm:py-[23px] mt-[20px] md:mt-[30px] lg:mt-[134px] w-[510px] h-[267px]"
                          : ""
                      }
                      ${
                        index === 2
                          ? "py-[20px] sm:py-[40px] ps-[18px] sm:ps-[30px] pe-[20px] sm:pe-[44px] mt-5 md:mt-[30px] lg:mt-[192px] w-[510px] h-[267px]"
                          : ""
                      }`}
                    style={{
                      backgroundImage: `url('/assetes/png/rightcardbg.png')`,
                      backgroundSize: `100% 100%`,
                    }}
                  >
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute !w-[90px] xl:!w-[106px] left-[-90px] xl:left-[-104px] top-[50%] -translate-y-1/2">
                      <Image
                        src={item.src}
                        width={106}
                        height={36}
                        alt="line"
                      />
                    </div>

                    <Heading
                      className={`!text-base md:!text-xl lg:!text-[25px] mb-[5px] sm:mb-[10px] ${alegreya.className}`}
                      title={item.title}
                    />
                    {item.subpara.map((i, subindex) => (
                      <Para
                        key={subindex}
                        className="!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] leading-[160%]"
                        subtitle={i.para}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;

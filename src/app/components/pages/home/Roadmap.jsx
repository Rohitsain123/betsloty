import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";
import { cardData, rightcardData } from "../../helper/Helper";
import { alegreya } from "@/app/layout";

function Roadmap() {
  return (
    <>
      <div className="bg-[#100F1F] pt-[60px] md:pt-[90] lg:pt-[120px] pb-[50px] md:pb-[80px] lg:pb-[110px]">
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
            <div className="mt-[75px]">
              <div className="flex   !justify-between">
                <div className="w-[43%]">
                  {cardData.map((item, index) => (
                    <div
                      className={`bg-cover bg-left bg-no-repeat relative
                          ${
                            index === 0
                              ? "py-[42px] ps-10 pe-[104px] w-[510px] h-[267px]"
                              : ""
                          }
                          ${
                            index === 1
                              ? "mt-[134px] w-[510px] h-[267px] py-[42px] ps-10 pe-[66px]"
                              : ""
                          } 
                          ${
                            index === 2
                              ? "mt-[134px] !w-[510px] h-[384px] py-[34px] ps-[30px] pe-[19px]"
                              : ""
                          }`}
                      style={{
                        backgroundImage: `url('/assetes/png/cardbg.png')`,
                        backgroundSize: `100% 100%`,
                      }}
                      key={index}
                    >
                      <div
                        className={`absolute right-[-104px] top-[100px] ${
                          index === 2 ? "top-[150px]" : ""
                        }`}
                      >
                        <Image
                          src={item.src}
                          width={106}
                          height={36}
                          alt={"line"}
                        />
                      </div>
                      <Heading
                        className={`!text-base md:!text-xl lg:!text-[25px] mb-[10px] ${alegreya.className}`}
                        title={item.title}
                      />

                      {item.subpara.map((i, subindex) => (
                        <div key={subindex}>
                          <Para
                            className={
                              "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] !font-normal leading-[160%]"
                            }
                            subtitle={i.para}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="bg-[#4C496D] w-[2px] h-[1261px]   "></div>{" "}
                </div>
                <div className="w-[43%] ">
                  {rightcardData.map((item, index) => (
                    <div
                      className={`relative ${
                        index === 0
                          ? "py-[27px] ps-[50px] pe-8 w-[510px] h-[267px] mt-[120px]"
                          : ""
                      }
                      ${
                        index === 1
                          ? "px-[30px] py-[23px] mt-[134px] w-[510px] h-[267px]"
                          : ""
                      }
                      ${
                        index === 2
                          ? "py-[40px] ps-[30px] pe-[44px] mt-[192px] w-[510px] h-[267px]"
                          : ""
                      }
                      `}
                      style={{
                        backgroundImage: `url('/assetes/png/rightcardbg.png')`,
                        backgroundSize: `100% 100% `,
                      }}
                      key={index}
                    >
                      <div className="absolute left-[-104px]  top-27">
                        <Image
                          src={item.src}
                          width={106}
                          height={36}
                          alt={"line"}
                        />
                      </div>
                      <Heading
                        className={`!text-base md:!text-lg lg:!text-[25px] mb-[10px] ${alegreya.className}`}
                        title={item.title}
                      />
                      {item.subpara.map((i, subindex) => (
                        <div key={subindex}>
                          <Para
                            className={
                              "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4]"
                            }
                            subtitle={i.para}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;

import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";
import { walletCard } from "../../helper/Helper";
import { alegreya } from "@/app/layout";

function Buy() {
  return (
    <>
      <div className="bg-[#100F1F] py-[40px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <Heading
            className={`!text-2xl md:!text-3xl lg:!text-[39px] text-center ${alegreya.className}`}
            title={"How to Buy"}
          />
          <div className="flex justify-center">
            <Image
              src={"/assetes/png/line2.png"}
              width={264}
              height={2}
              alt={"line"}
            />
          </div>
          <Para
            className={
              "mt-[17px] text-center !text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] leading-[160%]"
            }
            subtitle={
              "A STEP-BY-STEP WALKTHROUGH ON HOW TO PURCHASE $CHANCER TOKENS."
            }
          />
          <div className="mt-9 lg:mt-15 relative">
            <div className="absolute left-65 top-7 hidden xl:block">
              <Image
                src={"/assetes/png/cardline.png"}
                width={270}
                height={63}
                alt={"line"}
              />
            </div>
            <div className="absolute right-65 top-14 hidden xl:block">
              <Image
                src={"/assetes/png/cardline2.png"}
                width={270}
                height={63}
                alt={"line"}
              />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-[30px] lg:gap-[20px]">
              {walletCard.map((item, index) => (
                <div
                  className={`bg-cover bg-no-repeat bg-center w-[320px] md:w-[350px] lg:w-[376px] h-[320px] md:h-[380px] lg:h-[441px] px-[20px] xl:px-[44px] pt-[30px] lg:pt-[50px] pb-[30px] lg:pb-[50px]`}
                  style={{
                    backgroundImage: `url(${item.bgimg})`,
                    backgroundPosition: "center",
                    backgroundSize: `100% 100%`,
                  }}
                  key={index}
                >
                  <div className="flex justify-center">
                    <Image src={item.img} width={50} height={50} alt={"img"} />
                  </div>
                  <Heading
                    className={`!text-base md:!text-xl lg:!text-[25px] mt-[15px] lg:mt-[30px] text-center ${alegreya.className}`}
                    sapntitle={item.title}
                  />
                  <div className="mt-2 lg:mt-4">
                    {item.para.map((paraObj, pIndex) => (
                      <p
                        key={pIndex}
                        className="w-full xl:max-w-[285px] text-center !text-sm md:!text-base lg:!text-base !text-[#9E9AB4] leading-[160%] mb-2"
                      >
                        {paraObj.parts.map((part, partIndex) => (
                          <span
                            key={partIndex}
                            className={
                              part.color === "blue"
                                ? "text-[#2A60EC] font-normal"
                                : "text-[#9E9AB4]"
                            }
                          >
                            {part.text}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;

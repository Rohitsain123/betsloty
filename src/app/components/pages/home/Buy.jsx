import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";
import { walletCard } from "../../helper/Helper";

function Buy() {
  return (
    <>
      <div className="bg-[#100F1F] py-[40px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <Heading
            className={"!text-2xl md:!text-3xl lg:!text-[39px] text-center"}
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
            <div className="absolute left-65 top-7">
              <Image
                src={"/assetes/png/cardline.png"}
                width={270}
                height={63}
                alt={"line"}
              />
            </div>
            <div className="absolute right-65 top-14">
              <Image
                src={"/assetes/png/cardline2.png"}
                width={270}
                height={63}
                alt={"line"}
              />
            </div>
            <div className="flex justify-between gap-[10px]">
              {walletCard.map((item, index) => (
                <div
                  className={`bg-cover bg-no-repeat bg-center w-[376px] h-[441px] px-[34px] pt-[50px]`}
                  style={{
                    backgroundImage: `url(${item.bgimg})`,
                    backgroundPosition: "center",
                  }}
                  key={index}
                >
                  <div className="flex justify-center">
                    <Image src={item.img} width={50} height={50} alt={"img"} />
                  </div>
                  <Heading
                    className={
                      "!text-base md:!text-xl lg:!text-[25px] mt-[30px] text-center"
                    }
                    sapntitle={item.title}
                  />
                  <div className="mt-4">
                    {item.para.map((paraObj, pIndex) => (
                      <p
                        key={pIndex}
                        className="max-w-[285px] text-center !text-sm md:!text-base lg:!text-base !text-[#9E9AB4] leading-[160%] mb-2"
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

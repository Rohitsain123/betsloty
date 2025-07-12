import React from "react";
import { stakingData } from "../../helper/Helper";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";

function Staking() {
  return (
    <>
      <div className="bg-[#100F1F] pt-[0px] md:pt-[30px] lg:pt-[65px] pb-[40px] md:pb-[80px] lg:pb-[115px] z-[1]">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <div>
            {stakingData.map((item, index) => (
              <div key={index}>
                <Heading
                  className={
                    "!text-xl md:!text:3xl lg:!text-[39px] text-center"
                  }
                  title={item.title}
                />
                <div className="flex justify-center">
                  <Image src={item.src} width={264} height={2} alt={"line"} />
                </div>
                <Para
                  className={
                    "!text-[#9E9AB4] text-center !text-sm md:!text-base lg:!text-lg !font-normal leading-[160%] max-w-[750px] mx-auto mt-[15px]"
                  }
                  subtitle={item.para}
                />
                <div className="mt-15 flex flex-wrap xl:flex-nowrap gap-5 md:gap-[40px] xl:gap-[10px] justify-center xl:justify-between">
                  {item.cardData.map((i, subindex) => (
                    <div
                      className={`bg-no-repeat bg-cover bg-center max-w-[260px] sm:max-w-[376px] h-[300px] sm:h-[438px] pt-[30px] sm:pt-[51px] ps-[15px] sm:ps-[30px] pe-[15px] sm:pe-[34px]`}
                      style={{
                        backgroundImage: `url(${item.bgimg})`,
                        backgroundPosition: "center",
                        backgroundSize: `100% 100%`,
                      }}
                      key={subindex}
                    >
                      <Heading
                        className={"!text-base md:!text-lg lg:!text-[21px]  "}
                        title={i.title}
                      />
                      <Para
                        className={
                          "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] mt-1 sm:mt-4 w-full lg:max-w-[291px]"
                        }
                        subtitle={i.para}
                      />
                      <Para
                        className={
                          "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] mt-[4px] sm:mt-[10px] w-full lg:max-w-[291px]"
                        }
                        subtitle={i.para2}
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Staking;

import React from "react";
import Heading from "../../common/Heading";
import { airDrop } from "../../helper/Helper";
import Image from "next/image";
import Para from "../../common/Para";

function Airdrop({ imgClass }) {
  return (
    <>
      <div className="bg-[#100F1F] py-[40px] md:py-[80px] lg:py-[115px]">
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <div>
            {airDrop.map((item, index) => (
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
                <div
                  className="mt-[30px] md:mt-12 lg:mt-15 flex flex-wrap lg:flex-nowrap gap-[30px] xl:gap-[20px] justify-center lg:justify-between
                "
                >
                  {item.cardData.map((i, subindex) => (
                    <div
                      className={`bg-no-repeat bg-cover bg-center w-[450px] md:w-[582px] h-[200px] md:h-[267px] pt-[20px] md:pt-[30px] ps-[30px] pe-[35px] lg:pe-[76px] z-1`}
                      style={{
                        backgroundImage: `url(${item.bgimg})`,
                        backgroundPosition: "center",
                        backgroundSize: `100% 100%`,
                      }}
                      key={subindex}
                    >
                      <Heading
                        className={"!text-lg md:!text-[21px] lg:!text-[25px]  "}
                        title={i.title}
                      />
                      <Para
                        className={
                          "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] mt-1 md:mt-4"
                        }
                        subtitle={i.para}
                      />
                      <Para
                        className={
                          "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] mt-1 md:mt-[10px]"
                        }
                        subtitle={i.para2}
                      />{" "}
                      <Para
                        className={
                          "!text-sm md:!text-base lg:!text-lg !text-[#9E9AB4] mt-1 md:mt-[10px]"
                        }
                        subtitle={i.para3}
                      />
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

export default Airdrop;

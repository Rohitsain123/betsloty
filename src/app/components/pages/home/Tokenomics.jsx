import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";
import { tokenData } from "../../helper/Helper";
import { alegreya } from "../../../layout";

function Tokenomics() {
  return (
    <>
      <section id="tokenomics">
        <div className="bg-[#19172F] pt-[40px] md:pt-[70px] lg:pt-[100px] pb-[-100px] sm:pb-[-80px] md:pb-[-50px] lg:pb-[40px]">
          <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
            <Heading
              className={`!text-xl md:!text-3xl lg:!text-[39px] leading-[120%] text-center ${alegreya.className}`}
              title={"Tokenomics"}
            />
            <div className="flex justify-center mt-1 md:mt-[10px]">
              <Image
                src={"/assetes/png/line2.png"}
                width={491}
                height={5}
                alt={"line"}
              />
            </div>
            <Para
              className={
                "!text-[#9E9AB4] !text-sm md:!text-base lg:!text-lg leading-[160%] text-center max-w-[800px] mx-auto mt-4 mb-0 xl:mb-[-60px]"
              }
              subtitle={
                "The tokenomics of $BST is carefully designed to drive utility, incentivize player engagement, ensure sustainability, and enhance platform growth. It reflects Betsloty Casino commitment to creating a balanced ecosystem where all stakeholders, from players to investors, benefit."
              }
            />
            <div>
              <div
                className={`flex flex-wrap lg:flex-nowrap  gap-[50px] lg:gap-[30px] items-center justify-center lg:justify-between  `}
              >
                <div
                  className={`mb-[-100px] sm:mb-[-150px] lg:mb-0 bg-[url('/assetes/png/tokenbgline.png')] bg-cover   w-[40%]  bg-left`}
                >
                  <Heading
                    className={
                      "!text-[#FAFAFF] !text-lg md:!text-2xl lg:!text-[31px] leading-[10%] mt-10 text-center"
                    }
                    title={"Token Specifications"}
                  />
                  <div className="bg-token w-[280px] sm:w-[376px] background-size-[100%] h-[300px] sm:h-[376px] md:h-[380px] lg:h-[415px] mt-5">
                    <div className="py-[20px] lg:py-[30px] ps-[20px] lg:ps-[30px] pe-[20px]">
                      {tokenData.map((item, index) => (
                        <div key={index}>
                          <Para
                            className={
                              "!text-[#FAFAFF] opacity-[0.8] !text-sm md:!text-base lg:!text-lg mt-2 lg:mt-4"
                            }
                            subtitle={item.para}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <Image
                    src={"/assetes/svg/graph.svg"}
                    width={747}
                    height={515}
                    alt={"graph"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tokenomics;

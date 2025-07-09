import Image from "next/image";
import React from "react";
import Heading from "../../common/Heading";

function Sharing() {
  return (
    <>
      <div className="bg-[#19172F] py-[40px] md:py-[70px] lg:py-[100px] relative">
        <div className="absolute top-0">
          <Image
            src={"/assetes/png/bgline.png"}
            width={1513}
            height={538}
            alt={"bgimg"}
          />
        </div>
        <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-12 xl:px-[80px] mx-auto">
          <div className="">
            <Heading
              className={
                "!text-2xl md:!text-3xl lg:!text-[39px] text-center leading-[120%]"
              }
              title={"Betting and Social Sharing"}
            />
            <div className="flex justify-center">
              <Image
                src={"/assetes/png/line2.png"}
                width={304}
                height={2}
                alt={"line"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sharing;

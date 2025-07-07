import React from "react";
import Heading from "../../common/Heading";
import Image from "next/image";
import Para from "../../common/Para";

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
              <div className="flex">
                <div className="  bg-[#4C496D] w-[2px] h-[1261px] mx-auto "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;

import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Loginbtn from "./Loginbtn";
import { ellipseData } from "../helper/Helper";
import Image from "next/image";
import { MsgIcon } from "../helper/Icon";

function CommonHero() {
  return (
    <>
      <section>
        <div className="hero-bg">
          <div className="max-w-[1352px] px-4 sm:px-6 md:px-9 lg:px-15 xl:px-[80px] mx-auto pt-[30px] md:pt-[50px] lg:pt-[73px] pb-[30px] md:pb-15 lg:pb-[90px]">
            <div className="flex justify-center md:justify-between items-center gap-[20px] flex-wrap md:flex-nowrap ">
              <div className="max-w-[571px]">
                <Heading
                  title={
                    "Betsloty Casino Your Safe Haven for Online Crypto Gambling"
                  }
                  sapntitle={"Join Now"}
                />
                <Para
                  className={"mt-[10px] md:mt-[15px] lg:mt-[30px]"}
                  subtitle={
                    "Discover the ultimate destination for online crypto gambling at Betsloty Casino. With full licensing and a commitment to 100% safety, your gaming experience is secure and exhilarating."
                  }
                />
                <div className="flex gap-[15px] mt-[10px] md:mt-[20px] lg:mt-10">
                  <Loginbtn
                    className={
                      "bg-[#C2BF28] !text-[#2D2A4B] font-bold hover:!bg-[#2D2A4B] hover:!text-[#fff] !text-sm md:!text-base lg:!text-lg !px-5 lg:!px-10"
                    }
                    title={"SIGN UP"}
                  />
                  <Loginbtn
                    className={
                      "border border-[#C2BF28] !px-5 lg:!px-10 !text-sm md:!text-base lg:!text-lg"
                    }
                    title={"LOGIN"}
                  />
                </div>
              </div>
              <div className="form-bg">
                <div className="px-[30px] pt-[30px] pb-[17px] max-w-[408px] h-[550px]">
                  <div className="flex gap-4 justify-center">
                    {ellipseData.map((item, index) => (
                      <div key={index}>
                        <Image
                          src={item.img}
                          width={68}
                          height={68}
                          alt={"ellipse"}
                        />
                        <div className="text-center mt-[-55px]">
                          <Para className={""} subtitle={item.title} />
                          <Para
                            className={"!text-[7px] !text-[#9E9AB4]"}
                            subtitle={item.para}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between">
                    <div>
                      <Para
                        className={"max-w-[76px] !text-[13px] !text-[#FAFAFF]"}
                        subtitle={"Current Price $0.19"}
                      />
                    </div>
                    <div>
                      <Para
                        className={
                          "max-w-[76px] !text-[13px] text-end !text-[#FAFAFF]"
                        }
                        subtitle={"Final Goal $5,000,000"}
                      />
                    </div>
                  </div>
                  <div className="mt-[7px]">
                    <Image
                      src={"/assetes/png/line1.png"}
                      width={323}
                      height={14}
                      alt={"line1"}
                    />
                  </div>
                  <div className="mt-[14px]">
                    <Image
                      src={"/assetes/png/line2.png"}
                      width={320}
                      height={3}
                      alt={"line3"}
                    />
                  </div>
                  <div>
                    <Para
                      className={
                        "!text-[25px] !font-bold leading-[150%] text-center mt-[11px]"
                      }
                      subtitle={"$TGC IS NOW SOLD OUT!"}
                    />
                    <Para
                      className={
                        "!text-base !font-normal text-center mt-[10px]"
                      }
                      subtitle={"Network launch on 4th January 202 7 pm CET"}
                    />
                  </div>
                  <div className="mt-5">
                    <form
                      className="flex items-center justify-between  bg-[#2B2848] px-3 py-[11px] rounded-[5px] border border-[#C2BF28] !max-w-[350px]"
                      action=""
                    >
                      <input
                        className="!text-[#9E9AB4] !text-sm !font-normal"
                        type="text"
                        placeholder="0x12848d8ss8ddf.....3id8d8ssf "
                      />{" "}
                      <div className="ml-[-20px]">
                        <MsgIcon />
                      </div>
                    </form>
                  </div>
                  <div className="mt-5 flex gap-[10px]">
                    <Loginbtn
                      className={
                        "!text-[#2D2A4B] !bg-[#C2BF28] !px-[50px] !rounded-[5px] !text-sm max-w-[200px]"
                      }
                      title={"Buy on Uniswap"}
                    />
                    <Loginbtn
                      className={
                        "!text-[#fff] !text-sm !rounded-[5px] border border-[#C2BF28] !px-[40px]"
                      }
                      title={"View chart"}
                    />
                  </div>
                  <div className="mt-5 w-[350px] flex">
                    <Loginbtn
                      className={
                        "!text-base !font-medium !px-[55px] text-center w-[100%] bg-[#C2BF28] !text-[#2D2A4B]"
                      }
                      title={"Connect wallet"}
                    />
                  </div>
                  <Para
                    className={" mt-[18px] text-center !text-[13px]"}
                    subtitle={"Current Staking APY: 119.21%"}
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

export default CommonHero;

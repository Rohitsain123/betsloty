"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLink } from "../helper/Helper";
import Loginbtn from "./Loginbtn";
import { CrossIcon, MenuIcon } from "../helper/Icon";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="bg-[#19172F]">
        <div className="max-w-[1410px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] pt-3 md:pt-4 lg:pt-5  pb-4 md:pb-6 lg:pb-[25px] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/assetes/png/logo.png"}
                  width={162}
                  height={34}
                  alt={"logo"}
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-5 xl:gap-[40px]">
                <ul className="p-0">
                  <li className="flex gap-[15px] xl:gap-[30px] p-0 m-0">
                    {navLink.map((item, index) => (
                      <div key={index}>
                        <Link
                          className="text-[#9E9AB4] text-sm xl:text-base leading-[150%] hover:text-[#C2BF28] hover:underline transition-all duration-300  "
                          href={item.path}
                        >
                          {item.link}
                        </Link>
                      </div>
                    ))}
                  </li>
                </ul>
                <div className="flex gap-[15px]">
                  <Loginbtn title={"Login"} />
                  <Loginbtn
                    className={
                      "bg-[#C2BF28] !text-[#2D2A4B] font-bold hover:!bg-[#2D2A4B] hover:!text-[#fff]"
                    }
                    title={"SIGN UP"}
                  />
                </div>
              </div>
            </div>
            <div onClick={toggle} className="block lg:hidden cursor-pointer">
              <MenuIcon />
            </div>
          </div>
          {/* sidebar */}
          {show && (
            <div className="w-[100%] sm:w-[60%]  right-0 top-0 fixed bg-[#19172F] h-[100%] pt-3 sm:pt-4 pb-4 px-4 sm:px-6 block lg:hidden">
              <div className="flex items-center justify-between sm:justify-end ">
                <div className="block sm:hidden">
                  <Image
                    src={"/assetes/png/logo.png"}
                    width={162}
                    height={34}
                    alt={"logo"}
                  />
                </div>
                <div onClick={toggle} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-[100%]">
                <ul>
                  <li className="flex flex-col text-center justify-center mx-auto gap-[15px] xl:gap-[30px]">
                    {navLink.map((item, index) => (
                      <div key={index}>
                        <Link
                          className="text-[#9E9AB4] text-sm xl:text-base leading-[150%] hover:text-[#C2BF28] hover:underline transition-all duration-300"
                          href={item.path}
                        >
                          {item.link}
                        </Link>
                      </div>
                    ))}
                  </li>
                </ul>
                <div className="flex flex-col mt-[10px] gap-[15px]">
                  <Loginbtn title={"Login"} />
                  <Loginbtn
                    className={
                      "bg-[#C2BF28] !text-[#2D2A4B] font-bold hover:!bg-[#2D2A4B] hover:!text-[#fff]"
                    }
                    title={"SIGN UP"}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

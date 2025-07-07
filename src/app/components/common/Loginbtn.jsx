import Link from "next/link";
import React from "react";

function Loginbtn({ title, className }) {
  return (
    <>
      <Link
        href={"//"}
        className={`bg-[#2D2A4B] py-[7px] xl:py-[10px] px-[10px] xl:px-[15px] text-[#fff] hover:bg-[#C2BF28] hover:text-[#2D2A4B] transition-all duration-300 font-medium text-sm xl:text-base rounded-[10px] ${className}`}
      >
        {title}
      </Link>
    </>
  );
}

export default Loginbtn;

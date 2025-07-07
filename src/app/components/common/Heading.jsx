import React from "react";

function Heading({ title, sapntitle, className }) {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[49px] font-bold leading-[120%] font-alegreya text-[#FAFAFF] ${className}`}
    >
      {title} <span className="text-[#C2BF28]">{sapntitle}</span>
    </h1>
  );
}

export default Heading;

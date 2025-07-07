import React from "react";

function Para({ subtitle, className }) {
  return (
    <p
      className={`text-[#FAFAFF] text-sm md:text-base lg:text-lg leading-[150%] ${className}`}
    >
      {subtitle}
    </p>
  );
}

export default Para;

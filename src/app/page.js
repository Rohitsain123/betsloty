import React from "react";
import CommonHero from "./components/common/CommonHero";
import Coinspeaker from "./components/common/Coinspeaker";
import Vision from "./components/common/Vision";
import Roadmap from "./components/pages/home/Roadmap";
import Tokenomics from "./components/pages/home/Tokenomics";

function page() {
  return (
    <>
      <CommonHero />
      <Coinspeaker />
      <Vision />
      <Roadmap />
      <Tokenomics />
    </>
  );
}

export default page;

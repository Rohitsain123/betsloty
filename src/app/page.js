import React from "react";
import CommonHero from "./components/common/CommonHero";
import Coinspeaker from "./components/common/Coinspeaker";
import Vision from "./components/common/Vision";
import Roadmap from "./components/pages/home/Roadmap";
import Tokenomics from "./components/pages/home/Tokenomics";
import Airdrop from "./components/pages/home/Airdrop";
import Staking from "./components/pages/home/Staking";
import Footer from "./components/common/Footer";
import Question from "./components/pages/home/Question";
import Buy from "./components/pages/home/Buy";
import Sharing from "./components/pages/home/Sharing";

function page() {
  return (
    <>
      <CommonHero />
      <Coinspeaker />
      <Vision />
      <Roadmap />
      <Tokenomics />
      <Airdrop />
      <Staking />
      <Sharing />
      <Buy />
      <Question />
      <Footer />
    </>
  );
}

export default page;

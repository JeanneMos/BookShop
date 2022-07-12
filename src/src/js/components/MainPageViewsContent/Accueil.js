import React from "react";

import Agency from "../Agency/Agency";
import Ceremonies from "../Ceremonies/Ceremonies";
import TransversalWrapper from "../FlowersAndTreesTransversal/TransversalWrapper";
import Homage from "../Homage/Homage";
import AccueilMessages from "../Messages/AccueilMessages";
import Obituary from "../Obituary/Obituary";

export default function Accueil({ handleActiveTab }) {
  return (
    <>
      <Homage />
      <Ceremonies />
      <TransversalWrapper />
      <AccueilMessages handleActiveTab={handleActiveTab} />
      <Obituary />
      <Agency />
    </>
  );
}

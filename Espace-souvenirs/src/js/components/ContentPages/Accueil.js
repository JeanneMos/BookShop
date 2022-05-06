import React from "react";

import TabPanel from "./TabPanel";
import TransversalWrapper from "../FlowersAndTreesTransversal/TransversalWrapper";

import Homage from "../Homage/Homage";
import AccueilMessages from "../Messages/AccueilMessages";
import Agency from "../Agency/Agency";

export default function Accueil({ name, handleActiveTab }) {
  return (
    <TabPanel name={name}>
      <Homage />
      <TransversalWrapper />
      <AccueilMessages handleActiveTab={handleActiveTab} />
      <Agency />
    </TabPanel>
  );
}

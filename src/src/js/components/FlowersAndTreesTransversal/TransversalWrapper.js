import React from "react";
import { useSelector } from "react-redux";

import PrestationTransversal from "./PrestationTransversal";

/* import './transversalBlocks.scss';
 */
export default function TransversalWrapper() {
  const globalInfoState = useSelector((state) => state.globalInfo);

  if (!globalInfoState.prestations || globalInfoState.prestations?.length === 0)
    return null;
  return (
    <div className="transversal-blocks" data-testid="transversalBlocks">
      {globalInfoState.prestations.map((prestation) => {
        return (
          <PrestationTransversal
            key={prestation.field_prest_titre}
            prestation={prestation}
          />
        );
      })}
    </div>
  );
}

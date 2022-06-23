import React from "react";
import { useSelector } from "react-redux";

import CeremonyItem from "./CeremonyItem";

export default function Ceremonies() {
  const globalInfoState = useSelector((state) => state.globalInfo);

  if (
    globalInfoState?.obituary?.ceremonies &&
    globalInfoState?.obituary?.ceremonies.length > 0
  ) {
    return (
      <div className="accueil-ceremonies-wrapper">
        <h2 className="content-heading-2" data-testid="ceremonies">
          Cérémonie
        </h2>
        {globalInfoState?.agency?.agency_name && (
          <p className="ceremonies-agency">
            <span>
              Cet hommage est organisé par l’agence{" "}
              {globalInfoState?.agency?.agency_name}
            </span>
            {globalInfoState?.marque?.logo?.url && (
              <>
                <span className="ceremony-agency-separator"></span>
                <span>
                  <img
                    className="ceremony-agency-logo"
                    src={globalInfoState?.marque?.logo?.url}
                  />
                </span>
              </>
            )}
          </p>
        )}
        <div className="ceremonies-wrapper">
          <ul className="ceremonies-list" data-testid="ceremonies-list">
            {globalInfoState?.obituary?.ceremonies.map((ceremony) => {
              return (
                <CeremonyItem key={ceremony.datelieu} ceremony={ceremony} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  return null;
}

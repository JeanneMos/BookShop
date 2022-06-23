import React from "react";
import { useSelector } from "react-redux";

import { getFullYear } from "../../services/formatting";

export default function DefuntInfos() {
  const globalInfoState = useSelector((state) => state.globalInfo);

  if (!globalInfoState.defunt) return null;

  const { civility, lastName, firstName, birthDate, deathDate, birthName } =
    globalInfoState.defunt;
  return (
    <div className="defunt-infos-wrapper" data-testid="defuntInfosWrapper">
      <p className="defunt-name" data-testid="defuntName">
        {civility} <span className="info-firstname">{firstName}</span>{" "}
        <span className="info-lastname">{lastName}</span>
      </p>
      <div className="defunt-infos">
        <p>
          {birthName && (
            <>
              <span>Né(e)</span>
              <span className="defunt-birth-name">&nbsp;{birthName}</span>
              <span className="defunt-infos-separator">|</span>
            </>
          )}

          <span className="sr-only">Date de naissance</span>
          <span className="defunt-date" data-testid="defuntBirthdate">
            {getFullYear(birthDate)}
          </span>
          {" - "}
          <span className="sr-only">Date de mort</span>
          <span className="defunt-date" data-testid="defuntDeathdate">
            {getFullYear(deathDate)}
          </span>
        </p>
      </div>
    </div>
  );
}

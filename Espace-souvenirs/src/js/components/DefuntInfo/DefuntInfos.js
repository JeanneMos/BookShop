import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFullYear, civilities } from "../../services/formatting";

export default function DefuntInfos() {
  const userState = useSelector((state) => state.user);

  if (!userState.defunt) return null;

  const { civility, lastName, firstName, birthDate, deathDate, birthName } =
    userState.defunt;
  return (
    <div className="defunt-infos-wrapper" data-testid="defuntInfosWrapper">
      <p className="defunt-name" data-testid="defuntName">
        {civilities[civility]} {firstName} {lastName}
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

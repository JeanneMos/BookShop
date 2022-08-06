import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { hoursFormat, timeStampToDate } from "../../services/formatting";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/StyledLink";

const CeremonyItem = React.memo(function CeremonyItem({ ceremony }) {
  const {
    adresse,
    codepostal,
    commune,
    adresse2,
    datelieu,
    nom,
    pays,
    type,
    availability,
  } = ceremony;
  const globalInfoState = useSelector((state) => state.globalInfo);

  const memoizedHour = useMemo(() => {
    if (datelieu) return hoursFormat(timeStampToDate(datelieu));
  }, [datelieu]);

  return (
    <li>
      <span className="ceremony-place-icon">
        <Icon name="anneau" iconClass="anneau-icon" />
      </span>
      {datelieu && (
        <p className="ceremony-date">
          <span className="ceremony-hour">{memoizedHour}</span>
          <span>{timeStampToDate(datelieu).toLocaleDateString("fr")}</span>
        </p>
      )}
      <div className="ceremony-place">
        {type && (
          <p className="ceremony-type-with-link">
            <span>{type}</span>
            {globalInfoState?.marque?.urlBoutique &&
              globalInfoState?.obituary?.fleursAutorise && (
                <StyledLink
                  as="ahref"
                  linkTo={globalInfoState?.marque?.urlBoutique}
                  linkClass="link bg-white ceremony-boutique-link"
                  dataTestid="boutiqueCta"
                  target="_blank"
                >
                  <span className="link-text">offrir des fleurs</span>
                  <span className="separator">&nbsp;</span>
                  <Icon name="next" iconClass="current-icon" />
                </StyledLink>
              )}
          </p>
        )}

        <div className="ceremony-name-address">
          <Icon name="geoloc" iconClass="geoloc-icon" />
          <div>
            <p className="ceremony-name">
              <span>{nom}</span>
            </p>
            <p className="ceremony-address">
              {adresse && <span>{adresse}</span>}
              {adresse2 && <span>{adresse2}</span>}
              <br />
              {codepostal && <span className="mr-5">{codepostal}</span>}
              {commune && <span>{commune}</span>}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
});

export default CeremonyItem;

import React from "react";
import { useSelector } from "react-redux";
import { isEmptyArray } from "../../services/formatting";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/Link";


export default function Agency() {
  const userState = useSelector((state) => state.user);

  if (!userState?.agency || isEmptyArray(userState?.agency)) return null;
  const {
    agency: {
      agency_name,
      agency_address,
      agency_postal_code,
      agency_town,
      agency_phone,
      agency_url,
    },
  } = userState;
  return (
    <div className="accueil-agency-wrapper">
      <div className="agency-wrapper" data-testid="agencyWrapper">
        <h2 className="content-heading-2">L&apos;agence organisatrice</h2>
        <div className="agency-infos">
          <p className="agency-title">{agency_name}</p>
          <p className="agency-address">{agency_address}</p>
          <p className="agency-zipcode">
            {agency_postal_code} {agency_town}
          </p>
          <div className="agency-contact">
            {agency_phone && (
              <p className="agency-phone" data-testid="agencyPhone">
                <span>Tel:&nbsp;</span>
                <span className="sr-only">téléphone</span>
                <StyledLink
                  as="ahref"
                  linkTo={`tel:${agency_phone}`}
                  linkClass="bg-transparent agency-phone-link"
                >
                  {agency_phone}
                </StyledLink>
              </p>
            )}
            {agency_url && (
              <StyledLink
                as="ahref"
                linkTo={agency_url}
                linkClass="link bg-current"
                dataTestid="agencyCta"
              >
                <span className="link-text">Fiche agence</span>
                <span className="separator">&nbsp;</span>
                <Icon name="next" iconClass="white-icon" />
              </StyledLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

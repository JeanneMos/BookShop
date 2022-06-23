import imgPlaceholder from "Images/profile-grey.jpg";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { dateFormat } from "../../services/formatting";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/StyledLink";
import DefuntModalImagePlaceholder from "../Upload/DefuntModalImagePlaceholder";

export default function Obituary() {
  const globalInfoState = useSelector((state) => state.globalInfo);

  const displayAgency = () => {
    if (!globalInfoState?.agency) return null;
    if (globalInfoState?.agency) {
      const { agency_marque, agency_town, agency_postal_code } =
        globalInfoState.agency;
      return (
        <div className="obituary-agency" data-testid="obituary-agency">
          {agency_marque} {agency_town} ({agency_postal_code?.slice(0, 2)})
        </div>
      );
    }
  };
  if (!globalInfoState?.obituary) return null;
  return (
    <div className="accueil-obituary-wrapper" data-testid="obituary">
      <h2 className="content-heading-2">Avis de décès</h2>
      <div className="obituary-wrapper">
        <div className="obituary-content-wrapper">
          <div className="obituary-photo">
            <div className="image-preview">
              <img
                alt=""
                className="image-preview-image"
                width="200"
                height="200"
                data-testid="obituary-photo"
                src={
                  globalInfoState?.obituary?.photo?.length
                    ? globalInfoState?.obituary?.photo?.url
                    : imgPlaceholder
                }
              />
            </div>
          </div>
          <div className="obituary-content">
            <div className="obituary-description">
              <p className="obituary-name">
                {globalInfoState?.obituary?.civility}&nbsp;
                <span className="info-firstname">
                  {globalInfoState?.obituary?.firstName}
                </span>
                &nbsp;
                <span className="info-lastname">
                  {globalInfoState?.obituary?.lastName}
                </span>
                {globalInfoState?.obituary?.maidenName && (
                  <span className="d-block">
                    né(e)&nbsp;
                    <span className="info-lastname">
                      {globalInfoState?.obituary?.maidenName}
                    </span>
                  </span>
                )}
              </p>
              <p className="obituary-place">
                {globalInfoState?.obituary?.city}&nbsp;(
                {globalInfoState?.obituary?.zipCode?.slice(0, 2)})
              </p>
              <p className="obituary-publication">
                {globalInfoState?.obituary?.publicationStatus}&nbsp;
                {dateFormat(
                  new Date(globalInfoState?.obituary?.publicationDate),
                )}
              </p>
            </div>
            {displayAgency()}
            {globalInfoState?.obituary?.urlAvis && (
              <div className="obituary-links">
                <StyledLink
                  as="ahref"
                  linkTo={globalInfoState?.obituary?.urlAvis}
                  linkClass="link bg-white"
                  dataTestid="avisCta"
                  target="_blank"
                >
                  <span className="link-text">détail</span>
                  <span className="separator">&nbsp;</span>
                  <Icon name="next" iconClass="current-icon" />
                </StyledLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

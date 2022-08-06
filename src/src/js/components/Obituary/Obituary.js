import React from "react";
import { useSelector } from "react-redux";

import imgPlaceholder from "../../../assets/images/profile-grey.jpg";
import { dateFormat, timeStampToDate } from "../../services/formatting";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/StyledLink";

export default function Obituary() {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);

  const displayAgency = () => {
    if (!globalInfoState?.agency) return null;
    if (globalInfoState?.agency) {
      const { agency_marque, agency_town, agency_postal_code } =
        globalInfoState.agency;
      return (
        <div className="obituary-agency" data-testid="obituary-agency">
          {agency_marque} {agency_town}{" "}
          {agency_postal_code ? `(${agency_postal_code?.slice(0, 2)})` : null}
        </div>
      );
    }
  };

  if (!globalInfoState?.obituary) return null;

  return (
    <div className="accueil-obituary-wrapper" data-testid="obituary">
      <div className="heading-button-wrapper">
        <h2 className="content-heading-2">Avis de décès</h2>
        {globalInfoState?.obituary?.urlUpdateObituary &&
          administratorState?.isAdmin && (
            <StyledLink
              as="ahref"
              linkTo={globalInfoState?.obituary?.urlUpdateObituary}
              linkClass="link bg-current edit-obituary-link"
              dataTestid="updateObituaryCta"
              target="_blank"
            >
              <Icon name="pencil" iconClass="edit-text-icon" />
            </StyledLink>
          )}
      </div>
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
              {globalInfoState?.obituary?.publicationDate ? (
                <p className="obituary-publication">
                  {globalInfoState?.obituary?.publicationStatus}&nbsp;
                  {dateFormat(
                    new Date(
                      timeStampToDate(
                        globalInfoState?.obituary?.publicationDate,
                      ),
                    ),
                  )}
                </p>
              ) : null}
            </div>
            {displayAgency()}
            {globalInfoState?.obituary?.urlAvis && (
              <div className="obituary-links">
                {globalInfoState?.obituary?.nombreCondoleances &&
                globalInfoState?.obituary?.nombreCondoleances > 0 &&
                administratorState?.isAdmin ? (
                  <StyledLink
                    as="ahref"
                    linkTo={globalInfoState?.obituary?.urlDetailsObituary}
                    linkClass="link bg-current number-condoleances-link"
                    dataTestid="detailObituaryCta"
                    target="_blank"
                  >
                    {globalInfoState?.obituary?.nombreCondoleances > 1 ? (
                      <span className="link-text">
                        {globalInfoState?.obituary?.nombreCondoleances}{" "}
                        condoléances
                      </span>
                    ) : (
                      <span className="link-text">
                        {globalInfoState?.obituary?.nombreCondoleances}{" "}
                        condoléance
                      </span>
                    )}
                    <span className="separator">&nbsp;</span>
                    <Icon name="next" iconClass="white-icon" />
                  </StyledLink>
                ) : null}
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

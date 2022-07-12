import React from "react";

import Icon from "../Icons/Icon";
import StyledLink from "../Link/StyledLink";

export default function LinkToMyAccount({ link }) {
  if (!link) return null;
  return (
    <div className="my-15">
      <StyledLink
        linkClass="link bg-transparent"
        as="ahref"
        linkTo={link}
        dataTestid="linkToMyaccount"
      >
        <Icon name="next" iconClass="current-icon previous-icon" />
        <span className="separator">&nbsp;</span>
        <span className="link-text">retour à l&apos;avis de décès</span>
      </StyledLink>
    </div>
  );
}

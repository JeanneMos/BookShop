import React from "react";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/Link";

export default function MailTo({ email, subject }) {
  const customSubject = subject ? `?subject=${subject}` : null;
  return (
    <StyledLink
      as="ahref"
      linkTo={`mailto:${email}${customSubject}`}
      linkClass="link bg-transparent"
    >
      <Icon name="envelope" iconClass="current-icon envelope-icon" />
      <span className="separator">&nbsp;</span>
      <span className="link-text">Répondre</span>
    </StyledLink>
  );
}

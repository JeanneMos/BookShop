import React from "react";

import { decoded, sanitizedText } from "../../services/formatting";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/StyledLink";

export default function PrestationTransversal({ prestation }) {
  const {
    field_prest_titre: title,
    field_prest_image: image,
    field_prest_description: description,
    field_prest_url: cta,
  } = prestation;
  return (
    <article className="transversal-item">
      {image?.field_media_image?.url && (
        <div className="transversal-image-wrapper">
          <picture>
            <source
              srcSet={image?.field_media_image?.url}
              media="(min-width: 650px)"
            />
            <img
              className="transversal-image"
              loading="lazy"
              src={image?.field_media_image?.url}
              alt=""
              width="452"
              height="250"
            />
          </picture>
        </div>
      )}

      <div className="transversal-content">
        <h3 className="title-underlined">{title}</h3>
        <p dangerouslySetInnerHTML={sanitizedText(decoded(description))} />
        <StyledLink
          as="ahref"
          linkTo={cta?.url}
          target={cta?.attributes?.external ? "_blank" : null}
          linkClass="link bg-current"
        >
          <span className="link-text">{cta?.title}</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </StyledLink>
      </div>
    </article>
  );
}

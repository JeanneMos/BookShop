import React from 'react';
import flowersDesktop from 'Images/transversal/flowers-desktop.jpg';
import flowersMobile from 'Images/transversal/flowers-mobile.jpg';
import StyledLink from '../Link/Link';
import { textWithBreaks } from '../../services/formatting';
import Icon from '../Icons/Icon';


export default function PrestationTransversal({prestation}) {
  const { field_prest_titre : title,field_prest_image:images, field_prest_description: description, field_prest_url: cta} = prestation;
  return (
    <article className="transversal-item">
      {images && (
        <picture>
          <source srcSet={images[0]?.url} media="(min-width: 650px)" />
          <source srcSet={images[0]?.url} />
          <img className="transversal-image" loading='lazy' src={images[0]?.url} alt="" width="452" height="250" />
        </picture>
      )}

      <div className="transversal-content">
        <h3 className="title-underlined">{title}</h3>
        <p>{textWithBreaks(description)}</p>
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

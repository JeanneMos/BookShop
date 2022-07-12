import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";

const pathToHeroBanners = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/desktop/`;
const pathToHeroBannersMobile = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/mobile/`;

export default function HeroBanner({ source, handleModifyHero }) {
  if (!window.location.origin) {
    window.location.origin =
      window.location.protocol + "//" + window.location.hostname;
  }
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);

  const getHeroBannerImage = globalInfoState.heroBannerImage.name
    ? `${pathToHeroBanners}${globalInfoState.heroBannerImage.name}`
    : source;
  const getHeroBannerImageMobile = globalInfoState.heroBannerImage.name
    ? `${pathToHeroBannersMobile}${globalInfoState.heroBannerImage.name}`
    : source;

  return (
    <div className="hero-banner-wrapper">
      <picture>
        <source media="(min-width: 650px)" srcSet={getHeroBannerImage} />
        <source media="(max-width: 649px)" srcSet={getHeroBannerImageMobile} />
        <img src={getHeroBannerImage} alt="" />
      </picture>
      {administratorState.isAdmin && (
        <Button
          type="button"
          dataTestid="heroBannerEdit"
          btnClass="hero-banner-modify-button"
          onClickAction={handleModifyHero}
        >
          <Icon name="photo" iconClass="photo-icon" />
          <span className="sr-only">Modifier la bannière</span>
        </Button>
      )}
    </div>
  );
}

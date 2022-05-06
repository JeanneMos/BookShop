import React from 'react';
import { useSelector } from 'react-redux';

const pathToHeroBanners = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/`;
const pathToHeroBannersMobile = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/mobile/`;

export default function HeroBanner({ source, handleModifyHero }) {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname;
  }
  const userState = useSelector((state) => state.user);
 
  const getHeroBannerImage = userState.heroBannerImage.name ? `${pathToHeroBanners}${userState.heroBannerImage.name}`: source;
  const getHeroBannerImageMobile = userState.heroBannerImage.name ? `${pathToHeroBannersMobile}${userState.heroBannerImage.name}`: source;

  return (
    <div className="hero-banner-wrapper">
      <picture>
        <source media="(min-width: 650px)" srcSet={getHeroBannerImage} />
        <source media="(max-width: 649px)" srcSet={getHeroBannerImageMobile} />
        <img src={getHeroBannerImage} alt="" />
      </picture>
    </div>
  );
}

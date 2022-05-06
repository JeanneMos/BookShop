import React from 'react';
import img from 'Images/bg-images/hero.jpg';
import DefuntImg from './DefuntImg';
import HeroBanner from './HeroBanner';
import ShareButtons from './ShareButtons';
import useViewport from '../../services/useViewport';
import { mobileBreakpoint } from '../../constants';
import DefuntWithAdministrator from './DefuntWithAdministrator';
import { useDispatch } from 'react-redux';
import { modalOpened } from '../../context/modalSlice';

/* import './infos.scss'; */

export default function InfoWrapper() {

  const { width } = useViewport();
  const dispatch = useDispatch()

  const handleModifyHero = () => {
    dispatch(modalOpened({ theme: 'dark', hasCloseButton: true, modalType: "HeroBannerModal" }));
  };
  const handleModifyPicture = () => {
    dispatch(modalOpened({ theme: 'dark', hasCloseButton: true, modalType: "DefuntPictureModal" }));
  };

  return (
    <>
      <HeroBanner source={img} handleModifyHero={handleModifyHero} />
      {width < mobileBreakpoint
        ? (
          <>
            <DefuntImg handleModifyPicture={handleModifyPicture} />
            <DefuntWithAdministrator/>
            <ShareButtons />
          </>
        )
        : (
          <>
            <DefuntImg handleModifyPicture={handleModifyPicture} />
            <ShareButtons />
            <DefuntWithAdministrator/>
          </>
        ) }

    </>
  );
}

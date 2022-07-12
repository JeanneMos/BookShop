import img from "Images/bg-images/hero.jpg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { mobileBreakpoint } from "../../constants";
import { modalOpened } from "../../context/modalSlice";
import useViewport from "../../services/useViewport";
import DefuntImg from "./DefuntImg";
import DefuntWithAdministrator from "./DefuntWithAdministrator";
import HeroBanner from "./HeroBanner";
import LinkToMyAccount from "./LinkToMyAccount";
import ShareButtons from "./ShareButtons";

export default function InfoWrapper() {
  const { width } = useViewport();
  const dispatch = useDispatch();
  const globalInfoState = useSelector((state) => state.globalInfo);
  const administratorState = useSelector((state) => state.administrator);

  const handleModifyHero = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "HeroBannerModal",
      }),
    );
  };
  const handleModifyPicture = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "DefuntPictureModal",
      }),
    );
  };

  return (
    <>
      <h1 className="sr-only">
        Espace hommage de {globalInfoState?.defunt?.civility}{" "}
        {globalInfoState?.defunt?.lastName} {globalInfoState?.defunt?.firstName}
      </h1>
      {administratorState?.isAdmin &&
      globalInfoState?.obituary?.urlDetailsObituary ? (
        <LinkToMyAccount link={globalInfoState.obituary.urlDetailsObituary} />
      ) : null}
      <HeroBanner source={img} handleModifyHero={handleModifyHero} />
      {width < mobileBreakpoint ? (
        <>
          <DefuntImg handleModifyPicture={handleModifyPicture} />
          <DefuntWithAdministrator />
          <ShareButtons />
        </>
      ) : (
        <>
          <DefuntImg handleModifyPicture={handleModifyPicture} />
          <ShareButtons />
          <DefuntWithAdministrator />
        </>
      )}
    </>
  );
}

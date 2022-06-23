import React from "react";

import ShareDirectLink from "../DefuntInfo/ShareDirectLink";
import ShareSocialMedias from "../DefuntInfo/ShareSocialMedias";
import ModalTitle from "./ModalTitle";

export default function ShareModal() {
  return (
    <>
      <ModalTitle>Partager l’espace à vos proches</ModalTitle>
      <ShareDirectLink />
      <ShareSocialMedias />
    </>
  );
}

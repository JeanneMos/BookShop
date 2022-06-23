import React from "react";
import { useSelector } from "react-redux";
import { EmailShareButton, WhatsappShareButton } from "react-share";

import { capitalisedName } from "../../services/formatting";
import Icon from "../Icons/Icon";

const directLink = window.location.href;

export default function ShareSocialMedias() {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const { firstName, lastName } = globalInfoState.defunt;

  const bodyEmail = `Vous êtes invité à rejoindre l'Espace Souvenirs en l'hommage de ${
    capitalisedName(firstName) || ""
  } ${lastName}.
  %0D%0A %0D%0A ${directLink}
  %0D%0A %0D%0A Cet espace privé est destiné à recueillir vos témoignages : un message, un souvenir, une anecdote ou une photo, illustrant un moment de vie.
  %0D%0A %0D%0A Merci pour votre précieux soutien.`;

  const subjectWithUser = `Partage de l'Espace Souvenirs de ${
    capitalisedName(firstName) || ""
  } ${lastName}`;

  return (
    <div>
      <p className="share-social-media-intro">Ou directement :</p>
      <div className="social-media-wrapper">
        <div className="social-media-item">
          <WhatsappShareButton url={directLink}>
            <Icon name="whatsapp" iconClass="share-icon" />
            <span className="social-media-text">Whatsapp</span>
          </WhatsappShareButton>
        </div>
        <div className="social-media-item">
          <a href={`mailto:?subject=${subjectWithUser}&body=${bodyEmail}`}>
            <Icon name="share-email" iconClass="share-icon" />
            <span className="social-media-text">Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
}
